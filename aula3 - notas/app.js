/*****************************************************
 * Objetivo: Realizar o calculo da média escolar de um aluno
 * Data: 09/08/2023
 * Autor: Giovanna
 * Versão: 1.0
 *****************************************************/

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
   var - permite criar uma variavel no escopo Global do código, que fica ativo em toda a 
         parte do projeto

   let - permite criar uma variavel em um escopo local do código, que fica ativa apenas 
         dentro daquele bloco de programação
         
  const - permite criar um espaço em memória para um conteúdo que não será alterado,
          podendo ser no escopo local ou Global.

    Operadores de comparação
    == verfica a igualdade
    < verifica o menor valor
    > verifica o maior valor
    <= verifica o valor menor ou igual
    >= verfica o valor maior ou igual
    != verifica a diferença
    === verifica a igualdade entre dois conteúdos e o seu tipo de dados
    !== verifica a diferença entre conteúdos e a igualdade de tipo de dados
    ==! verifica a igualdade entre conteúdos e a direfença de tipo de dados

    Operadores Lógicos
      E        AND     &&
      OU       OR      ||
      Negação  NOT     !
*/

console.log(' ');

entradaDados.question('Nome do aluno: ', function(nomeAluno){

    let nome = nomeAluno;
    
    entradaDados.question('Curso do aluno: ', function(cursoAluno){

        let curso = cursoAluno;
    

    entradaDados.question('Nome da disciplina: ', function(disciplina){

        let disciplinaCurso = disciplina;

        console.log(' ');
        console.log('-------------');

    entradaDados.question('Nota 1: ', function(nota1){

        let primeiraNota = nota1.replace(',','.')
    

    entradaDados.question('Nota 2: ', function(nota2){

        let segundaNota = nota2.replace(',','.')
    

    entradaDados.question('Nota 3: ', function(nota3){

        let terceiraNota = nota3.replace(',','.')
    

    entradaDados.question('Nota 4: ', function(nota4){

        let quartaNota = nota4.replace(',','.') //replace() - permite localizar o caracter e substituir por outro



        //validação de entrada das notas em branco
        if(nota1 == '' || nota2 == '' || nota3 == ''  || nota4 == ''){
            console.log(' ');
            console.log('>.< ERRO: Todos as notas devem estar preenchidas!');
            entradaDados.close();

         //validação de entrada das notas não é numérico
         //IsNaN() - verifica se o conteúdo da variável é ou não um número
        
        }else if (isNaN(nota1.replace(',','.')) || isNaN(nota2.replace(',','.')) || isNaN(nota3.replace(',','.')) || isNaN(nota4.replace(',','.'))){
            console.log('>.< ERRO: Não é permitido letras, somente números !');
            entradaDados.close();

        //Validação de entrada de dados apenas entre 0 e 10

        }else if (nota1 > 10 || nota1 < 0 || nota2 > 10 || nota2 < 0 || nota3 > 10 || nota3 < 0 || nota4 > 10 || nota4 < 0){
            console.log('>.< ERRO: Só é permitido números de 0 a 10 !');
            entradaDados.close();
        }else{
        console.log(' ');

        let media =  (parseFloat (nota1) + parseFloat (nota2) + parseFloat (nota3) + parseFloat (nota4)) / 4;

        let status;

        if(media < 4.9){
            status = ' ALUNO REPROVADO ! :('
        }else if(media >= 5 && media <= 6.9){
            status = ' ALUNO EM EXAME ! :/'
        }else if(media >= 7 && media <= 10){
            status =' ALUNO APROVADO ! :)'
        }

        console.log('    BOLETIM');
        console.log('');
        console.log('-> Nome: '+ nome);
        console.log('-> Curso: '+ cursoAluno);
        console.log('-> Disciplina: '+disciplina);
        console.log('-> Nota 1: '+ nota1.replace('.',','));
        console.log('-> Nota 2: '+ nota2.replace('.',','));
        console.log('-> Nota 3: '+ nota3.replace('.',','));
        console.log('-> Nota 4: '+ nota4.replace('.',','));
        

        //String() - converte m tipo dados para caracter
        //Number() - converte um tipo de dados para número real ou inteiro
        //replace() - localiza um caracter e substitui por outro
        //toFixed() - permite limitar a qtde de casas decimais de um número


        console.log('-> Média: ' + String(media.toFixed(1)).replace('.',','));
        console.log('-> Status: '+ status);

        console.log(' ');
        entradaDados.close();
        }
})
    })
})
    })
})
    })
})