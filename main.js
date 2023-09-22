// Função para adicionar a máscara ao campo de entrada de altura
function adicionarMascaraAltura() {
    var alturaInput = document.getElementById("alt");

    alturaInput.addEventListener('blur', function() {
        var inputValue = alturaInput.value;

        // Remove todos os caracteres não numéricos e pontos, exceto o primeiro ponto
        inputValue = inputValue.replace(/[^\d.]/g, '');
        inputValue = inputValue.replace(/^\./, '');

        // Verifica se o valor não está vazio e começa com um número
        if (inputValue.length > 0 && inputValue.indexOf('.') === -1) {
            inputValue = inputValue.substring(0, 1) + '.' + inputValue.substring(1);
        }

        // Define o valor formatado de volta no campo de entrada
        alturaInput.value = inputValue;
    });
}

// Adiciona um ouvinte de evento ao botão "Calcular" para chamar a função "calculate"
var botaoCalcular = document.getElementById("bot");
botaoCalcular.addEventListener('click', function() {
    calculate(); // Chama a função calculate existente
});

// Função calculate existente
function calculate() {
    var alturaInput = document.getElementById("alt");
    var pesoInput = document.getElementById("pes");
    var resultadoElemento = document.getElementById("res");

    var altura = parseFloat(alturaInput.value.replace(',', '.'));
    var peso = parseFloat(pesoInput.value.replace(',', '.'));

    // Validação de entrada
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        resultadoElemento.innerText = "Por favor, insira valores válidos.";
        return;
    }

    var imc = peso / (altura * altura);
    console.log(imc);

    var mensagem = "";

    if (imc < 18.5) {
        mensagem = `Seu IMC é de ${imc.toFixed(2)}. Você está magro.`;
    } else if (imc < 24.9) {
        mensagem = `Seu IMC é de ${imc.toFixed(2)}. Você está normal.`;
    } else if (imc < 29.9) {
        mensagem = `Seu IMC é de ${imc.toFixed(2)}. Você está com sobrepeso.`;
    } else if (imc < 39.9) {
        mensagem = `Seu IMC é de ${imc.toFixed(2)}. Você está obeso.`;
    } else {
        mensagem = `Seu IMC é de ${imc.toFixed(2)}. Você está com obesidade mórbida.`;
    }

    resultadoElemento.innerText = mensagem;
}

// Adiciona um ouvinte de evento ao carregar a página para adicionar a máscara à altura
document.addEventListener('DOMContentLoaded', adicionarMascaraAltura);
