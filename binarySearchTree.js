class Node {
    constructor(val) {
        this.val = val
        this.right = null
        this.left = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(val) {
        const new_node = new Node(val)
        const recurse = (node) => {
            if (val === node.val) return false
            if (val < node.val) {
                if (node.left) recurse(node.left)
                else node.left = new_node
            } else {
                if (node.right) recurse(node.right)
                else node.right = new_node
            }
        }
        if (!this.root) this.root = new_node
        else recurse(this.root)
        return this
    }
    find(val) {
        if (!this.root) return false
        const recurse = (node) => {
            if (val === node.val) return true
            if (val < node.val) {
                if (!node.left) return false
                return recurse(node.left)
            } else {
                if (!node.right) return false
                return recurse(node.right)
            }
        }
        return recurse(this.root)
    }
}