class Node {
    constructor(v, p) {
        this.v = v
        this.p = p
    }
}

class MinBinaryHeap {
    constructor() {
        this.values = []
    }
    swap(i, j) {
        const temp = this.values[i]
        this.values[i] = this.values[j]
        this.values[j] = temp
    }
    enqueue(v, p) {
        const new_vertex = new Node(v, p)
        const i = this.values.push(new_vertex) - 1

        const bubbleUp = i => {
            const parent_i = (i - (i % 2 === 0 ? 2 : 1)) / 2

            if (this.values[parent_i] && new_vertex.p < this.values[parent_i].p) {
                this.swap(i, parent_i)
                bubbleUp(parent_i)
            } else {
                return
            }
        }
        bubbleUp(i)

        return this.values.length
    }
    dequeue() {
        this.swap(0, this.values.length - 1)
        const old_head = this.values.pop()

        const bubbleDown = i => {
            const first_child_i = 2 * i + 1
            const second_child_i = 2 * i + 2

            const first_child_p = this.values[first_child_i]
                ? this.values[first_child_i].p
                : Infinity
            const second_child_p = this.values[second_child_i]
                ? this.values[second_child_i].p
                : Infinity

            const swap_i = first_child_p < second_child_p ? first_child_i : second_child_i

            if (!this.values[swap_i]) return

            if (this.values[i].p > this.values[swap_i].p) {
                this.swap(i, swap_i)
                bubbleDown(swap_i)
            }
        }

        if (this.values.length > 1) bubbleDown(0)

        return old_head
    }
}