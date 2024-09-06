function displayInfo() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const resultDiv = document.getElementById('result');
    
    if (name && age) {
        resultDiv.innerHTML = `<p>Nome: ${name}</p><p>Idade: ${age}</p>`;
    } else {
        resultDiv.innerHTML = '<p>Por favor, preencha todos os campos.</p>';
    }
}
