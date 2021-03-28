const flatten = arr => {
    let flat = []
    const recurse = (input) => {
        if (input.length === 0) return
        if (Array.isArray(input[0])) recurse(input[0])
        else flat.push(input[0])
        recurse(input.slice(1))
    }
    recurse(arr)
    return flat
}