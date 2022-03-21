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