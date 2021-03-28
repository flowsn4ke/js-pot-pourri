class Node {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
    }
}

class PriorityQueue {
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
    enqueue(val, priority) {
        const new_node = new Node(val, priority)
        this.values.push(new_node)
        let currentIndex = this.values.length - 1
        const bubbleUp = (i) => {
            if (i < 1) return
            let parentIndex = this.findParent(i)
            if (priority < this.values[parentIndex].priority) {
                this.swap(i, parentIndex)
                bubbleUp(parentIndex)
            }
        }
        bubbleUp(currentIndex)
        return this.values.length
    }
    dequeue() {
        this.swap(0, this.values.length - 1)
        const old_root = this.values.pop()
        const bubbleDown = (i) => {
            const children = this.findChildren(i)
            if (children[0] > this.length - 1 && children[1] > this.length - 1) return
            if (this.values[children[0]]?.priority < this.values[children[1]]?.priority) {
                this.swap(i, children[0])
                bubbleDown(children[0])
            } else if (this.values[children[0]]?.priority > this.values[children[1]]?.priority) {
                this.swap(i, children[1])
                bubbleDown(children[1])
            } else return
        }
        bubbleDown(0)
        return old_root
    }
}
