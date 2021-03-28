const binarySearch = (arr, val) => {
    let i = 0
    const recurse = arr => {
        let start = 0
        let end = arr.length
        let middle = Math.floor((start + end) / 2)
        if (arr.length === 1 && arr[0] !== val) return i = -1
        if (arr[middle] === val) return i += middle
        if (arr[middle] < val) {
            i += middle
            return recurse(arr.slice(middle, end), val)
        }
        if (arr[middle] > val) {
            return recurse(arr.slice(start, middle), val)
        }
    }
    recurse(arr)
    return i
}