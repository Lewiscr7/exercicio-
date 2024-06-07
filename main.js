const form = document.getElementById('form-numerico');

form.addEventListener("submit", function(e) {
    e.preventDefault(); // Evita que o formulario se recarregue
    const campoAinput = document.getElementById('campo-a');
    const campoBinput = document.getElementById('campo-b'); 

    const campoA = parseFloat(campoAinput.value);
    const campoB = parseFloat(campoBinput.value);

    const mensagemFalso = 'Tente outra vez';
    const mensagemVerdade = '<b>Está correto! O número do campo B é maior que o número campo A.</b>';

    if(campoA >= campoB){
        const containerFalso = document.querySelector('.mensagem-falso');
        containerFalso.innerHTML = mensagemFalso;
        containerFalso.style.display = 'block';
        document.querySelector('.mensagem-verdade').style.display = 'none';
    } else{
        const containerVerdade = document.querySelector('.mensagem-verdade');
        containerVerdade.innerHTML = mensagemVerdade;
        containerVerdade.style.display = 'block';
        document.querySelector('.mensagem-falso').style.display = 'none';
    }
});

/*
comandos muito utilizados em js:
querySelector
document.getElementById
innerHTMl

*/





