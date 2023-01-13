function register(element){
        const username = element.children.username.value
        const password = element.children.password.value
        const passwordConfirmation = element.children.passwordConfirmation.value
        const confirmacao = confirm(`Deseja cadastrar usuario: ${username}`)
        if(confirmacao){
                if(password === passwordConfirmation){
                        alert(`Usuario foi cadastrado com sucesso`)
                }else{
                        alert(`Senhas estão incorretas!`)
                }
        }else{
                alert(`Cadastro cancelado`)
        }
        element.children.username.value = ""
        element.children.password.value = ""
        element.children.passwordConfirmation = ""
}