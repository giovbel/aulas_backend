//comentário em linha          
//node .\app.js    -> executa o programa
//mostrar texto no terminal (print)
console.log('0_1')
//variável, não precisa dizer se é int, String, etc, só colocar entre aspas ou sem.
var nome
nome = ":("    //a string é colocada entre aspas. Quando não tem é outro tipo, como int, boolean, etc
//typeof = permite identificar o tipo de dados de uma variável ou objeto
console.log(typeof (nome))
//matriz, é considerada como objeto
var matriz = [42.0]
console.log(typeof(matriz))
//concatenação é representado pelo sinal de '+'    //para fazer sem o +, usar crase e o cifrão, com a variável entre chaves
console.log('O nome do usuário é: ' + nome)
console.log(`O nome do usuário é: ${nome}`)
//Import da biblioteca readline, que permite realizar interação de entrada de dados com o usuário
var readline = require('readline')


//Criar objeto chamado 'entradaDados'ncom a instância de readline
var entradaDados = readline.createInterface({
    //entrada e saída de informação via teclado
    input: process.stdin,
    output: process.stdout
})


//callback: chama uma funcionalidade que retorna da interação com o usuário
//exibe uma mensagem no terminal socilcitando a entrada de dados pelo usuário
//Obs.: o método 'question' envia o texto para o terminal e aguarda a digitação
    //o retorno do que o usuário digitou chega internamente pela variável 'nomeusuário'   -> para a variável nome


entradaDados.question('Digite seu nome:', function(nomeUsuário){


//variável, não precisa dizer se é int, String, etc, só colocar entre aspas ou sem.
    var nome = nomeUsuário


//concatenação é representado pelo sinal de '+'    //para fazer sem o +, usar crase e o cifrão, com a variável entre chaves
    console.log('O nome do usuário é: ' + nome)
    console.log(`O nome do usuário é: ${nome}`)


})
//obs.: o que é declarado dentro desse método não pode ser acessado fora   – a variável criada dentro do bloo só existe dentro dele, o que faz que ela possa ser criada fora também
