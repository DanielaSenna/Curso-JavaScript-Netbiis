// Função que retorna uma Promise para simular a obtenção de dados com delay de 2 segundos
function obterCandidatos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const candidatos = [
                { numeroCampanha: '50', nome: 'Guilherme Boulos', votos: 0 },
                { numeroCampanha: '15', nome: 'Ricardo Nunes', votos: 0 },
                { numeroCampanha: '28', nome: 'Pablo Marçal', votos: 0 }
            ];
            resolve(candidatos);
        }, 2000);
    });
}

let votosBrancos = 0;
let votosNulos = 0;
let candidatos = []; // Array para armazenar os candidatos após o carregamento

const btnVotar = document.getElementById('btn-votar');
const inputCandidato = document.getElementById('numero-candidato');
const ulCandidatos = document.getElementById('candidatos');
const spVotosBrancos = document.getElementById('votos-brancos');
const spVotosNulos = document.getElementById('votos-nulos');

// Inicializa o sistema de votação ao carregar os dados
async function iniciarVotacao() {
    try {
        console.log("Carregando candidatos...");
        candidatos = await obterCandidatos(); // Aguarda o carregamento dos candidatos
        console.log("Candidatos carregados:", candidatos);
        renderizarCandidatos(); // Renderiza os candidatos após o carregamento
    } catch (error) {
        console.error("Erro ao carregar os candidatos:", error);
    }
}

btnVotar.addEventListener('click', () => {
    const numeroDigitado = inputCandidato.value;
    console.log(numeroDigitado);
    votaCandidato(numeroDigitado);
});

function renderizarCandidatos() {
    ulCandidatos.innerHTML = '';
    spVotosBrancos.innerText = votosBrancos;
    spVotosNulos.innerText = votosNulos;
    candidatos.sort((a, b) => b.votos - a.votos);
    candidatos.forEach(candidato => {
        ulCandidatos.innerHTML += /*html*/ `
            <li>
                <span class="nome-candidato">${candidato.nome}</span>
                <span class="votos-candidato">${candidato.votos} votos</span>
            </li>
        `;
    });
}

function votaCandidato(numeroCampanha) {
    const candidatoIndex = candidatos.findIndex(el => el.numeroCampanha == numeroCampanha);
    if(numeroCampanha === '') {
        votosBrancos++;
    }else if (candidatoIndex === -1) {
        votosNulos++;
    } else {
        candidatos[candidatoIndex].votos++;
    }
    renderizarCandidatos();
}

// Inicia o carregamento dos candidatos e o sistema de votação ao carregar a página
document.addEventListener("DOMContentLoaded", iniciarVotacao);

