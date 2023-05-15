// Upgrades
// Validação Verificar se todos numeros já foram escolhidos, se sim exibir alerta informando ao usuário
// Expandir para mais de uma fileira
// Ao inves de digitar, clicar no botão da cadeira a reservar, mudar cor de fundo se já foi selecionado
// Criação de um site com esse sistema incluído

// VARIAVEIS
var exibirCadeiras = document.getElementById('exibirCadeiras');
const enviar = document.getElementById('enviar');
const finalizar = document.getElementById('finalizar');
const respostaDivHtml = document.getElementById('resultado');

var resposta = '';
const QNTD_CADEIRAS = 10;
var reserva = [];
var cadeira = document.getElementById('numeroCadeira');
var somaReserva = 0

// FUNÇÕES
function limparEExibirCadeirasCinema() {
    exibirCadeiras.innerHTML = '';
    for (let count = 1; count <= QNTD_CADEIRAS; count++) {
        span = document.createElement('span');             
        span.innerHTML = ` | ${count} | `
        exibirCadeiras.appendChild(span);
    }
}

function validacaoCampoVazio() { // Verificar se input esta preenchido // se é número de 1 a 10
    if (cadeira.value == 0) return false
    else return true
}

function validacaoNumeroLimite() {
    if (cadeira.value > 10) return false
    else return true
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

    respostaDivHtml.innerHTML = '';        
    arrayReservados = [];    
    cadeiraSelecionada = Number(cadeira.value);

    inserirValoresEmReservaEVerificar(cadeiraSelecionada)

    if (validacaoCampoVazio() == false || validacaoNumeroLimite() == false) {
        alert('ERRO: Digite um valor entre 1 e 10 para continuar.')
    } else  if (inserirValoresEmReservaEVerificar(cadeiraSelecionada) == false) {
        alert('Cadeira Reservada, tente novamente!');
    } else {
        
        for (let contador = 0; contador <= QNTD_CADEIRAS  ; contador++) {
            if (reserva[contador] == cadeiraSelecionada) {
                reserva[contador] = ' RESERVADO ';
                somaReserva = somaReserva + 1;
                arrayReservados.push(cadeiraSelecionada);
            }
        }

        exibirCadeirasReservadas = arrayReservados.forEach(val => {
            return arrayReservados[val]
        });

        exibirCadeiras.innerHTML = '';
        exibirCadeiras.innerHTML += reserva.join(' | ');
    }
})

finalizar.addEventListener('click', () => {
    if (somaReserva == 0) {
        alert('Reserve ao menos uma cadeira para conseguir finalizar o programa')
    }else {
        respostaDivHtml.innerHTML = `A quantidade de cadeiras reservadas foi ${somaReserva}.`
    }
})