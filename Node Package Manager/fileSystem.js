const fsl = require('fs');

var data = new Date;

function criarArquivo(nomeJogador, jogadaJogador, jogadaMaquina, ganhador) {
    fsl.writeFile('/Users/joao/documents/Projeto Jokenpo/Node Package Manager/Partidas.txt', 'Nome Jogador: ' + nomeJogador + ' ' +
    'Jogada do Jogador: ' + jogadaJogador + ' ' + 'Jogada da Máquina: ' + jogadaMaquina + ' ' + 'Ganhador: ' + ganhador + 
    ' ' + data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds() + "\n", { flag: 'a+' }, err => {
        if (err) {
            console.error(err);
            return;
        }
    });
}

module.exports = {criarArquivo};