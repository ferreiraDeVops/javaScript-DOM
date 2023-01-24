const miniCssExtractPlugin = require("mini-css-extract-plugin")

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
                        //use: ['style-loader','css-loader'] // qual loader sera usado
                        use: [miniCssExtractPlugin.loader, 'css-loader'] // remove o style loader e coloca o loader do proprio plugin

                }]
        },
        plugins: [
                new miniCssExtractPlugin()
        ]
}

