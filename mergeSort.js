// O(n log n)
// One of the most efficient sorting algorithms
const merge = (arr1, arr2) => {
    if (arr1.length === 0) return arr2
    if (arr2.length === 0) return arr1
    let merged = []
    let i1 = 0
    let i2 = 0
    while (i1 < arr1.length && i2 < arr2.length) {
        if (arr1[i1] < arr2[i2]) {
            merged.push(arr1[i1])
            i1++
        } else {
            merged.push(arr2[i2])
            i2++
        }
    }
    while (i1 < arr1.length) {
        merged.push(arr1[i1])
        i1++
    }
    while (i2 < arr2.length) {
        merged.push(arr2[i2])
        i2++
    }
    return merged
}

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    const mid = Math.floor((arr.length) / 2)
    return merge(
        mergeSort(arr.slice(0, mid)),
        mergeSort(arr.slice(mid))
    )
}