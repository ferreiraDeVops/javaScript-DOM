function addContact(){
        const contactoList = document.getElementById("contact-list")
        const h3 = document.createElement("h3")
        h3.innerText = "Contato"
        const ul = document.createElement("ul")
        const nomeLi = document.createElement("li")
        nomeLi.innerHTML = "<label for='name'>Nome: </label>"
        const nomeInput = document.createElement("input")
        nomeInput.type = "text"
        nomeInput.name = "name"
        nomeInput.id = "name"
        nomeLi.appendChild(nomeInput)
        ul.append(nomeLi)
       ul.append(document.createElement("br"))

        const phoneli = document.createElement("li")
        phoneli.innerHTML = "<label for='phone'>Telefone: </label>"
        const phoneInput = document.createElement("input")
        phoneInput.type = "text"
        phoneInput.name = "phone"
        phoneInput.id = "phone"
        phoneli.appendChild(phoneInput)
        ul.appendChild(phoneli)
        
        ul.append(document.createElement("br"))
        const enderecoLi = document.createElement("li")
        enderecoLi.innerHTML = "<label for='adress'>Endereço: </label>"
        const enderecoInput = document.createElement("input")
        enderecoInput.type ="text"
        enderecoInput.id = "adress"
        enderecoLi.appendChild(enderecoInput)
        ul.appendChild(enderecoLi)
        contactoList.append(h3,ul)
        ul.append(document.createElement("br"))
}
function removeContact(){
        const contactoList = document.getElementById("contact-list")
        const h3 = document.getElementsByTagName("h3")
        const ul = document.getElementsByTagName("ul")
        contactoList.removeChild(h3[h3.length - 1])
        contactoList.removeChild(ul[ul.length-1])
}