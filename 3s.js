const simpleSubstringSearch = (long, pattern) => {
    if (long.length < pattern.length) return 0
    let occurences = 0
    let pointer = 0
    for (let i = 0; i < long.length; i++) {
        if (long[i].toLowerCase() !== pattern[pointer].toLowerCase()) {
            pointer = 0
            continue
        }
        pointer += 1
        if (pattern.length === pointer) {
            // Return whatever data you need
            occurences += 1
            pointer = 0
        }
    }
    return occurences
}
