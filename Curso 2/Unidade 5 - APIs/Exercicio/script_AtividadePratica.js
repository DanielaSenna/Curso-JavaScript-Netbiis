import { getProfile } from './api_AtividadePratica.js';

const usernameInput = document.getElementById('username');
const searchButton = document.getElementById('search-btn');
const profileInfo = document.getElementById('profile-container');

// Evento para buscar o perfil ao clicar no botão
searchButton.addEventListener('click', async () => {
    const username = usernameInput.value;
    if (username) {
        try {
            const profileData = await getProfile(username);
            renderProfile(profileData);
        } catch (error) {
            profileInfo.innerHTML = `<p style="color: red;">${error.message}</p>`;
        }
    }
});

// Função para renderizar as informações do perfil
function renderProfile(profile) {
    profileInfo.innerHTML = `
        <div class="profile-details">
        <img id="avatar" src="${profile.avatar_url}" alt="Avatar" width="150">
        <h2 id="name">${profile.name} (${profile.login})</h2>
        <p id="bio">${profile.bio || 'Sem bio'}</p>
        <p><strong>Localização:</strong> ${profile.location || 'Não especificado'}</p>
        <p><strong>Seguidores:</strong> <span id="followers">${profile.followers}</span></p>
        <p><strong>Seguindo:</strong> <span id="following">${profile.following}</span></p>
        <p><strong>Repositórios:</strong> <a id="profile-link" href="${profile.html_url}" target="_blank">Ver perfil no GitHub</a></p>
        </div>
    `;
}
