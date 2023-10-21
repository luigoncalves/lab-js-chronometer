class Chronometer {
  constructor() {
    // ... your code goes here
    {
      this.currentTime = 0;
      this.intervalId = null;
    }
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    const min = this.currentTime / 6000;
    return Math.floor(min);
  }

  getSeconds() {
    // ... your code goes here
    const sec = (this.currentTime % 6000) / 100;
    return Math.floor(sec);
  }

  getCentiseconds() {
    // ... your code goes here
    const cent = (this.currentTime % 6000) % 100;
    return cent;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let valueString = value.toString();
    if (valueString.length === 2) {
      return valueString;
    } else if (valueString.length === 1) {
      return '0' + valueString;
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(
      this.getSeconds()
    )}.${this.computeTwoDigitNumber(this.getCentiseconds())}`;
  }
}
