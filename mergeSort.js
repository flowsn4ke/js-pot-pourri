// O(n log n) search
const merge = (arr1, arr2) => {
    if (arr1.length === 0) return arr2
    if (arr2.length === 0) return arr1
    return arr1[0] < arr2[0]
        ? [arr1[0], ...merge(arr1.slice(1), arr2)]
        : [arr2[0], ...merge(arr1, arr2.slice(1))]
}

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    const mid = Math.floor((arr.length) / 2)
    return merge(
        mergeSort(arr.slice(0, mid)),
        mergeSort(arr.slice(mid))
    )
}