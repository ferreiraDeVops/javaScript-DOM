const path = require('path') // caminhos no sistema operacional
module.exports = {
        entry: { // Entrada do arquivo
                index: './src/index.js' //  Nome e caminho do arquivo
        },
        mode: "development",
        module: { // module passa a opção que ele quer modificar
                rules: [{ //  com as rules que significam as regras que o web pack vai usar 
                        test: /\.css$/, // expressoes regulares exteção do arquivo que vc quer passar
                        // acima vc pode passar a extenção para qualquer arquivo 
                        use: ['style-loader','css-loader'] // qual loader sera usado
                }]
        }
}

