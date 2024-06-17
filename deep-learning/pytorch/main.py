import os.path
import random
from pathlib import Path

import torch
import torchvision
from torch import nn, optim
from tqdm.notebook import tqdm
from torch.utils.data import DataLoader, random_split
from torch.utils.tensorboard import SummaryWriter

torch.manual_seed(1806)
device = 'cuda' if torch.cuda.is_available() else 'cpu'
print(device)

# google colab data management
try:
    from google.colab import drive
    drive.mount('/content/gdrive')
    _home = 'gdrive/MyDrive/'
except ImportError:
    _home = '~'
finally:
    data_root = os.path.join(_home, '.pytorch')

print(data_root)

from torchvision import transforms
from trainer import Trainer

mean, std = .1307, .3081
normalise = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize((mean, ), (std, ))
])

dataset = torchvision.datasets.FashionMNIST(data_root, train=False, transform=normalise, download=True)
loader = DataLoader(dataset, batch_size=1024, shuffle=True, num_workers=0)

conv_net = nn.Sequential(
    nn.Conv2d(1, 8, 5), nn.MaxPool2d(3), nn.ELU(),
    nn.Conv2d(8, 16, 7), nn.ELU(),
    nn.Flatten(),
    nn.Linear(64, 10),
)

trainer = Trainer(
    model=conv_net.to(device),
    criterion=nn.CrossEntropyLoss(reduction="sum"),
    optimizer=optim.Adam(conv_net.parameters(), lr=1e-2),
)

results = trainer.train(loader, loader)

print(results)

assert trainer.tracker.epoch == 1, (
    f"ex1: expected tracker to have counted 1 epoch, but found {trainer.tracker.epoch} (-0.5 points)"
)

assert "train" in results, "ex1: could not find training loss in results"
assert "valid" in results, "ex1: could not find validation loss in results"

results = trainer.evaluate(loader, tag="extra")
