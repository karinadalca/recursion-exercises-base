const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  const array = flattenTreeToArray(root);
  let find = _.find(array, (element) => {return element.id === id});
  return find;
};

const getElementsByClassName = function(root, className) {
  const array = flattenTreeToArray(root);
  const filter = _.filter(array, (element) => {
    return element.className === className 
    || (element.className
    && element.className.includes(className))});
  return filter;
};

const getElementsByTagName = function(root, tagName) {
  const array = flattenTreeToArray(root);
  const filter = _.filter(array, (element) => {return element.tagName === tagName});
  return filter;
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
