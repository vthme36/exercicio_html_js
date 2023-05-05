const form = document.getElementById('form-numerico');

function validaNumero(numeroCompleto) {
    const numeroComArray = numeroCompleto.split('');
    return numeroComArray.length > numeroCompleto
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = document.getElementById('valor-a').value;
    const campoB = document.getElementById('valor-b').value;
    const mensagemSucesso = '<b>Sucesso</b>'

    function resultado(campoA, campoB) {
        if (campoA == campoB) {
            alert("Campo A é igual ao Campo B, Campo B precisa ser maior que Campo A!");
        } else if (campoA > campoB) {
            alert("Campo A é maior que Campo B, Campo B precisa ser maior que Campo A!");
        } else {
            const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        
        }
    }


    formEValido = resultado(campoA, campoB)
});