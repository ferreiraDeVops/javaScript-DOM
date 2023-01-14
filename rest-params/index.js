// como seria na forma antiga 
function summ(a,b,s,c,f){
        return a+b+s+c+f
}
console.log(summ(2,3,4,5,6))
// utilizando o rest params sempre no final da função
function sum(parametros, ...number){
        // recebendo varios parametros para uma unica função
        // pega o parametro number encadeia com um metodo de array reduce
        // primeiro parametro sendo acumulador sendo o segundo parametro elemento atual
        // somando o acumulador mais o numero, declarando que o acumulador começa em 0
        return number.reduce((accum,num) => accum + num , 0)
}
console.log(sum(1,1))
console.log(sum(2,3,3,4,5,5,6,6,7))
console.log(sum(23,32,424,5,36,4,6,4,6,4,3))