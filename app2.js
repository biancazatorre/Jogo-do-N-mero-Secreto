let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto= gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial ();


function verificarChute(){
    let chute = document.querySelector ('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : tentativas;
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        }
        else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas ++;
        limparCampo();
    }
}
//função pra gerar numero aleatorio
//parseint pra ser inteiro
//
function gerarNumeroAleatorio (){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quntidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quntidadeDeElementosNaLista ==3){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        //push adiciona um item no final da lista
        listaDeNumerosSorteados.push (numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo (){
    chute = document.querySelector ('input');
    chute.value ='';
}

//pra acontecer qd apertar o botao de novo jogo 
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial ();
    document.getElementById ('reiniciar').setAttribute('disabled', true);

}