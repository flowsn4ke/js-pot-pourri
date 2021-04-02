// Count inversions in a permutation using merge sort
const invCount = (arr) => {
    let inv = 0

    const mergeSortAlt = arr => {
        if (arr.length === 1) return arr

        const mid = Math.floor((arr.length) / 2)

        const a = mergeSortAlt(arr.slice(0, mid))
        const b = mergeSortAlt(arr.slice(mid))
        const c = []

        let i = 0, j = 0

        while (i < a.length && j < b.length) {
            if (a[i] < b[j]) {
                c.push(a[i])
                i += 1
            } else {
                c.push(b[j])
                j += 1
                inv += (a.length - i)
            }
        }
        while (i < a.length) {
            c.push(a[i])
            i += 1
        }
        while (j < b.length) {
            c.push(b[j])
            j += 1
        }
        return c
    }

    mergeSortAlt(arr)

    return inv
}