/**************************************************************
 * Objetivo: entrada de dois números e realizar a soma deles
 * Data: 09/08/2023
 * Autor: Giovanna
 * Versão: 1.0
 * ************************************************************/

//importe da biblioteca
var readline = require('readline');

//cria um objeto de entrada de dados para interagir com o usuário
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//entrada de dados para receber o nome do usuário
entradaDados.question('Digite seu nome: ', function(nomeUsuario){

    //recebe o nome informado pelo usuário
    var nome = nomeUsuario;

    //entrada de dados para receber valor 1
    entradaDados.question('Digite o valor 1: ', function(valor1Usuario){

        var valor1 = valor1Usuario;

        //entrada de dados para receber valor 2
        entradaDados.question('Digite o valor 2: ', function(valor2Usuario){

            //recebe valor 2
            var valor2 = valor2Usuario;

            /** Métodos para conversão de String para Numero
             * parseInt() - Converte uma string para numero inteiro
             * parseFloat() - Converte uma string para um numero real
             * Number() - converte uma string para numero, ela define se o número será inteiro ou real ( letra maiuscula)
             */ 


            var resultado = parseFloat (valor1) + parseFloat (valor2);

            console.log('O nome do usuário é: '+ nome);
            console.log('A soma dos valores é: '+ resultado);

            console.log(typeof (resultado));

            entradaDados.close();
        })
    })
});
