const prompt = require("prompt-sync")();
const fileSystem = require('./fileSystem');

var tiposDeJogadas = ["Pedra", "Papel", "Tesoura"];
var nomeJogador = prompt("Digite seu nome: ");
var jogadaJogador = prompt("Digite sua jogada: ");
var posicaoJogadaMaquina = Math.floor(Math.random() * tiposDeJogadas.length);

console.log("Jogada da máquina:", tiposDeJogadas[posicaoJogadaMaquina]);

if(jogadaJogador == tiposDeJogadas[posicaoJogadaMaquina]){
    var ganhador = "Empate";
    console.log("Ganhador: ", ganhador);   
}
else if(jogadaJogador == "Pedra" && tiposDeJogadas[posicaoJogadaMaquina] == "Tesoura"){
    ganhador = "Jogador";
    console.log("Ganhador: ", ganhador);   
}
else if(tiposDeJogadas[posicaoJogadaMaquina] == "Pedra" && jogadaJogador == "Tesoura"){
    ganhador = "Máquina";
    console.log("Ganhador: ", ganhador);    
}
else if(jogadaJogador == "Tesoura" && tiposDeJogadas[posicaoJogadaMaquina] == "Papel"){
    ganhador = "Jogador";
    console.log("Ganhador: ", ganhador);   
}
else if(tiposDeJogadas[posicaoJogadaMaquina] == "Tesoura" && jogadaJogador == "Papel"){
    ganhador = "Máquina";
    console.log("Ganhador: ", ganhador);   
}
else if(jogadaJogador == "Papel" && tiposDeJogadas[posicaoJogadaMaquina] == "Pedra"){
    ganhador = "Jogador";
    console.log("Ganhador: ", ganhador);   
}
else if(tiposDeJogadas[posicaoJogadaMaquina] == "Papel" && jogadaJogador == "Pedra"){
    ganhador = "Máquina";
    console.log("Ganhador: ", ganhador);   
}

fileSystem.criarArquivo(nomeJogador, jogadaJogador, tiposDeJogadas[posicaoJogadaMaquina], ganhador);