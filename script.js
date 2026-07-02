// serve para exibir o texto em um elemento HTML com a tag especificada
function exibirTexto(tag, texto) {
    const campo = document.querySelector(tag);
    if (campo) campo.innerHTML = texto;
}
// serve para gerar um número aleatório entre 1 e 67
const numMax = 67;
let numeroSecreto = 0;
let numTentativas = 0;
// puxa os elementos do HTML para manipulação
const inputChute = document.querySelector('.container__input');
const reiniciarBtn = document.querySelector('#reiniciar');
// chama a função exibirTexto para mostrar o título, subtítulo e instruções do jogo
exibirTexto('#titulo', 'Bem-vindo ao O JOGO');
exibirTexto('#titulo2', 'Descubra o número secreto e ganhe AURA');
exibirTexto('#paragrafo', 'Tente um número entre 1 e 67 e clique em Ganhar.');
// funcao para criar um numero aleatorio
function gerarNumeroSecreto() {
    return Math.floor(Math.random() * numMax) + 1;
}
// fução que inicia o jogo e define o número secreto, o número de tentativas e habilita o input para o usuário digitar seu chute
function iniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    numTentativas = 0;
    inputChute.value = '';
    inputChute.addEventListener('keydown',function(event){
        if(event.key === "Enter"){
            verificarChute()
        }
    })
    inputChute.disabled = false;
    reiniciarBtn.disabled = true;
    exibirTexto('#paragrafo', 'Tente um número entre 1 e 67 e clique em Ganhar.');
}
// funcao para verificar o chute do usuário e exibir mensagens de acordo com o resultado
function verificarChute() {
    const chute = Number(inputChute.value);

    if (!chute || chute < 1 || chute > numMax) {
        alert('Digite um número válido entre 1 e 67.');
        return;
    }

    numTentativas += 1; // contador de tentativas
// verifica se o chute é igual, menor ou maior que o número secreto e exibe a mensagem correspondente
    if (chute === numeroSecreto) {
        const tentativaNome = numTentativas === 1 ? 'tentativa' : 'tentativas';
        exibirTexto('#paragrafo', `Boa! Você venceu O JOGO em ${numTentativas} ${tentativaNome}. Clique em Novo jogo para tentar novamente.`);
        inputChute.disabled = true;
        reiniciarBtn.disabled = false;
    } else if (chute < numeroSecreto) {
        exibirTexto('#paragrafo', `O número secreto é maior que ${chute}. Tente novamente.`);
    } else {
        exibirTexto('#paragrafo', `O número secreto é menor que ${chute}. Tente novamente.`);
    }
}
// funcão para reiniciar o jogo chamando a função iniciarJogo
function reiniciarJogo() {
    iniciarJogo();
}
// adiciona um evento de clique ao botão de reiniciar para chamar a função reiniciarJogo
reiniciarBtn.addEventListener('click', reiniciarJogo);
iniciarJogo();
 