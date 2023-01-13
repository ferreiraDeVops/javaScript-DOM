function normalSum(a,b){
        return a + b
}
console.log(`A soma normal: ${normalSum(2,2)}`)

const anonymousSum = function(a,b){
        return a + b
}
console.log(`Soma anonima ${anonymousSum(4,4)}`)

// SECTION ARROW FUNCTION

const arrowSum = (a,b) => {
        return a + b
}

const arrowMult = (a,b) => a * b
console.log(`A soma da arrow function e: ${arrowSum(3,4)}`)
console.log(`A multiplicação da arrow function é: ${arrowMult(10,5)}`)


const double = n => `O dobro de ${n} é ${n * 2}`
const number = 21
console.log(double(number))


//  ARROW FUNCTIONS + ARRAYS

const pessoas = [`Felipe`,`Luiz`,`Ferreira`,`Uilma`,`Rosa`,`Larissa`,`Gabriella`,`Jessica`]

const start = pessoas.filter(pessoa => pessoa[0] ===`F`)
console.log(`${start}`)