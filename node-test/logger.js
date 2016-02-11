var Winston = require('winston');
require('winston-logstash');

var Winstonian = new (Winston.Logger)({
});

// Logstash
var logstash_host = 'http://192.168.99.100/';
if ( logstash_host ) {

  // set port
  var port = 5001;
  // if ( !port ) {
  //   port = 28777;
  //   console.error('Missing port in config for logstash. Using default port '+port);
  // }

  // send the app name with the logs. This should be set by the main script of each Node.js app.
  // var app = process.env.EA_logstash_app ? process.env.EA_logstash_app : 'Unknown (Node.js)';
  // var worker = process.env.EA_logstash_worker_id; // may be undefined

    Winstonian.add(Winston.transports.Logstash, {

      port: port,
      node_name: 'logstash_node ',  // name picked randomly. It's not used I believe.
      host: logstash_host,
      level: 'info',
      timestamp: true,
      json:true
      // meta: {
      //   "app":app,
      //   "worker":worker
      // },
      // max_connect_retries : -1,
      // fibonacci_backoff: true,
      // retryInterval: 100,
      // flat_retry_interval: 10000,
      // flat_retry_threshold: 9,
      // max_queue_length: 200
  });

}

module.exports = Winstonian;
