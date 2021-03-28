// O(n**2) worst case scenario
// O(n) for almost sorted arrays
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j > -1; j--) {
            if (arr[j] < arr[j + 1]) break
            const temp = arr[j + 1]
            arr[j + 1] = arr[j]
            arr[j] = temp
        }
    }
    return arr
}