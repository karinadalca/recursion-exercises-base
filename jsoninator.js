const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...

const stringify = function(obj) {
  if(obj == null){
    return 'null';
  }

  if(typeof obj == 'string') {
    if(obj.length < 1){
      return ''
    } else if (obj.length >= 1){
      return '\"' + obj + '\"';
    }
  }

  if(typeof obj === 'object' && obj.toString() !== '[object Object]') {
    if(obj.length < 1){
      return '[]';
    } else if(obj.length >= 1){
      return '[' + _.map(obj, function (element)
        { return stringify(element)}) + ']';
    }
  }

  if(obj.toString() === '[object Object]'){
    let output = '';
    let key = Object.keys(obj);

    if(key.length < 1){
      return '{}';
    } else if(key.length >= 1){
      for(let i = 0; i < key.length; i++){
        return '{' + stringify(key[i]) + ':' +  stringify(obj[key[i]]) + '}';
      }
    }
  }

  return obj.toString();
};

module.exports = {
  stringify: stringify
};