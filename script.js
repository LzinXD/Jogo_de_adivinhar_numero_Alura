alert("salve");

let nome = window.prompt("Qual é o seu nome?");
alert("Bem-vindo ao O JOGO, " + nome + "!");
let numTentativas = 1 

function pedirNumero(){

    const numeroSecreto =  Math.floor(Math.random() * 20) + 1;// gera numeor aleatorio de 1 a 20 */
    let resposta;

    while(resposta != numeroSecreto) {
       resposta = Number(window.prompt("Diga um numero de 1 a 20: "));
        if (resposta < numeroSecreto){
            alert("O numero secreto é maior que " + resposta);
            numTentativas++;
        } else if (resposta > numeroSecreto){
            alert("O numero secreto é menor que " + resposta);
            numTentativas++;
        }
    }

     let tentativaNome = numTentativas === 1? "tentativa" : "tentativas";
     alert("Boa, " + nome + "! Você venceu O JOGO! Você precisou de " + numTentativas + " " + tentativaNome + ".");
    /* if (numTentativas === 1) {
        alert("Boa, " + nome + "! Você venceu O JOGO de primeira!");
    }
    else {
        alert("Boa, " + nome + "! Você venceu O JOGO! Você precisou de " + numTentativas + " tentativas.");
    } */
}
pedirNumero(); 

