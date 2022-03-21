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