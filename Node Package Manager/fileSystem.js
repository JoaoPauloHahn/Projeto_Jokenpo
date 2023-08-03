const fs = require('fs');

const funcaoCallback = err => {
    if (err) {
        console.error(err);
        return;
    }
}

function criarArquivo(nomeJogador, jogadaJogador, jogadaMaquina, ganhador) {
    const caminhoArquivo = './Partidas.txt';

    const horarioAgora = new Date();

    const horarioPartida = horarioAgora.toISOString();

    const dadosArquivo = 'Nome Jogador: ' + nomeJogador + ' ' +
        'Jogada do Jogador: ' + jogadaJogador + ' ' +
        'Jogada da Máquina: ' + jogadaMaquina + ' ' +
        'Ganhador: ' + ganhador + ' ' +
        'Horário da Partida: ' + horarioPartida + '\n';

    const configuracaoArquivo = { flag: 'a+' };

    fs.writeFile(caminhoArquivo, dadosArquivo, configuracaoArquivo, funcaoCallback);
}

module.exports = { criarArquivo };