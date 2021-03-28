class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    push(val) {
        const new_first = new Node(val)
        if (!this.first) {
            this.first = this.last = new_first
        } else {
            new_first.next = this.first
            this.first = new_first
        }
        return ++this.size
    }
    pop() {
        if (!this.first) return null
        const old_first = this.first
        if (this.size === 1) {
            this.first = this.last = null
        } else {
            this.first = this.first.next
            old_first.next = null
        }
        this.size--
        return old_first.val
    }
}