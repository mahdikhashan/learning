import { expect, test } from 'vitest'
import { Timer } from '../../utils/timer'

test('sets timer for 1000 ms', () => {
  const timer = new Timer(1000)
  expect(timer.getMilliseconds()).toEqual(0)
  expect(timer.tenthOfMilliseconds()).toEqual("00")
  expect(timer.hundredthsOfMilliseconds()).toEqual("000")
  expect(timer.seconds()).toEqual(1)
  expect(timer.minutes()).toEqual(0)
  expect(timer.hours()).toEqual(0)
})

test('sets timer for 1921 ms', () => {
  const timer = new Timer(1921)
  expect(timer.getMilliseconds()).toEqual(921)
  expect(timer.tenthOfMilliseconds()).toEqual("92")
  expect(timer.hundredthsOfMilliseconds()).toEqual("921")
  expect(timer.seconds()).toEqual(1)
  expect(timer.minutes()).toEqual(0)
  expect(timer.hours()).toEqual(0)
})

test('sets timer for 123340 ms', () => {
  const timer = new Timer(123340)
  expect(timer.getMilliseconds()).toEqual(340)
  expect(timer.tenthOfMilliseconds()).toEqual("34")
  expect(timer.hundredthsOfMilliseconds()).toEqual("340")
  expect(timer.seconds()).toEqual(3)
  expect(timer.minutes()).toEqual(2)
  expect(timer.hours()).toEqual(0)
})

test('sets timer for 7654332 ms', () => {
  const timer = new Timer(7654332)
  expect(timer.getMilliseconds()).toEqual(332)
  expect(timer.tenthOfMilliseconds()).toEqual("33")
  expect(timer.hundredthsOfMilliseconds()).toEqual("332")
  expect(timer.seconds()).toEqual(34)
  expect(timer.minutes()).toEqual(7)
  expect(timer.hours()).toEqual(2)
})

test('sets timer for 0 ms', () => {
  const timer = new Timer(0);
  expect(timer.getMilliseconds()).toEqual(0);
  expect(timer.tenthOfMilliseconds()).toEqual("00");
  expect(timer.hundredthsOfMilliseconds()).toEqual("000");
  expect(timer.seconds()).toEqual(0);
  expect(timer.minutes()).toEqual(0);
  expect(timer.hours()).toEqual(0);
});

test('sets timer for 999 ms', () => {
  const timer = new Timer(999);
  expect(timer.getMilliseconds()).toEqual(999);
  expect(timer.tenthOfMilliseconds()).toEqual("99");
  expect(timer.hundredthsOfMilliseconds()).toEqual("999");
  expect(timer.seconds()).toEqual(0);
  expect(timer.minutes()).toEqual(0);
  expect(timer.hours()).toEqual(0);
});

test('sets timer for large value (e.g., 999999999 ms)', () => {
  const timer = new Timer(999999999);
  expect(timer.getMilliseconds()).toEqual(999);
  expect(timer.tenthOfMilliseconds()).toEqual("99");
  expect(timer.hundredthsOfMilliseconds()).toEqual("999");
  expect(timer.seconds()).toEqual(39);
  expect(timer.minutes()).toEqual(46);
  expect(timer.hours()).toEqual(277);
});

test('sets timer for 3600000 ms', () => {
  const timer = new Timer(3600000);
  expect(timer.getMilliseconds()).toEqual(0);
  expect(timer.tenthOfMilliseconds()).toEqual("00");
  expect(timer.hundredthsOfMilliseconds()).toEqual("000");
  expect(timer.seconds()).toEqual(0);
  expect(timer.minutes()).toEqual(0);
  expect(timer.hours()).toEqual(1);
});

test('sets timer for 6200000 ms', () => {
  const timer = new Timer(6200000);
  expect(timer.getMilliseconds()).toEqual(0);
  expect(timer.tenthOfMilliseconds()).toEqual("00");
  expect(timer.hundredthsOfMilliseconds()).toEqual("000");
  expect(timer.seconds()).toEqual(20);
  expect(timer.minutes()).toEqual(43);
  expect(timer.hours()).toEqual(1);
});
