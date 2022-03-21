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