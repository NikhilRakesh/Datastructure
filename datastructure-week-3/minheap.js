class MinHeap {
    constructor() {
        this.heap = []
    }

    insert(value) {
        this.heap.push(value)
        this.bubbleup()
    }

    extract() {
        if (this.heap.length === 0) {
            return null
        }

        const min = this.heap[0]
        const last = this.heap.pop()

        if (this.heap.length > 0) {
            this.heap[0] = last
            this.bubbledown()
        }
        return min
    }

    bubbledown() {
        let currentindex = 0
        while (true) {
            const left = 2 * currentindex + 1
            const right = 2 * currentindex + 2
            let small = currentindex

            if (left < this.heap.length && this.heap[left] < this.heap[small]) {
                small = left
            }
            if (right < this.heap.length && this.heap[right] < this.heap[small]) {
                small = right
            }

            if (small !== currentindex) {
                [this.heap[currentindex], this.heap[small]] = [this.heap[small], this.heap[currentindex]]
                currentindex = small
            } else {
                break
            }
        }
    }

    getsize() {
        return this.heap.length
    }

    getMin() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }



    bubbleup() {
        let currentindex = this.heap.length - 1
        while (currentindex > 0) {
            const parentindex = Math.floor((currentindex - 1) / 2)
            if (this.heap[currentindex] < this.heap[parentindex]) {
                [this.heap[currentindex], this.heap[parentindex]] = [this.heap[parentindex], this.heap[currentindex]]
                currentindex = parentindex
            } else {
                break
            }
        }
    }
}

const minHeap = new MinHeap();

minHeap.insert(5)
minHeap.insert(18)
minHeap.insert(1)
minHeap.insert(8)
minHeap.insert(10)

console.log(minHeap.getsize());
console.log(minHeap.getMin());
console.log(minHeap.extract()); 
console.log(minHeap.getsize());
console.log(minHeap.getMin());
