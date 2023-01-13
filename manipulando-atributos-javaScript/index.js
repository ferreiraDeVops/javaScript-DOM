const input = document.getElementById(`input`)

document.getElementById(`values`).addEventListener(`click`,function(){
        input.value = input.value === "" ? `Olá, mundo!`: ""
        console.log(input.value)
        console.log(input.getAttribute(`value`))
})
document.getElementById(`type`).addEventListener(`click`,function(){
       // input.type = input.type !== `radio` ? `radio` : `text`

       input.setAttribute(`type`, `radio`)
})
document.getElementById(`placeholder`).addEventListener(`click`,function(){
        input.placeholder = `Digite um valor`
})
document.getElementById(`disable`).addEventListener(`click`,function(){
     //   input.setAttribute(`disabled`, !input.disabled)
        input.attributes.disabled = true
})
document.getElementById(`data`).addEventListener(`click`,function(){
        const data = input.dataset.somethingElse
        console.log(`O valor do atributo data-something e :`+data)
        input.dataset.something = `outro value`
        console.log(`${input.dataset.somethingElse}`)
})
