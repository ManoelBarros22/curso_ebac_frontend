$(document).ready(function() {
    $('#carrossel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#Telefone').mask('(00) 00000-0000')
        
    $('form').validate({
       rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required:true,
            },
            veiculoDeInteresse: {
                required: false,
            }
       },
       messages:{
            nome: 'Por favor, insira o seu nome'
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