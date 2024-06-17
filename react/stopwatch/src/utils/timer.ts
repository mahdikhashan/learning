export class Timer {
  private milliseconds: number;

  constructor(initialTime: number) {
    this.milliseconds = initialTime;
  }

  getMilliseconds(): number {
    return this.milliseconds % 1000;
  }

  tenthOfMilliseconds(): string {
    const tenth = Math.floor((this.milliseconds % 1000) / 10);
    return tenth < 10 ? `0${tenth}` : `${tenth}`;
  }

  hundredthsOfMilliseconds(): string {
    const hundredth = this.milliseconds % 1000;
    return hundredth < 100 ? (hundredth < 10 ? `00${hundredth}` : `0${hundredth}`) : `${hundredth}`;
  }

  seconds(): number {
    return Math.floor(this.milliseconds / 1000) % 60;
  }

  minutes(): number {
    return Math.floor((this.milliseconds / (1000 * 60)) % 60);
  }

  hours(): number {
    return Math.floor(this.milliseconds / (1000 * 60 * 60));
  }
}
