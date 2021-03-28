// O(n log n) sort
// O(n**2) worst case scenario (on already sorted arrays)
const quickSort = (arr) => {
    const swap = (i, j) => {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    const pivot = (start = 0, end = arr.length - 1) => {
        if (end <= start) return
        let swapIndex = start + 1
        for (let i = start + 1; i <= end; i++) {
            if (arr[i] < arr[start]) {
                swap(i, swapIndex)
                swapIndex++
            }
        }
        swap(start, swapIndex - 1)
        pivot(start, swapIndex - 2)
        pivot(swapIndex, end)
    }
    pivot()
    return arr
}