let generate = require('node-chartist');

module.exports = function(callback, type, options, data) {

  generate(type, options, data).then (
    result => callback(null, result),
    error => callback(error)
  );

}