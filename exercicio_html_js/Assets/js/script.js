const form = document.querySelector('#Formulario')
const campo1 = document.querySelector('#campoA')
const campo2 = document.querySelector('#campoB')
const campoResultado = document.querySelector('#campoResult')


form.addEventListener('submit', function(e){
    e.preventDefault();
   

    if(campo2.value > campo1.value){     
        campoResultado.style.display = "flex"
        campoResultado.style.justifyContent = "center"
        campoResultado.style.backgroundColor = "green"
        campoResultado.innerHTML = `Formulário Válido, enviado com sucesso`
        
    }else if (campo2.value <= campo1.value) {   
        campoResultado.style.display = "flex"
        campoResultado.style.justifyContent = "center"
        campoResultado.style.backgroundColor = "red"
        campoResultado.innerHTML = `Formulário Inválido, campo B deve ser maior que campo A`
    }
})


