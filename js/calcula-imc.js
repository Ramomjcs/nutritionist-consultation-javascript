var titulo = document.querySelector("#titulo");
titulo.textContent = "Ramom Nutricionista";
//......................................................................
// a função querySelector só nos passa um elemento. SE eu estou interessado em trazer vários elementos
//que tem aquela classe, tenho que usar a função prima dela quersy.selectorAll
var pacientes = document.querySelectorAll(".paciente");

//console.log(pacientes);

var tamanhoDaLista = pacientes.length;

for(var i=0; i < tamanhoDaLista; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var pesoEhValido = true;
    var alturaEhValida = true;

    var tdImc = paciente.querySelector(".info-imc");

    if(peso < 0 || peso >= 1000){
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
        //modificar o estilo do css, ir no index.css
        paciente.classList.add("paciente-invalido");
    }
    if(altura < 0 || altura >= 3.00){
        console.log("Altura inválida");
        pesoEhValido = false;
        tdImc.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValida){
        var imc = calculaIMC(peso,altura);
        tdImc.textContent = imc;
    }
//seria um processo infeliz se copiasse e colasse tudo 
//para cada paciente
}

titulo.addEventListener("click", function (){
    alert("Acesse meu webiste: https://ramom.com.br");
});

function calculaIMC(peso,altura){
    var imc = 0;
    imc = peso/(altura*altura);
    return imc.toFixed(2);
}