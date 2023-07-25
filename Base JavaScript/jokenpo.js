const prompt = require("prompt-sync")();

var tiposDeJogadas = ["Pedra", "Papel", "Tesoura"];
var nomeJogador = prompt("Digite seu nome: ");
var jogadaJogador = prompt("Digite sua jogada: ");
var posicaoJogadaMaquina = Math.floor(Math.random() * tiposDeJogadas.length);

console.log("Jogada da máquina:", tiposDeJogadas[posicaoJogadaMaquina]);

if(jogadaJogador == tiposDeJogadas[posicaoJogadaMaquina]){
    console.log("Empate");
}
else if(jogadaJogador == "Pedra" && tiposDeJogadas[posicaoJogadaMaquina] == "Tesoura"){
    console.log("Jogador Ganhou");
}
else if(tiposDeJogadas[posicaoJogadaMaquina] == "Pedra" && jogadaJogador == "Tesoura"){
    console.log("Máquina Ganhou");
}
else if(jogadaJogador == "Tesoura" && tiposDeJogadas[posicaoJogadaMaquina] == "Papel"){
    console.log("Jogador Ganhou");
}
else if(tiposDeJogadas[posicaoJogadaMaquina] == "Tesoura" && jogadaJogador == "Papel"){
    console.log("Máquina Ganhou");
}
else if(jogadaJogador == "Papel" && tiposDeJogadas[posicaoJogadaMaquina] == "Pedra"){
    console.loog("Jogador Ganhou");
}
else if(tiposDeJogadas[posicaoJogadaMaquina] == "Papel" && jogadaJogador == "Pedra"){
    console.log("Máquina Ganhou");
}