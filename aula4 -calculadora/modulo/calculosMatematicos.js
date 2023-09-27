//função para realizar calculos
function calculadora (numero1, numero2, tipoCalculo){
        
    //recebendo os valores dos argumentos da função
    let valor1 = numero1
    let valor2 = numero2
    let operacao = tipoCalculo

    let resultado;
    
    //Versão 2.0 Switch
    switch (operacao){
        case '1':
            resultado = valor1 + valor2
            sinal = '+'
            break
        case '2':
            resultado = valor1 - valor2
            sinal = '-'
            break
        case '3':
            resultado = valor1 * valor2
            sinal = '*'
            break
        case '4':
            if(operacao == 4 && valor2 == 0)
            console.log('>.< Erro: Não é possível dividir por zero !')
            else
            resultado = valor1 / valor2
            sinal = '/'
            break
        default:
            console.log ('')
            console.log ('>.< Erro: A operação solicitada não pode ser calculada, verifique a operação escolhida')
            break
    }
    if(resultado != undefined)
      return resultado.toFixed(2); //retorno dos resultados
    else
      return false;
}

//torna a função calculadora pública, ou seja, ficará visível para outros arquivos
module.exports = {
    calculadora
}