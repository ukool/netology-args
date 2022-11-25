// #!/Users/ukool/.nvm/versions/node/v18.12.1/bin/node

const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const { DateUtility } = require('./DateUtility');
const { options, commands } = require('./options');

const dateUtility = new DateUtility();

const argv =
  yargs(hideBin(process.argv))
  .option(options.year, {
    alias: 'y',
    type: 'boolean',
    description: 'Вывод текущего года',
  })
  .option(options.month, {
    alias: 'm',
    type: 'boolean',
    description: 'Вывод текущего месяца',
  })
  .option(options.day, {
    alias: 'd',
    type: 'boolean',
    description: 'Вывод текущего дня',
  })
  .command(
    commands.current,
    'Текущая дата и время в формате ISO',
    function (yargs) {},
    function (argv) {
      dateUtility.parse(argv);
    }
  )
  .command(
    commands.add,
    'Получить дату в будущем',
    function (yargs) {},
    function (argv) {
      dateUtility.printUpdatedDate(argv);
    }
  )
  .command(
    commands.sub,
    'Получить дату в прошлом',
    function (yargs) {},
    function (argv) {
      dateUtility.printUpdatedDate(argv);
    }
  )
  .argv


