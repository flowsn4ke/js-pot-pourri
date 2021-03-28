class MaxBinaryHeap {
    constructor() {
        this.values = []
    }
    swap(i, j) {
        const temp = this.values[i]
        this.values[i] = this.values[j]
        this.values[j] = temp
    }
    findParent(i) {
        return (i - (i % 2 === 0 ? 2 : 1)) / 2
    }
    findChildren(i) {
        return [(2 * i + 1), (2 * i + 2)]
    }
    insert(val) {
        this.values.push(val)
        let currentIndex = this.values.length - 1
        const bubbleUp = (i) => {
            if (i === 0) return
            let parentIndex = this.findParent(i)
            if (val > this.values[parentIndex]) {
                this.swap(i, parentIndex)
                bubbleUp(parentIndex)
            }
        }
        bubbleUp(currentIndex)
        return this.values.length
    }
    siftDown(i) {
        const children = this.findChildren(i)
        if (children[0] > this.length - 1 && children[1] > this.length - 1) return
        if (this.values[children[0]] > this.values[children[1]]) {
            this.swap(i, children[0])
            this.siftDown(children[0])
        } else if (this.values[children[0]] < this.values[children[1]]) {
            this.swap(i, children[1])
            this.siftDown(children[1])
        } else return
    }
    extractMax() {
        this.swap(0, this.values.length - 1)
        const old_root = this.values.pop()
        this.siftDown(0)
        return old_root
    }
}
