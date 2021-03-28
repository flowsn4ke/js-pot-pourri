class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    enqueue(val) {
        const new_last = new Node(val)
        if (!this.first) this.first = this.last = new_last
        else this.last = this.last.next = new_last
        return ++this.size
    }
    dequeue() {
        if (!this.first) return null
        const old_first = this.first
        if (this.size === 1) this.first = this.last = null
        else this.first = this.first.next
        this.size--
        return old_first.val
    }
}
