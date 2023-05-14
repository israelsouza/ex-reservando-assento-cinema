// mostrar quantidade cadeiras reservada // quais foram reservadas
// Fazer validação para SO RECEBER ENTRE 1 E 10

// VARIAVEIS
var exibirCadeiras = document.getElementById('exibirCadeiras');
const enviar = document.getElementById('enviar');

var resposta = '';
const QNTD_CADEIRAS = 10;
var reserva = [];
var cadeira = document.getElementById('numeroCadeira');

// FUNÇÕES
function limparEExibirCadeirasCinema() {
    exibirCadeiras.innerHTML = '';
    for (let count = 1; count <= QNTD_CADEIRAS; count++) {
        span = document.createElement('span');             
        span.innerHTML = ` | ${count} | `
        exibirCadeiras.appendChild(span);
    }
}

function inserirValoresEmReservaEVerificar(valorDigitado) {
    for (c = 1; c <= QNTD_CADEIRAS; c++) {
        if( reserva[valorDigitado] ==  ' RESERVADO '){
            return false
        } else {
            return true
        }
    }
}

for (c = 1; c <= QNTD_CADEIRAS; c++) {
    reserva[c] = c
};

for (let count = 1; count <= QNTD_CADEIRAS; count++) {
    span = document.createElement('span');             
    span.innerHTML = ` | ${count} | `
    exibirCadeiras.appendChild(span);
}

enviar.addEventListener('click', () => {
        
    cadeiraSelecionada = Number(cadeira.value);

    inserirValoresEmReservaEVerificar(cadeiraSelecionada)
    
    if (inserirValoresEmReservaEVerificar(cadeiraSelecionada) == false) {
        alert('Cadeira Reservada, tente novamente!');
    } else {
        
        for (let contador = 0; contador <= QNTD_CADEIRAS  ; contador++) {
            if (reserva[contador] == cadeiraSelecionada) {
                reserva[contador] = ' RESERVADO ';
            }
        }

        exibirCadeiras.innerHTML = '';
        exibirCadeiras.innerHTML += reserva.join(' | ');
    }
})