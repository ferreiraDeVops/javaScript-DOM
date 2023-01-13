function addPlayer(){
        const playerName = document.getElementById(`name`).value
        const playerPosition = document.getElementById(`position`).value
        const playerNumber = document.getElementById(`number`).value
        const confirmacao = confirm(`Escalar Jogador ${playerName} na posição ${playerPosition} N° ${playerNumber}`)
        if(confirmacao){
                const teanList = document.getElementById(`teanList`)
                const playerList = document.createElement(`li`)
                playerList.id = `player - ${playerNumber}`
                playerList.innerText = `${playerName} ${playerPosition} N° (${playerNumber})`
                teanList.appendChild(playerList)
                document.getElementById(`name`).value =""
                document.getElementById(`position`).value =""
                document.getElementById(`number`).value = ""
        }
}
function removePlayer(){
        const numberRemove = document.getElementById(`numbers`).value
        const playerRemove = document.getElementById(`player - ${numberRemove}`)
        const confirmacao = confirm(`Remover jogador ${playerRemove.innerText}`)
       if(confirmacao){
        document.getElementById(`teanList`).removeChild(playerRemove)
        document.getElementById(`numbers`).value =""
       }
}