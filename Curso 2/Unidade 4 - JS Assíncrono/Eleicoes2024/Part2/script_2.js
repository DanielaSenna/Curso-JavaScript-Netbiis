// Função que retorna uma Promise para simular a obtenção de dados com delay de 2 segundos

let candidatos = []; // Array para armazenar os candidatos após o carregamento
let votosBrancos = 0;
let votosNulos = 0;

const btnVotar = document.getElementById('btn-votar');
const inputCandidato = document.getElementById('numero-candidato');
const ulCandidatos = document.getElementById('candidatos');
const spVotosBrancos = document.getElementById('votos-brancos');
const spVotosNulos = document.getElementById('votos-nulos');

const candidatosPromise = new Promise((resolve, reject) => {
    let listaCandidatos = [
        { numeroCampanha: '50', nome: 'Guilherme Boulos', votos: 0 },
        { numeroCampanha: '15', nome: 'Ricardo Nunes', votos: 0 },
        { numeroCampanha: '28', nome: 'Pablo Marçal', votos: 0 }
    ];
    setTimeout(() => {
        resolve(listaCandidatos);
    }, 2000);
})

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

candidatosPromise.then(listaCandidatos => {
    candidatos = listaCandidatos;
    renderizarCandidatos();
})