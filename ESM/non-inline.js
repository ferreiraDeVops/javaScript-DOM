function group(){
        console.log(`Export nomeado não-inline (agrupado)`)
}
function a(){}
function b(){}
function c(){}
function d(){}
// pode exportar todas funções não inline de uma unica vez
export { group,a,b,c,d }



function exportDefault(){
        console.log(`Export defaut não-inline`)
}

export default exportDefault