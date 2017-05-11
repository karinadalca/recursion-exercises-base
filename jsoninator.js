const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...



const stringify = function(obj) {
  return _.map(obj, function (element, index, obj) { 
    return typeof element === 'symbol' ? element.toString() : element; 
  });
};

module.exports = {
  stringify: stringify
};