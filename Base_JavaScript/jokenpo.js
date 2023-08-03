const prompt = require("prompt-sync")();

const tiposDeJogadas = ["Pedra", "Papel", "Tesoura"];
const nomeJogador = prompt("Digite seu nome: ");
const jogadaJogador = prompt("Digite sua jogada: ");
const posicaoJogadaMaquina = Math.floor(Math.random() * tiposDeJogadas.length);
let ganhador = 'Ninguém';

console.log("Jogada da máquina:", tiposDeJogadas[posicaoJogadaMaquina]);

if(jogadaJogador == tiposDeJogadas[posicaoJogadaMaquina]){
    ganhador = "Empate";
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