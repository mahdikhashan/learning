class Tracker:
    def __init__(self, *loggers: "Logger"):
        self.epoch = 0
        self.update = 0
        self._tag = None
        self._losses = []
        self._summary = {}

        self.loggers = list(loggers)

    def start_epoch(self, count: bool = True):
        if count:
            self.epoch += 1

        self._summary.clear()
        for logger in self.loggers:
            logger.on_epoch_start(self.epoch)

    def end_epoch(self):
        for logger in self.loggers:
            logger.on_epoch_end(self.epoch, **self._summary)

        return dict(self._summary)

    def start(self, tag: str, num_batches: int = None):
        self._tag = tag
        self._losses.clear()
        for logger in self.loggers:
            logger.on_iter_start(self.epoch, self.update, self._tag, num_steps_expected=num_batches)

    def step(self, loss: float):
        self._losses.append(loss)
        for logger in self.loggers:
            logger.on_iter_update(self.epoch, self.update, self._tag, loss=loss)

    def summary(self):
        losses = self._losses
        avg_loss = float("nan") if len(losses) == 0 else sum(losses) / len(losses)
        self._summary[self._tag] = avg_loss
        for logger in self.loggers:
            logger.on_iter_end(self.epoch, self.update, self._tag, avg_loss=avg_loss)

        return avg_loss

    def count_update(self):
        self.update += 1
        for logger in self.loggers:
            logger.on_update(self.epoch, self.update)
