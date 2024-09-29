let listaNumeros = [];
let numeroLimite = parseInt(Math.random() * 100 + 1);
let numeroSecreto = randomNumber();
let tentativas = 1;

function showText (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

let chamadanumeros = (`Escolha um número entre 1 e ${numeroLimite}`)

function mensagemInicial() {
showText('h1', 'Jogo do Número Secreto');
showText('p', chamadanumeros);
}

mensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        showText ('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        showText ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            showText('p', 'O numero secreto é menor');
        } else {
            showText('p', 'O numero secreto é maior');
        }
        tentativas++;
        limparCampo();
        }
    }

console.log(`O número secreto é ${numeroSecreto}`);

function randomNumber() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementos = listaNumeros.length;

if (quantidadeElementos == numeroLimite) {
    listaNumeros = [];
}

    if (listaNumeros.includes(numeroEscolhido)) {
        return randomNumber();
    } else {
        listaNumeros.push(numeroEscolhido);
        console.log(`A ordem de números sorteados foi: ${listaNumeros}`);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''
}

function restartGame() {
    numeroSecreto = randomNumber();
    console.log(`O número secreto é ${numeroSecreto}`);
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}