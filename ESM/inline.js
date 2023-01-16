export function inline(){
        // esse e o inline pois tem que ter o mesmo nome para se localizar a função
        console.log(`Export nomeado inline`)
}
// export padrão pra um arquivo voce pode dar um nome especifico
// export default so pode ser chamada uma vez por arquivo
// export default pode ser tambem uma função anonima
export default function defaultInline(){
        console.log(`Export defalt inline`)
}