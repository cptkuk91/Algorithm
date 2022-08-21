class Graph {
  constructor() {
    this.matrix = [];
  }

  addVertex() {
    for (let i = 0; i < this.matrix.length; i++) {
      this.matrix[i].push(0);
    }
    this.matrix.push(new Array(this.matrix.length + 1).fill(0));
  }

  contains(vertex) {
    return !!this.matrix[vertex];
  }

  addEdge(from, to) {
    if (from === undefined || to === undefined) {
      return;
    }
    if (
      from + 1 > this.matrix.length ||
      to + 1 > this.matrix.length ||
      from < 0 ||
      to < 0
    ) {
      return;
    }
    this.matrix[from][to] = 1;
  }

  hasEdge(from, to) {
    return !!this.matrix[from][to];
  }

  removeEdge(from, to) {
    if (from === undefined || to === undefined) {
      return;
    }
    if (
      from + 1 > this.matrix.length ||
      to + 1 > this.matrix.length ||
      from < 0 ||
      to < 0
    ) {
      return;
    }
    this.matrix[from][to] = 0;
  }
}
