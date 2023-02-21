class PriorityQueue {
  constructor(comparator) {
    this.elements = []
    this.comparator = comparator
  }
  idx_is_valid(idx) {
    return idx < this.elements.length && idx >= 0
  }
  return_elements() {
    return this.elements
  }
  swap(i, j) {
    const temp = this.elements[i]
    this.elements[i] = this.elements[j]
    this.elements[j] = temp
  }
  find_parent_idx(idx) {
    return (idx - (idx % 2 === 0 ? 2 : 1)) / 2
  }
  find_children_idx(idx) {
    const idx_1 = (2 * idx + 1)
    const idx_2 = (2 * idx + 2)

    const child_1_idx = this.idx_is_valid(idx_1) ? idx_1 : null
    const child_2_idx = this.idx_is_valid(idx_2) ? idx_2 : null

    return [child_1_idx, child_2_idx]
  }
  bubble_up(idx) {
    if (idx < 1) return

    const element = this.elements[idx]
    const parent_idx = this.find_parent_idx(idx)
    const parent_element = this.elements[parent_idx]
    const should_bubble_up = this.comparator(element, parent_element)

    if (should_bubble_up) {
      this.swap(idx, parent_idx)
      this.bubble_up(parent_idx)
    }
  }
  bubble_down(idx) {
    const element = this.elements[idx]

    const children_idx = this.find_children_idx(idx)
    const child_1_idx = children_idx[0]
    const child_2_idx = children_idx[1]

    const child_1 = child_1_idx ? this.elements[child_1_idx] : null
    const child_2 = child_2_idx ? this.elements[child_2_idx] : null

    if (!child_1 && !child_2) return

    const first_child_idx = child_1 !== null && child_2 !== null
      ? this.comparator(child_1, child_2)
        ? child_1_idx
        : child_2_idx
      : (child_2_idx || child_1_idx)

    const first_child_should_bubble_up = this.comparator(this.elements[first_child_idx], element)

    if (first_child_should_bubble_up) {
      this.swap(idx, first_child_idx)
      this.bubble_down(first_child_idx)
    }
  }
  enqueue(element) {
    this.elements.push(element)
    let inserted_idx = this.elements.length - 1
    this.bubble_up(inserted_idx)
    return this.elements.length
  }
  dequeue() {
    if (this.elements.length === 0) return null
    this.swap(0, this.elements.length - 1)
    const element = this.elements.pop()
    this.bubble_down(0)
    return element || null
  }
}
