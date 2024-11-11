const promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolvida');
        // reject('Rejeitada');
    }, 2000);
});

promessa.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

async function executarPromessa() {
    try {
        const resposta = await promessa;
        console.log(resposta);
    }catch(err) {
        console.log(err);
    }
}