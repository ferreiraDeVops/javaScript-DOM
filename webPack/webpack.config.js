const path = require(`path`) // modulo do node path especifico para caminhos 

module.exports = {
        entry: {//ponto de entrada
                index: "./src/index.js",// nome do diretorio e caminho da pasta pra empacotar
                hello: `./src/hello.js`
        },
        mode: "development",
        output: {
                path: path.resolve(__dirname,'public'),// passando outro caminho com um caminho absoluto
                filename: '[name].bundle.min.js'
        }
}