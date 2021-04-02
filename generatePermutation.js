// Utils
const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const arrToString = arr => {
    let str = ""
    arr.forEach(el => str += (el + " "))
    return str.trim()
}

const maxI = n => 0.5 * n * (n - 1)

// Generates K permutations in O(log n)
const generatePermutation = (n, k) => {
    const arr = []

    for (let i = 0; i < n; i++) arr[i] = i

    let inv = 0, left = 0, right = n - 1

    if (maxI(n) < k || k === 0) return arr

    while (inv < k) {
        if (k - inv === 1) {
            for (let i = 0; i < n - 1; i++) {
                if (arr[i] < arr[i + 1]) {
                    swap(arr, i, i + 1)
                    inv += 1
                    break
                }
            }
        } else {
            for (let i = right; i > left; i--) {
                if ((i - left) * 2 - 1 <= k - inv) {
                    swap(arr, left, i)
                    inv += ((i - left) * 2 - 1)
                    if (right > left) right = i - 1
                    if (left < right) left += 1
                    break
                }
            }
        }
    }
    return arrToString(arr)
}
