const ramanujan = n => {
    let r = 0
    for (let i = 0; i <= Math.cbrt(n); i++) {
        const compl = Math.cbrt(n - Math.pow(i, 3))
        if (compl % 1 === 0) r++
    }
    return r / 2 >= 2
}