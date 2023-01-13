const cidades = [`Brasilia`,`são paulo`,`minas`,`joao pessoa`,`maceio`]
console.log(cidades)
console.log(...cidades)
console.log(...cidades[1])

const copyCidades = cidades
copyCidades.pop()
copyCidades.pop()
copyCidades.push(`RIO DE JANEIRO`)
console.log({cidades,copyCidades})


const cloneCidades = [...cidades]

cloneCidades.push(`Amazonas`)

console.log({cidades,copyCidades,cloneCidades})

const cidadesObj = {...cidades}
console.log({cidadesObj})