from tracker import Tracker

tracker = Tracker()
tracker.start_epoch(True)

tracker.step(0.1)
tracker.step(0.2)
tracker.step(0.3)

print(tracker.summary())
