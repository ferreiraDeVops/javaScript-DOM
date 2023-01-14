// Criando um objeto
const usuario = {
        name: `Felipe`,
        email: `ferreiradevops@gmail.com`,
        friends: [{
                name: `Jessica`,
                adress:{
                        street: `QMS 29 MODULO C`,
                        numer: 29
                }
        }],
        age: 26,
        phone: {
                counterCode: `+55`,
                ddd: `61`,
                number: `994098061`
        }
}
//console.log(usuario.friends[0].phone.ddd)
// não consegue ler as propriedades de undefined
// leu a propriedade usuario leu friends procurou a propriedade phone viu que ela não existe 
// retornou undefnid procurou a propriedade ddd dentro da propriedade phone que e undefnid e deu erro no console
//console.log(usuario.friends[0].phone.ddd)
console.log(usuario?.friends[0]?.phone?.ddd)

console.log(usuario.brothers?.length)
console.log(usuario?.brothers?.[5].name)