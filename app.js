/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Número Secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um Número entre 1 e 10';  */

let listaDeNumerosSorteados = [];
let qntdDeNumeros = 4;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
exibirMensagenInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        let palavraTentativas = tentativas > 1 ? 'Tentativas' : 'Tentativa';

        exibirTextoNaTela('h1', 'Acertou !!!');
        exibirTextoNaTela('p', `Você Descobriu o Núemro Secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativas}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O Número Secreto é Menor.');
        }else{
            exibirTextoNaTela('p', 'O Número Secreto é Maior.')
        }
    }
    tentativas ++;
    limparCampo();
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagenInicial(){

    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um Número entre 1 e 10');
}

function gerarNumeroAleatorio() {
    
    let numeroEscolhido = parseInt(Math.random() * qntdDeNumeros +1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == qntdDeNumeros){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas  = 1;
    exibirMensagenInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
