$(document).ready(function() {
    $('#carrossel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#celular').mask('(00) 00000-0000');
    $('.cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000')
        
    $('form').validate({
       rules: {
            nome: {
                required: true
            },
            cpf: {
                required:true
            },
            celular: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            endereco: {
                required:true
            },
            cep: {
                required: true
            },
       },
       messages:{
            nome: 'Campo obrigatório',
            cpf: 'Campo obrigatório',
            email: 'Informe e-mail válido',
            celular: 'Campo obrigatório',
            endereco: 'Campo obrigatório',
            cep: 'Campo obrigatório'


       },
       submitHandler: function(form) {
            console.log(form) 
         },
         invalidHandler: function(evento, validador) {
            let camposIncorretos =validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
         }
       }) 

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');

        $('html').animate({
            scrolltop: destino.offset().top
        }, 1000)
    })   
  }) 