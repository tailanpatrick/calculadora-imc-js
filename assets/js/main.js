const resultado = document.querySelector('.resultado');
const form = document.querySelector('#formulario');
const txtPeso = document.querySelector('#peso');
const txtAltura = document.querySelector('#altura');


function calcularIMC(event){

    const peso = Number(txtPeso.value.replace(',',".")); 
    const altura = Number(txtAltura.value.replace(',','.'));

    event.preventDefault();
    const imc = peso / altura ** 2;
    let msg = '';

    if (imc < 18.5) {
        msg = 'Abaixo do Peso';
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        msg = 'Peso Normal';
    }
    else if (imc >= 25 && imc <= 29.9) {
        msg = 'Sobrepeso';
    }
    else if (imc >= 30 && imc <= 34.9) {
        msg = 'Obesidade grau 1';
    }
    else if (imc >= 35 && imc <= 39.9) {
        msg = 'Obesidade grau 2';
    }
    else if (imc >= 40) {
        msg = 'Obesidade grau 3';
    }
    
    if (isNaN(imc) && isNaN(txtAltura.value) || txtAltura.value === '') {
        msg = 'Altura inválida!';
    }

    if (isNaN(imc) && isNaN(txtPeso.value) || txtPeso.value === '') {
        msg = 'Peso inválido!';
    }


    imprimeResultado(imc, msg);
}

function imprimeResultado(imc, mensagem) {
    let msgFinal = ''

    if (mensagem.includes('inválid')){
        msgFinal = mensagem;
        resultado.innerHTML = msgFinal;
        resultado.classList.add('red');
        resultado.classList.remove('green');
    }
    else {
        msgFinal = `Seu IMC é ${imc.toFixed(2)} (${mensagem})`;
        resultado.innerHTML = msgFinal;
        resultado.classList.add('green');
        resultado.classList.remove('red');      
    }   

    resultado.style.display = 'block';  
}

form.addEventListener('submit', calcularIMC);