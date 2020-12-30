
class Graph {
  constructor() {
    // Code goes here ...
    this.adjList = {};
  }

  addVertex(vertex) {
    // Code goes here ...
    if (!(vertex in this.adjList)) this.adjList[vertex] = [];

  }

  addEdges(srcValue, destValue) {
    // Code goes here ...
    //check if they exist in the graph
    this.addVertex(srcValue);
    this.addVertex(destValue);
    let value1 = this.adjList[srcValue];
    let value2 = this.adjList[destValue];

    value1.push(destValue);
    value2.push(srcValue);
    //value2.push(value1);

    
  
    //if not, add them as values
    //push values into corresponding neighbors array;


  }

  buildGraph(edges) {
    // Code goes here ...
  }

  breadthFirstTraversal(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalIterative(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    // Code goes here ...
  }

}



module.exports = {
  Graph
};









