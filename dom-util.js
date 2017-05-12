const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node
  // Your code here
  node.childNodes.forEach(childNodes => visitAllNodes(childNodes, callback));
  callback(node);
};

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  // Your code here
  let array = [];
  visitAllNodes(node, (node) => {
    array.push(node);
  });
  return array;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};