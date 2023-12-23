class Graph {
    constructor() {
        this.vertices = {};
    }

    addVertex(vertex) {
        if (!this.vertices[vertex]) {
            this.vertices[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
            console.log('Invalid vertices');
            return;
        }

        this.vertices[vertex1].push(vertex2);
        this.vertices[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
            console.log('Invalid vertices');
            return;
        }

        this.vertices[vertex1] = this.vertices[vertex1].filter((v) => v !== vertex2);
        this.vertices[vertex2] = this.vertices[vertex2].filter((v) => v !== vertex1);
    }

    deleteVertex(vertex) {
        if (!this.vertices[vertex]) {
            console.log('Invalid vertex');
            return;
        }

        for (const neighbor of this.vertices[vertex]) {
            this.vertices[neighbor] = this.vertices[neighbor].filter((v) => v !== vertex);
        }

        delete this.vertices[vertex];
    }

    printGraph() {
        for (const vertex in this.vertices) {
            const neighbors = this.vertices[vertex].join(', ');
            console.log(`${vertex} -> ${neighbors}`);
        }
    }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'A');

console.log('Original Graph:');
graph.printGraph();

graph.removeEdge('A', 'B');
graph.removeEdge('C', 'D');

console.log('\nGraph after removing edges:');
graph.printGraph();

graph.deleteVertex('B');

console.log('\nGraph after deleting vertex B:');
graph.printGraph();
