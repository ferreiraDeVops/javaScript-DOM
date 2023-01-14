// media
// media ta recebendo varios parametros de uma unica vez ussando o metodo spread 
const average = (...numbers) =>{
        // soma recebe os numeros
        // reduce o metodo simples de fazer uma soma
        // reduce recebe dois valores como parametro o valor acumulado e o valor atual
        // => retorna o acumulador mais o num 
        const sum = numbers.reduce((accum , num) => accum + num, 0)
        // Retorna a soma dividida pela quantidade de numeros passando para a funçaõ
        return sum / numbers.length
}
console.log(`Media aritmetica simples: ${average(15,14,8,7,3)}`)


