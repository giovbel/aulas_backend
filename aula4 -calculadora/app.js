/************************************************************************
 * Objetivo: Criar uma calculadora que realiza 4 operações matemáticas
 * Data: 16/08/2023
 * Autor: Giovanna
 * Versão: 1.0
 ************************************************************************/

//import da biblioteca de calculos
var calculosMatematicos = require('./modulo/calculosMatematicos.js');

//import da biblioteca virtual
var readline = require('readline');

//criação do objeto entradaDados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('')
console.log(' C A L C U L A D O R A')
console.log('-------------------------')


//entrada de dados do primeiro valor
entradaDados.question('Coloque o primeiro número: ', function(valor1){

    let primeiroValor = valor1.replace(',','.');

    //entrada de dados do segundo valor
    entradaDados.question('Coloque o segundo número: ', function(valor2){

        let segundoValor = valor2.replace(',','.');

        if(valor1 == '' || valor2 == ''){
            console.log(' ');
            console.log('>.< ERRO: Todos os valores devem estar preenchidos!');
            entradaDados.close();


        }else if (isNaN(valor1.replace(',','.')) || isNaN(valor2.replace(',','.'))){
            console.log(' ');
            console.log('>.< ERRO: Não é permitido letras, somente números !');
            entradaDados.close();
        }else{

        console.log('')
        console.log('1.Adição   2.Subtração   3.Multiplicação    4.Divisão')
        console.log('')

        //entrada de dados do tipo de calculo a ser realizado
        entradaDados.question('Digite o número da operação desejada: ', function(sinal){

            let operacao = sinal;

        //     if(operacao == 1){
        //         let resultado = parseFloat (valor1) + parseFloat (valor2);
        //         console.log('')
        //         console.log('O resultado da adição é: '+valor1 +' + '+ valor2 +' = '+ resultado.toFixed(1).replace('.',','))
        //         entradaDados.close();
        //         console.log('')

        //     } else if(operacao == 2){
        //         let resultado = parseFloat (valor1) - parseFloat (valor2);
        //         console.log('')
        //         console.log('O resultado da subtração é: '+valor1 +' - '+ valor2 +' = '+ resultado.toFixed(1).replace('.',','))
        //         entradaDados.close();
        //         console.log('')

        //     } else if(operacao == 3){
        //         let resultado = parseFloat (valor1) * parseFloat (valor2);
        //         console.log('')
        //         console.log('O resultado da multiplicação é: '+valor1.replace(',','.') +' * '+ valor2.replace(',','.') +' = '+ resultado.toFixed(1).replace('.',','))
        //         entradaDados.close();
        //         console.log('')

        //     } else if(operacao == 4){
        //         if(operacao == 4 && valor2 == 0){
        //         console.log(' ');
        //         console.log('>.< ERRO: Não é possível dividir por zero !');
        //         entradaDados.close();

        //     }else{
        //         let resultado = parseFloat (valor1) / parseFloat (valor2);
        //         console.log('')
        //         console.log('O resultado da divisão é: '+valor1 +' / '+ valor2 +' = '+ resultado.toFixed(1).replace('.',','))
        //         entradaDados.close();
        //         console.log('')
        //     }
        // }

        // if(operacao != 1 && operacao != 2 && operacao != 3 && operacao != 4){
        //         console.log(' ');
        //         console.log('>.< ERRO: Isso não é um número de 1 a 4 !');
        //         entradaDados.close();
        // }

        //chama a função
       resultado = calculosMatematicos.calculadora(valor1, valor2, operacao);

       //tratamento para exibir o resultado somente se houver conteúdo na variável
       if(resultado)
         console.log('')
         console.log('O resultado é: '+ resultado);
         console.log('')
         entradaDados.close();
        })
        }
    })
    })

    