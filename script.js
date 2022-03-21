// Exercicio 1
let classificaIdade = () => {
    let idade = prompt("Digite sua idade: ");
    let classificacao = '';
    if (idade <= 15)
        classificacao = 'Jovem';
    else if (idade >= 16 && idade <= 64)
        classificacao = 'Adulto';
    else
        classificacao = 'Idoso';
    console.log("Classificacao: " + classificacao);
}

// Exercicio 2
function operacoesMatematicas (n1, n2, operador) {
    let resultado;
    switch(operador){
        case '+':
            resultado = n1 + n2;
            break;
        case '-':
            resultado = n1 - n2;
            break;
        case '*':
            resultado = n1 * n2;
            break;
        case '/':
            resultado = n1 / n2;
            break;
        default:
            resultado = 'Operação não disponível';
    }
    console.log(resultado);
}

function realizaOperacoesMatematicas () {
    operacoesMatematicas(4,4,'+');
    operacoesMatematicas(5,2,'-');
    operacoesMatematicas(4,4,'*');
    operacoesMatematicas(8,4,'/');
    operacoesMatematicas(4,4,'c');
}

//Exercicio 3
function parOuImpar () {
    let numero = prompt("Digite um numero");
    console.log(numero % 2 === 0 ? "É par" : "É ímpar");
}

//Exercicio 4

function tabuadaDo2 () {
    for(let i = 0; i <= 10; i++)
        console.log("2 x " + i + " = " + (i*2));
}

//Exercicio 5

function mostraAnimaisERaca() {
    var animais = [
        { animal: 'Cachorro', raca: 'Akita' },
        { animal: 'Cachorro', raca: 'Boxer' },
        { animal: 'Cachorro', raca: 'Dálmata' },
        { animal: 'Cachorro', raca: 'Pastor alemão' },
        { animal: 'Gato', raca: 'Persa' },
        { animal: 'Gato', raca: 'Sphynx' },
        { animal: 'Gato', raca: 'Siamês' },
        ]

    animais.forEach(function(animal) {console.log(animal.animal + " " + animal.raca)});
}

//Exercicio 6
function contaImpares() {
    var contaImpares = 0;
    var contador = 0;

    while(contaImpares < 10) {
        contador++;
        contaImpares +=  contador % 2 === 0 ? 0 : 1;
        console.log("Contador:  " + contador + " - " + "Impares: " + contaImpares);
    }
}

//Exercicio 7 

function converteTemperatura() {
    let temperaturaF = [ 0, 32, 45, 50, 75, 80, 99, 120 ];
    let temperaturaC = [];

    temperaturaF.forEach(function(temperatura) {temperaturaC.push(Math.round( ( temperatura - 32 ) * 5 / 9 ))})
    console.log(temperaturaF);
    console.log(temperaturaC);
}

//Exercicio 8 e 9

function manipulaArray(opcao) {
    let cidades = [
        { nome: 'Patos de Minas', populacao: 153585 },
        { nome: 'Lages', populacao: 157349 },
        { nome: 'Ibiúna', populacao: 79479 },
        { nome: 'Maringá', populacao: 403063 },
        { nome: 'Curitiba', populacao: 1963726 },
        { nome: 'Florianópolis', populacao: 508826 },
        { nome: 'Pato Branco', populacao: 84779 },
        ];
    if (opcao === 1)
        console.log(cidades.filter(a => a.populacao >= 200000).reverse());
    else if (opcao === 2)
        console.log(cidades.find(a => a.nome.toLowerCase() === 'florianópolis'));

}

// Exercicio 10

function contas() {
    let contasClientes = [
        {id: 1, saldo: 500},
        {id: 2, saldo: 30000},
        {id: 3, saldo: 50}
        ];
    let sacaValor = (id, valor) => {
        if(valor > 0){
            contasClientes.forEach(conta => {
                if(conta.id === id){
                    if(conta.saldo >= valor){
                        conta.saldo -= valor;
                        console.log("Saque efetuado com sucesso, novo saldo: " + conta.saldo);
                    }
                    else
                        console.log("Saque não pôde ser efetuado devido ao saldo ser menor que valor requerido.")
                }
            })
        }
        else {
            console.log("Valor inválido para saque.")
        }
    }

    let depositaValor = (id, valor) => {
        if(valor > 0){
            contasClientes.forEach(conta => {
                if(conta.id === id){
                    conta.saldo += valor;
                    console.log("Depósito efetuado com sucesso, novo saldo: " + conta.saldo);
                }
            })
        }
        else {
            console.log("Valor inválido para depósito.")
        }
    }

    console.log(sacaValor(1, 550));
    console.log(sacaValor(1, 200));
    console.log(depositaValor(2, 0));
    console.log(depositaValor(3, 400));
}