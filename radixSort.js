// O(n*k)
const radixSort = (arr) => {
    const getDigit = (num, i) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10

    const digitCount = (num) => num === 0 ? 0 : Math.floor(Math.log10(Math.abs(num))) + 1

    const getMostDigits = (arr) => {
        let max = 0
        for (let num of arr) {
            n = digitCount(num)
            max = Math.max(n, max)
        }
        return max
    }

    const size = getMostDigits(arr)

    for (let i = 0; i < size; i++) {
        let buckets = [
            [], [], [], [], [], [], [], [], [], []
        ]
        for (let num of arr) {
            const target = getDigit(num, i)
            buckets[target].push(num)
        }
        arr = [].concat(...buckets)
    }
    return arr
}