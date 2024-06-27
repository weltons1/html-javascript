const form = document.getElementById('formNumber');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valcampoA = document.getElementById('campoA').value;
    const valcampoB = document.getElementById('campoB').value;

    const valorcampoA = Number (valcampoA);
    const valorcampoB = Number (valcampoB);

    const mensagemSucesso = document.querySelector('.mensagenVeradeiro');
    const mensagemErro = document.querySelector('.mensagenFalso');

    const textoSucesso = `Sucesso o valor <b>${valcampoB}</b> é maior que <b>${valcampoA}</b>`;
    const textoErro = `ERRO! O valor <b>${valcampoB}</b> é menor que <b>${valcampoA}</b>`;

    if(valorcampoB >= valorcampoA) {
        mensagemSucesso.innerHTML = textoSucesso;
        mensagemErro.innerHTML = '';
        mensagemSucesso.style.display= 'block';
        mensagemErro.style.display = 'none';

    }
    else {
        mensagemErro.innerHTML= textoErro;
        mensagemSucesso.innerHTML= '';
        mensagemErro.style.display = 'block'; 
        mensagemSucesso.style.display ='none';
    }
    valcampoA.value = '' ;
    valcampoB.value = '' ;
})

console.log(form);