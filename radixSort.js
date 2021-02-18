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

    const flatten = arr => {
        let flat = []
        const helper = (input) => {
            if (input.length === 0) return
            if (Array.isArray(input[0])) helper(input[0])
            else flat.push(input[0])
            helper(input.slice(1))
        }
        helper(arr)
        return flat
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
        arr = flatten(buckets)
    }
    return arr
}