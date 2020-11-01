//temos um comportamento padrão do form que é enviar o form, daí ele atualiza a página 
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    //Como padrão, ao clicar no botão a página recarrega. Para isso não acontecer, uso essa função para o botão não fazer seu comportamento padrão.
    //Previne o comportamento padrão
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);
    
    /*Preciso agora colocar a tr dentro do tbody*/
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

});

function obtemPacienteDoFormulario(form){
    //criando um objeto paciente, pegando os dados do form e colocando no objeto
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){
    //createElement para criar um novo elemento no HTML, uma nova tr

    //Criando uma tr
    var pacienteTr = document.createElement("tr"); //passo o nome da tag que quero criar
    //Um paciente é uma tr com várias td lá dentro e com os dados equivalentes, então vamos criar as tds

    //Quero que meu novo paciente tenha sua classe como paciente
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");

    /*Preciso colocar as td's dentro da tr. Ou seja, as td's são filhos e a tr pai.*/
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd(dado, classe){
    //Criando uma td
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
