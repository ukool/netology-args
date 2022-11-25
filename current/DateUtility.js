const { options, commands } = require('./options')

class DateUtility {
  currentDate = '';
  year = 0
  month = 0
  day = 0
  commands = [commands.add, commands.sub];

  constructor() {
    this.currentDate = new Date();
    this.year = this.currentDate.getFullYear()
    this.month = this.currentDate.getMonth()
    this.day = this.currentDate.getDate()
  }

  printDate() {
    console.log(this.currentDate);
  }

  printYear() {
    console.log(this.year);
  }

  printMonth() {
    console.log(this.month + 1);
  }

  printDay() {
    console.log(this.day);
  }

  parse(argv) {
    const flag = this.getEnabledFlag(argv)

    switch (flag) {
      case options.year:
        this.printYear();
        break;
      case options.month:
        this.printMonth();
        break;
      case options.day:
        this.printDay();
        break;
      default:
        this.printDate()
    }
  }

  printUpdatedDate(argv) {
    const isSub = this.getOperationName(argv) === commands.sub
    const count = this.getCount(argv);
    const shiftNumber = isSub ? -count : count
    const flag = this.getEnabledFlag(argv);

    let result = '';

    switch (flag) {
      case options.year:
        this.currentDate.setFullYear(this.year + shiftNumber);
        result = this.currentDate.getFullYear();
        break;
      case options.month:
        this.currentDate.setMonth(this.month + shiftNumber);
        result = this.currentDate.getMonth() + 1;
        break;
      case options.day:
        this.currentDate.setDate(this.day + shiftNumber);
        result = this.currentDate.getDate();
        break;
    }

    console.log(result);
  }

  getCount({ _ }) {
    const numbers = _
      .filter((item) => !this.commands.includes(item))
      .filter((item) => typeof item === 'number');

    const count = numbers[0];

    if (!count && count !== 0) {
      throw new Error('Вы не передали второй аргумент');
    }

    return count;
  }

  getOperationName({ _ }) {
      return _.filter((item) => this.commands.includes(item))[0];
  }

  getEnabledFlag(argv) {
    let flag = ''

    Object.keys(argv).forEach((key) => {
      if (options[key]) {
        flag = key
      }
    })

    if (!flag) {
      throw new Error('Вы не передали флаг');
    }

    return flag;
  }
}

module.exports = {
  DateUtility,
}
