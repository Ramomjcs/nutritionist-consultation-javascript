var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){ // o event diz quem foi clicado
    
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){ // espero 500ms para executar a função e o código event.target...
        event.target.parentNode.remove();
    }, 500)
    
});


