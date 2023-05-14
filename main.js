// mostrar quantidade cadeiras reservada // quais foram reservadas
// Fazer validação para SO RECEBER ENTRE 1 E 10

// VARIAVEIS
var cadeira = document.getElementById('numeroCadeira');
var exibirCadeiras = document.getElementById('exibirCadeiras');
const enviar = document.getElementById('enviar');

var resposta = '';
var reserva = [];
const QNTD_CADEIRAS = 10;

limparEExibirCadeirasCinema()

enviar.addEventListener('click', () => {
    
    inserirValoresEmReservaEVerificar()
    
    
    do {
        limparEExibirCadeirasCinema()
        
        
        
        
        
        
        resposta = prompt('Deseja continuar? [s/n]');
        
    } while (resposta == 's');

    if (resposta != 's') {
        alert('Todos os assentos escolhidos foram reservados!')
    }

})

function limparEExibirCadeirasCinema() {
    exibirCadeiras.innerHTML = '';
    for (let count = 1; count <= QNTD_CADEIRAS; count++) {
        span = document.createElement('span');             
        span.innerHTML = ` | ${count} | `
        exibirCadeiras.appendChild(span);
    }
}


function inserirValoresEmReservaEVerificar() {
    for(c = 1; c <= QNTD_CADEIRAS; c++) {
        reserva[c] = c;
    }

    cadeiraSelecionada = Number(cadeira.value);
    
    for (c = 1; c <= QNTD_CADEIRAS; c++) {

        if( Number(cadeira.value) == reserva[c]){
            reserva[c] = '---';

            if (reserva[c] == '---') {
                alert('Erro, lugar já reservado');
            }

        }

        console.log(reserva[c])
    }
}



/* 
enviarNumero.addEventListener('click', () => {
    
    do {
    
        for(index = 1; index <= QNTD_CADEIRAS ;index++) {
            if(cadeira == reserva[index] ){
                reserva[index] = '---';
            }
        }
    
        resposta = prompt('Quer continuar? [s/n] ')
        
    } while (resposta == 's');

    if (resposta != 's') {
        console.log('programa encerrado');
    }

});
 */