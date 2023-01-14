
//Criando objeto
const person = {
        nome: `Luiz`,
        job: `Dev`,
        parents: ["Mãe",`Pai`]
}
// criando variaveis apartir da propriedade o Objeto
// const nome = person.name
// criando variaveis com desestruturação de array
//quando o javascript ve as chaves ele ja sabe que tem que quebrar esse objeto
// afrente so e preciso passar o nome do objeto que esta sendo referenciado para criação
const {job , parents, nome}  = person

console.log(job, parents,nome)
// Desestruturando um array
// Quando e desestruturado eles tem que ficar na ordem do array  
const [father , mother] = parents
console.log(father,mother)


// desestruturando uma função pelos parametros
const creatUser = ({nome,job,parents}) =>{
        const id = Math.floor(Math.random()*9999)
        return  {
                id,
                nome,
                job,
                parents
        }
}
const felipe = creatUser(person)
console.log(felipe)
