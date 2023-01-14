const valor = 0 // false 
const valor2 = null // false
const valor3 = `teste` // true

// checa se o primeiro valor e verdadeiro se for falso vai para o proximo ate que seja verdadeiro e devolve o valor true
console.log(valor || valor2 || valor3)
// ele verifica se o valor e nullo ou undefined ele pula para o proximo elemento caso não seja ele devolve o elemento
// esquerdo <- -> direito
console.log( valor2 ?? valor3)

let valorA = 0
//testou o valor a viu que a pode ser convertido pra falso e atribuiu o valor 42 para o B
let valorB = valorA || 42

console.log({valorB,valorA})
//  SE A TEM CONTEUDO ELE VAI SER IGUAL A A 
// SE A NÃO TIVER NULO ELE VAI SER IGUAL A 42 SE A TIVER COM TEUDO B E IGUAL A 
valorB = valorA ?? 42

console.log({valorB,valorA})





