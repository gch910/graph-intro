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
    for (let i = 0; i < edges.length; i++) {
      const el = edges[i];
      this.addVertex(el[0]);
      this.addVertex(el[1]);
      this.addEdges(el[0], el[1]);
    }
    return this.adjList;
  }

  breadthFirstTraversal(startingVertex) {
    const visited = [];
    const queue = [startingVertex];

    while (queue.length) {
      let el1 = queue.shift();
      let el2 = this.adjList[el1];

      el2.forEach((val) => {
        if (!visited.includes(val)) {
          queue.push(val);
        }
      });

      if (!visited.includes(el1)) visited.push(el1);
    }
    return visited;
  }

  depthFirstTraversalIterative(startingVertex) {
    let visited = [];
    //let visited = new Set()
    let stack = [startingVertex];

    //while loop
    while (stack.length) {
      let current = stack.pop();
      let neighbors = this.adjList[current];

      if (!visited.includes(current)) {
        //if (!visited.has(current))
        visited.push(current);
        //visited.add(current)
        for (let i = 0; i < neighbors.length; i++) {
          let neighbor = neighbors[i];
          stack.push(neighbor);
        }
      }
    }

    //let array = Array.from(visited)
    //return array;
    return visited;
  }

  //store values in visited and return at end

  //   a: ['b', 'c', 'd'],
  //  visited = ['a', 'd']
  //  stack = ['b', 'c', 'g']

  depthFirstTraversalRecursive(startingVertex, visited = new Set()) {
    //base
    if (visited.has(startingVertex)) {
      return;
    }
    //processing
    visited.add(startingVertex);
    const neighbors = this.adjList[startingVertex];
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      //recursive
      this.depthFirstTraversalRecursive(neighbor, visited);
    }

    return Array.from(visited);
  }
}

// const graph = new Graph()
// graph.adjList = {
//   a: ['b', 'c', 'd'],
//   b: ['a', 'c', 'e'],
//   c: ['a', 'b', 'f', 'g'],
//   d: ['a', 'g'],
//   g: ['d', 'c', 'f'],
//   e: ['b'],
//   f: ['c', 'g']
// }

// graph.breadthFirstTraversal('a')

module.exports = {
  Graph,
};
