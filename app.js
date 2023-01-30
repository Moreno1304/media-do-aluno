/******************************************************************
 * Objetivo: Realizarvisar a media escolar de 4 notas dos alunos 
 * Data: 27/01/2023
 * Autor: Moreno
 * Versão: 1.0
 * *****************************************************************/

console.log('Sistema de Calculo de Médias Escolares');

//import da biblioteca para entreda de dados
var readline = require('readline');
const { compileFunction } = require('vm');

//Criamos um objeto para manipular a entreda de dados via teclado 
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*** *****Conceito sobre a criação de variantes*******************
 * 
 * var - toda variavel criada como var, tem por objetivo ser um escopo global,
 *   ou seja, ela poderá ser utilizada em diversos pontos da programação
 * 
 * let - toda variavel criada como let, tem por objetivo ser um escopo local,
 *    ou seja, será utilizada somente naquela função
 * 
 * const - Tem por objetivo criar um espaço em memória para armazenar dados
 *   que não sofrem mudança
 ***************************************************************************/

//Função de CallBack para retornar o nome do aluno
entradaDados.question('Digite o nome do aluno: \n', function(nome) {
    //Variavel local para receber o nome do aluno, que
    //vai ser retornado pela função 
    let nomeAluno = nome;

    entradaDados.question('Digite a nota1: \n', function(nota1) {

        let primeiraNota = nota1;
        entradaDados.question('Digite a nota2: \n', function(nota2) {

            let segundaNota = nota2;


            entradaDados.question('Digite a nota3: \n', function(nota3) {

                let terceiraNota = nota3;


                entradaDados.question('Digite a nota4: \n', function(nota4) {

                    let quartaNota = nota4;
                    let media = 0;

                    /***
                     * Conversão de dados String para Numero
                     * Number.parseInt ou parseInt() - Converte para Inteiro
                     * Number.parseFloat ou parseFloat() - Converte para Real
                     * Number() - Coverte para int e float, conforme a entrada dodado
                     * 
                     * Operadores de comparação
                     * == (Verificar a igualdade de conteudo)
                     * != (Verificar a diferença de conteudo)
                     * <  (Verificar o menor valor)
                     * >  (Verificar o maior valor)
                     * <= (Verificar o menor ou igual valor)
                     * >= (Verificar o maior ou igual valor)
                     * ===(Verificar a igualdade de conteudo e validar a tipagem de dados)
                     * ex: 0 == 0    v
                     *     0 == "0"  v
                     *     0 === "0" f
                     *     0 ==! 0.0 f
                     * Operadores Lógicos
                     * OU        = || (pipe)  OR
                     * E         = &&         AND
                     * Negação   = !          NOT
                     * 
                     * Ordem de execução dos operadores lógicos
                     * 0º ()
                     * 1º Negação
                     * 2º &&
                     * 3º ||
                     */
                    if (primeiraNota == '' || segundaNota == '' || terceiraNota == '' || quartaNota == '') {

                        console.log('ERRO: É necessario digitar algum valor nas entradas. ')

                    } else if (isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)) {

                        compileFunction.log('ERRO: É necessario que todos os dados digitados sejam números.')
                    } else if (primeiraNota < 0 || primeiraNota > 10 || segundaNota < 0 || segundaNota > 10 || terceiraNota < 0 || terceiraNota > 10 || quartaNota < 0 || quartaNota > 10) {
                        console.log('ERRO: O sistema aceita somente números entre 0 até 10')


                    } else {
                        media = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota)) / 4;

                        if (media >= 7) {
                            console.log('Status do aluno: Aprovado!')
                        } else {
                            console.log('Status do aluno: Reprovado!')
                        }

                        console.log('Media Final: ' + media.toFixed(1));
                    }
                });
            });
        });
    });
});