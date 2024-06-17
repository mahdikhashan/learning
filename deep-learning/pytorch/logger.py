from pathlib import Path


class Logger:
    def __init__(self, path: str = None):
        path = Path("runs") if path is None else Path(path)
        self.path = path.expanduser().resolve()

    def on_epoch_start(self, epoch: int, **kwargs):
        pass

    def on_epoch_end(self, epoch: int, **kwargs):
        pass

    def on_iter_start(self, epoch: int, update: int, tag: str, **kwargs):
        pass

    def on_iter_update(self, epoch: int, update: int, tag: str, **kwargs):
        pass

    def on_iter_end(self, epoch: int, update: int, tag: str, **kwargs):
        pass

    def on_update(self, epoch: int, update: int):
        pass
