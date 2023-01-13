function sum(...number){
        // recebendo varios parametros para uma unica função
        return number.reduce((accum,num) => accum + num , 0)
}
console.log(sum(1,1))
console.log(sum(2,3,3,4,5,5,6,6,7))
console.log(sum(23,32,424,5,36,4,6,4,6,4,3))