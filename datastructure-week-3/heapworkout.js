class Heap {
    constructor() {
        this.Heap = []
    }

    insert(data) {
        this.Heap.push(data)
        this.bubbleup()
    }

    bubbleup() {
        let current = this.Heap.length - 1
        while (current > 0) {
            const parentindex = Math.floor((current - 1) / 2)
            if (this.Heap[current] < this.Heap[parentindex]) {
                [this.Heap[current], this.Heap[parentindex]] = [this.Heap[parentindex], this.Heap[current]]
                current = parentindex
            } else {
                break
            }
        }
    }

    extract(data) {
        if (this.Heap.length === 0) return null
        const min = this.Heap[0]
        const last = this.Heap.pop()
        if (this.Heap.length > 0) {
            this.Heap[0] = last
            this.bubbledown()
        }
    }

    bubbledown() {
        let currentindex = 0
        while (true) {
            let small = currentindex
            let left = 2 * currentindex + 1
            let right = 2 * currentindex + 2

            if (left < this.Heap.length && this.Heap[left] < this.Heap[small]) {
                small = left
            }
            if (right < this.Heap.length && this.Heap[right] < this.Heap[small]) {
                small = right
            }

            if (small !== currentindex) {
                [this.Heap[small], this.Heap[currentindex]] = [this.Heap[currentindex], this.Heap[small]]
                currentindex = small
            } else {
                break
            }
        }
    }

    getsize(){
        return this.Heap.length
    }
}

const heap = new Heap()

heap.insert(50)
heap.insert(15)
heap.insert(10)
heap.insert(3)
heap.extract(3)

console.log(heap.getsize());