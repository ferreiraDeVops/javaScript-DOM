const cidades = [`Brasilia`,`São paulo`,`Minas`,`Joao pessoa`,`Maceio`]

console.log(cidades)

// Separa todos elementos e exibe os separadamente
console.log(...cidades)
// Separa a string do indice indicado letra por letra
console.log(...cidades[0])// como se fosse `b`,`r`,`a`,`s`,`i`,`l`,`i`,`a`

// clonando um array
const copyCidades = cidades
// retirando ultimo elemento 
copyCidades.pop()
copyCidades.pop()
copyCidades.pop()
// adicionando um elmento ao final do array
copyCidades.push(`Rio de janeiro`)
// os dois arrays foram modificados
console.log(cidades,copyCidades)

// Criando um array de copy de forma correta que não modifique o original
// modificações feitas nesse array ficam somente nele
const cloneCidades = [...cidades]
cloneCidades.push(`Rio grande do sul`)
console.log(cidades,copyCidades,cloneCidades)

// Criando um objeto apartir do array
const cidadesObj = {...cidades}

//Criando um clone desse objeto
const cidadesObjClone = {...cidadesObj}
//passando um outro valor para o objeto
cidadesObjClone.text = `Sobradinho`
console.log({cidadesObj,cidadesObjClone})