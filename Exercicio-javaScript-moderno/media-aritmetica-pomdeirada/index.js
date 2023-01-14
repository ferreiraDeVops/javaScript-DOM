// Media ponderada
const weightedaverage = (...entries) => {
        const sum = entries.reduce((accum, {number , weight}) => accum + (number * (weight ?? 1)),0 )
        const weightSum = entries.reduce((accum , entry) => accum + (entry.weight ?? 1), 0)
        return sum / weightSum
}
console.log(`Media ponderada: ${weightedaverage(
        { number: 9, weight: 3, },
        { number: 7},
        { number: 10, weight: 1}
)}`)