// Criando um objeto
const usuario = {
        name: prompt(`Nome do usuario`),
        email: prompt(`Email do usuario:`),
        friends: [{
                name: prompt(`Nome da filha do usuario:`),
                adress:{
                        street: prompt(`Endereço da filha do usuario:`),
                        numer: (`Numero do endereço da filha do usuario:`)
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
console.log(usuario?.friends[0]?.phone?.ddd)


console.log(usuario.friends[0].name)