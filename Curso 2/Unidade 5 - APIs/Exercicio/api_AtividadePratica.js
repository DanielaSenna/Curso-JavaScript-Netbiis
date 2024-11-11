export async function getProfile(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if (!response.ok) {
        throw new Error('Usuário não encontrado');
    }

    console.log("Requisição para " + response.url + "retornou status " + response.status);
    return await response.json();
}
