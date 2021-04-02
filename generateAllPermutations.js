// Utils
const factorial = (n) => n === 0 ? 1 : n * factorial(n - 1)

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

// Steinhaus–Johnson–Trotter-Even algorithm (kinda)
const generatePermutations = (n) => {
    const directions = []
    const elements = []
    const permutations = []
    // We initiate both arrays
    for (let i = 0; i < n; i++) {
        elements[i] = i
        directions[i] = i !== 0 ? -1 : 0
    }

    while (true) {
        // Add the current permutation to the results
        permutations.push(arrToString(elements))

        // Find the biggest oriented number
        let current_i = -Infinity
        for (let i = 0; i < n; i++) {
            if (directions[i] !== 0) {
                if (current_i === -Infinity) current_i = i
                else current_i = elements[i] > elements[current_i] ? i : current_i
            }
        }

        // If current is -Infinity, we eject
        if (current_i === -Infinity) break

        // We store the current value
        const current_val = elements[current_i]
        // We keep track of the swap index
        const new_i = current_i + directions[current_i]

        // We make a valid move (should be since we're updating directions after each move)
        swap(elements, current_i, new_i)
        swap(directions, current_i, new_i)

        // We check the current element can still move in its direction
        const faced_i = new_i + directions[new_i]
        if (elements[faced_i] > elements[new_i]) directions[new_i] = 0
        // We check the current element hasn't reached an edge
        if (new_i === 0 || new_i === n - 1) directions[new_i] = 0

        // We update bigger elements with valid direction
        for (let i = 0; i < n; i++) {
            if (elements[i] > current_val) {
                directions[i] = i < new_i ? 1 : -1
            }
        }
    }
    return permutations
}
