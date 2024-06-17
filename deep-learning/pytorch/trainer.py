import torch
from torch import nn, optim
from torch.utils.data import DataLoader

from tracker import Tracker


class Trainer:
    def __init__(
        self,
        model: nn.Module,
        criterion: nn.Module,
        optimizer: optim.Optimizer,
        tracker: Tracker = None,
    ):
        if tracker is None:
            tracker = Tracker()

        self.model = model
        self.criterion = criterion
        self.optimizer = optimizer

        self.tracker = tracker

    def state_dict(self):
        return {
            "model": self.model.state_dict(),
            "objective": self.criterion.state_dict(),
            "optimizer": self.optimizer.state_dict(),
            "num_epochs": self.tracker.epoch,
            "num_updates": self.tracker.update,
        }

    @property
    def device(self):
        return next(self.model.parameters()).device

    @torch.no_grad()
    def evaluate(self, batches: DataLoader, tag: str = None):
        """
        One epoch of evaluating the network.

        Parameters
        ----------
        batches : DataLoader
            An iterator over mini-batches of data to use for updating.
        tag : str, optional
            Identification tag for tracking loss values.

        Returns
        -------
        avg_loss : float
            The average loss over all mini-batches.
        """
        self.model.eval()
        device = self.device

        self.tracker.start_epoch(count=False)

        losses = []
        for x, y in batches:
            x, y = x.to(device), y.to(device)
            logits = self.model(x)
            loss = self.criterion(logits, y)
            losses.append(loss.item())

        avg_loss = sum(losses) / len(losses)

        self.tracker.step(avg_loss)
        self.tracker.end_epoch()

        return avg_loss

    @torch.enable_grad()
    def update(self, batches: DataLoader, tag: str = None):
        """
        One epoch of updating the network.

        Parameters
        ----------
        batches : DataLoader
            An iterator over mini-batches of data to use for updating.
        tag : str, optional
            Identification tag for tracking loss values.

        Returns
        -------
        avg_loss : float
            The average loss over all mini-batches.
        """
        self.model.train()
        device = self.device

        self.tracker.start_epoch()

        losses = []
        for x, y in batches:
            x, y = x.to(device), y.to(device)
            logits = self.model(x)
            loss = self.criterion(logits, y)
            losses.append(loss.item())

            self.optimizer.zero_grad()
            loss.backward()
            self.optimizer.step()

            self.tracker.step(loss)
            self.tracker.count_update()

        avg_loss = sum(losses) / len(losses)

        self.tracker.end_epoch()

        return avg_loss

    def train(self, train_batches, valid_batches=None, num_epochs: int = 1):
        """
        Train the network for multiple epochs.

        Parameters
        ----------
        train_batches : DataLoader
            The training data for updating the network.
        valid_batches : DataLoader, optional
            The validation data for estimating the generalisation performance.
        num_epochs : int, optional
            The number of epochs to train.

        Returns
        -------
        results : dict
            The average loss estimates after `num_epochs` epochs.

        """
        if valid_batches is None:
            valid_batches = ()

        train_losses, valid_losses = [], []
        for _ in range(num_epochs):
            self.tracker.start(tag="train")

            train_loss = self.update(train_batches, tag="update")
            valid_loss = self.evaluate(valid_batches, tag="valid")

            train_losses.append(train_loss)
            valid_losses.append(valid_loss)

            self.tracker.summary()

        return {"train": train_losses, "valid": valid_losses}
