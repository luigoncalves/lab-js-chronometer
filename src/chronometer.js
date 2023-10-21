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
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    const min = this.currentTime / 60;
    return Math.floor(min);
  }

  getSeconds() {
    // ... your code goes here
    const sec = this.currentTime % 60;
    return sec;
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

  // return value.toString().padStart(2,'0)   vai adicionando digitos à string até ter dois caracteres

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
    )}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}
