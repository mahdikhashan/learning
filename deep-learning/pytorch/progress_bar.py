from tqdm import tqdm
from collections import defaultdict
import numpy as np
import torch

from logger import Logger


class ProgressBar(Logger):
    """Log progress of epoch using a progress bar."""

    def __init__(self):
        super().__init__()
        self.losses = defaultdict(list)

    def on_epoch_start(self, epoch: int, **kwargs):
        self.epoch_progress_bar = tqdm(desc=f"Epoch {epoch}", total=kwargs.get('total_updates', 0))

    def on_iter_start(self, epoch: int, update: int, tag: str, **kwargs):
        self.current_tag = tag

    def on_iter_update(self, epoch: int, update: int, tag: str, loss, **kwargs):
        if isinstance(loss, torch.Tensor):  # Check if loss is a tensor
            loss = loss.detach().cpu().numpy()  # Detach tensor and convert to NumPy array
        self.losses[tag].append(loss)
        self.epoch_progress_bar.set_postfix({f'{tag}_loss': np.mean(self.losses[tag])}, refresh=False)
        self.epoch_progress_bar.update()

    def on_epoch_end(self, epoch: int, **kwargs):
        self.epoch_progress_bar.close()
        print(f"Epoch {epoch} Summary:")
        for tag, losses in self.losses.items():
            print(f"   {tag}_loss: {np.mean(losses)}")
        self.losses.clear()
