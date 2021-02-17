// O(n**2) search
// Useful on almost sorted arrays (yet performs worst than insertion sort)
const bubbleSort = (arr) => {
    const swap = (arr, i1, i2) => {
        const temp = arr[i1]
        arr[i1] = arr[i2]
        arr[i2] = temp
    }
    let noSwaps = false
    const recurse = (copy) => {
        if (copy.length < 2) return
        noSwaps = true
        for (let i = 0; i < copy.length; i++) {
            if (!copy[i + 1]) break
            if (arr[i] > arr[i + 1]) {
                noSwaps = false
                swap(arr, i, i + 1)
            }
        }
        if (noSwaps) return arr
        recurse(arr.slice(0, copy.length - 1))
    }
    recurse(arr)
    return arr
}