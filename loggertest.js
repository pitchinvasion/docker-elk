var winston = require('winston');

//
// Requiring `winston-logstash` will expose
// `winston.transports.Logstash`
//
require('winston-logstash');

var config = {
  levels: {
    debug: 0,
    sns: 1,
    info: 2,
    warn: 3,
    alert: 4,
    error: 5
  },
  colors: {
    debug: 'grey',
    sns: 'blue',
    info: 'green',
    warn: 'yellow',
    alert: 'cyan',
    error: 'red'
  }
};
var Logger = new (winston.Logger)({
  levels: config.levels,
  colors: config.colors
});

Logger.add(winston.transports.Console, {
  level:'debug',
  colorize: true,
  timestamp: true
});

Logger.add(winston.transports.Logstash, {
  port: 5000,
  node_name: 'my node name',
  host: '192.168.99.100'
});

setTimeout(function() {
  Logger.info('Hello, England');
}, 100);

setTimeout(function() {
  process.exit(1);
}, 2000);


