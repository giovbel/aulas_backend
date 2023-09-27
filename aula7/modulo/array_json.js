/************************************************************
 * Objetivo: Trabalhar com conceitos de ARRAY e JSON
 * Data: 27/09/2023
 * Autor: Giovanna
 * Versão: 1.0
 **********************************************************/

// [] -> significa uma estrutura de ARRAY
// {} -> significa uma estrutua de JSON

const conceitoArray = function(){
    //criando um array e atribuindo conteúdo para ele
    let listaDeNomes = ['josé','maria','luiz','ana',true];

    //exibe todo o array
    console.log(listaDeNomes);
    console.table(listaDeNomes);

    //exibe apenas um conteúdo do array, através do indice
    console.log(listaDeNomes[0])

    //typeof -> retorna o tipo de dados do array ou do conteúdo de cada indice
    console.log(typeof(listaDeNomes))
    console.log(typeof(listaDeNomes[4]))

    //alteração no indice 1
    listaDeNomes[1] = 'Maria da Silva';
    console.table(listaDeNomes)

    //push -> adiciona novos elementos no fim da lista (array) 
    listaDeNomes.push('André da silva')
    listaDeNomes.push('Carlos da silva', 'Suzane da silva', 'Julia da silva')
    console.table(listaDeNomes)

    //unshift -> adiciona novos elementos no inicio da lista (array) 
    //Obs: cuidado pois ele reorganiza todos os indices e seus conteúdos
    listaDeNomes.unshift('Nathalia da silva', 'Pedro da silva');
    console.table(listaDeNomes)

    //remove elementos do fim do array
    listaDeNomes.pop();
    console.table(listaDeNomes)

    //remove elementos do array com base no seu indice
    //obs: splice(3,1) -> o primeiro argumento é a referência do indice
    //                 -> o segundo argumento é a quantidade de elementos que será removido
    listaDeNomes.splice(3,3);
    console.table(listaDeNomes)

    //remove elementos do inicio do array
    listaDeNomes.shift();
    console.table(listaDeNomes);
}

const percorrendoArray = function(){

    let listaDesProdutos = ['Mouse',
                            'Teclado',
                            'Monitor',
                            'Computador',
                            'Caixa De Som',
                            'Impressora',
                            'Fone de ouvido',
                            'Web Cam',
                            'Microfone',
                            'HD',
                            'Memória'
                           ];
                           
    //length -> retorna a qtde de elementos em um array                       
    console.log(listaDesProdutos.length);

    //while -> repetição que vai comecar no 0 e vai até a quantidade que tem no array 
    //let cont = 0;
    //while (cont < listaDesProdutos.length){
    //   console.log(`Nome do produto: ${listaDesProdutos[cont]}`);
    //    cont+=1;
    //}
    
    //for(let cont = 0; cont < listaDesProdutos.length; cont++){
   //     console.log(`Nome do produto: ${listaDesProdutos[cont]}`);
    //}

    //FOREACH -> percorre o array e gerencia os indices (não precisa se preocupar com o contador)
    //listaDesProdutos.forEach(function(produto){
    //    console.log(`Nome do produto:${produto}`)
    //})

    //permite localizar um conteúdo no array e retorna seu índice
    //obs: caso o indexOf não encontre o item,sempre retornará -1
    //console.log(listaDesProdutos.indexOf('Impressora'))

    //permite localizar um conteúdo no array e retorna true ou false
    console.log(listaDesProdutos.includes('Web Cam'))

}

const filtrarProduto = function(nomeProduto){
    let listaDesProdutos = ['Mouse',
    'Teclado',
    'Monitor',
    'Computador',
    'Caixa De Som',
    'Impressora',
    'Fone de ouvido',
    'Web Cam',
    'Microfone',
    'HD',
    'Memória'
   ];
   

   let nome = nomeProduto;
   let status = false;
   let cont = 0;
   //usando o indexOf
//    if (listaDesProdutos.indexOf(nome) >= 0){
//     status = true;

//usando includes
//if(listaDesProdutos.includes(nome))
    //    status = listaDesProdutos.includes(nome)


    //Fazendo o filtro Manual
    listaDesProdutos.forEach(function(produto){
        if(produto.toUpperCase() == nome.toUpperCase()){
            //status = true;
            cont++;
        }
    })


    return cont;
    
   };
// }

//conceitoArray();
//percorrendoArray();
console.log(filtrarProduto('mouse'));