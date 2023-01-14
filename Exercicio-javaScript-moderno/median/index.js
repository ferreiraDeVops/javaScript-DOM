const median = (...numbers) =>{
        const ordereNumbers = [...numbers].sort((a,b) => a - b)
        const middle = Math.floor(ordereNumbers.length / 2)
        if(ordereNumbers.length % 2 !== 0){
                return ordereNumbers[middle]
        }
        
}