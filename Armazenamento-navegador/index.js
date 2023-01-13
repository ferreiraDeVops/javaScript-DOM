//SESSIONSTORAGE
// PASSANDO A INFORMAÇÃO PARA O SESIONSTORAGE
document.getElementById(`sessionBtn`).addEventListener(`click`,function(){
        const input = document.getElementById(`session`)
        sessionStorage.setItem(`info`,input.value)
        input.value = ``
})
// LENDO A INFORMAÇÃO DO SESSIONSTORAGE
document.getElementById(`readSesssion`).addEventListener(`click`,function(){
        const info = sessionStorage.getItem(`info`)
        alert(`A informação salva no sessionStorage é: ${info}`)
})

// LOCALSTORAGE
// PASSANDO A INFORMAÇÃO PARA O LOCALSTORAGE
document.getElementById(`localBtn`).addEventListener(`click`,function(){
        const infoLocal = document.getElementById(`local`)
        localStorage.setItem(`local`,infoLocal.value)
        infoLocal.value = ""
})
// LENDO A INFORMAÇÃO DO LOCALSTORAGE
document.getElementById(`readLocal`).addEventListener(`click`,function(){
        const local = localStorage.getItem(`local`)
        alert(`A informação salva em localStorage é: ${local}`)
})

// COOKIE
document.getElementById(`cookieBtn`).addEventListener(`click`,function(){
        const input = document.getElementById(`cookie`)
        // cookieName=value; expires=UTCstringDate; path=/;
        const cookie = `info=${input.value};`
        const expiration = `expires=${new Date(2023,13,1)};`
        const path = `path=/;`
        document.cookie = `${cookie + expiration + path}`
        input.value = ""
        console.log(document.cookie)
})

document.getElementById(`cookie2Btn`).addEventListener(`click`,function(){
        const input =  document.getElementById(`cookie2`)
        const cookie = `text=${input.value};`
        const expiration = `expires=${new Date(2022,13,1)};`
        const path = `path=/;`
        document.cookie = `${cookie + expiration + path}`
        input.value =""
        console.log(document.cookie)
})