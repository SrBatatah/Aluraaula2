let numerototal = 20;

let tentativas = 1

let numerosecreto = Gerarnumeroal();

let num1 = Math.random() * numerototal + 1;

function exibirtextonatela(tag, texto)  {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

exibirtextonatela(`h1`,`Jogo do numero secreto` );
exibirtextonatela(`p`, `escolha um numero entre 1 e ${numerototal}`);

const botao = document.querySelector('.container__botao');

function verificarChute() { 
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let chute = parseInt(document.querySelector(`input`).value);
    console.log(numerosecreto);

    if (chute < 1 || chute > numerototal) {
        exibirtextonatela(`h1`, `Escolha um número entre 1 e ${numerototal}`);
        exibirtextonatela(`p`,``)
        return;
    }

    if (chute == numerosecreto){
        exibirtextonatela(`h1`,`Você acertou o número secreto em ${tentativas} ${palavraTentativa}`)
        exibirtextonatela(`p`,`Parabens pelo seu acerto!`);
        exibirtextonatela(`h2`,``)
        botao.disabled = true;
        console.log(botao);
        exibirtextonatela('p', 'Você não pode mais tentar!');}
    else if (chute < numerosecreto){
        exibirtextonatela(`h1`,`Jogo do numero secreto` );
        exibirtextonatela(`h2`,`O número secreto é maior que ${chute}. Você realizou ${tentativas} ${palavraTentativa}`);}
    else{
        exibirtextonatela(`h1`,`Jogo do numero secreto` );
        exibirtextonatela(`h2`,`O número secreto é menor que ${chute}. Você realizou ${tentativas} ${palavraTentativa}`);}
    tentativas++
};

function reiniciarJogo() {
    numerosecreto = Math.floor(Math.random() * numerototal) + 1;
    tentativas = 1;
    document.querySelector(`input`).value = "";
    alert("Jogo reiniciado! Tente adivinhar o novo número.");
    exibirtextonatela(`h1`,`Jogo do numero secreto` );
    exibirtextonatela(`p`, `escolha um numero entre 1 e ${numerototal}`);
    exibirtextonatela(`h2`,``)
    botao.disabled = false
}

function Gerarnumeroal() {
    return parseInt(Math.random() * numerototal + 1);
};




