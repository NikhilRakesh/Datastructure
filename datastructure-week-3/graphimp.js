class Graph {
    constructor() {
        this.graph = []
    }

    addvertex(vertex) {
        if (!this.graph[vertex]) {
            this.graph[vertex] = new Set()
        }
    }

    addEdges(vertex1, vertex2) {
        if (!this.graph[vertex1]) {
            this.addvertex(vertex1)
        }
        if (!this.graph[vertex2]) {
            this.addvertex(vertex2)
        }
        this.graph[vertex1].add(vertex2)
        this.graph[vertex2].add(vertex1)
    }

    removeEdge(vertex1, vertex2) {

        this.graph[vertex1].delete(vertex2)
        this.graph[vertex2].delete(vertex1)

    }

    deleteVertex(vertex) {
        if (!this.graph[vertex]) {
            return null
        }
        for (let delVertex of this.graph)
            this.removeEdge(vertex, delVertex)
        delete this.graph[vertex]
    }

    hasEdge(vertex1, vertex2) {
        return this.graph[vertex1].has(vertex2) && this.graph[vertex2].has(vertex1)
    }

    display() {
        for (let vertex in this.graph) {
            console.log(vertex + "--->" + [...this.graph[vertex]]);
        }
    }

    dfs(start) {
        let stack = [start]
        let visited = new Set([start])
        let data = []

        while (stack.length) {
            let current = stack.pop()
            data.push(current)

            for (let neighbour in this.graph[current]) {
                if (!visited.has(neighbour)) {
                    visited.add(neighbour)
                    stack.push(neighbour)
                }
            }

        }
        console.log('data', data);
    }

    bfs(start) {
        let queue = [start]

        let current = data.shilf()
    }
}


let node = new Graph()
node.addvertex("a")
node.addvertex("b")
node.addvertex("c")
