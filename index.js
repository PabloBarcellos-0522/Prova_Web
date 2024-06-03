var novaTabela = document.createElement("table");
var cabecalho = document.createElement("thead");
var cabecalho_th1 = document.createElement("th");
var cabecalho_th2 = document.createElement("th");
var cabecalho_th3 = document.createElement("th");
var cabecalho_th4 = document.createElement("th");
var cabecalho_th5 = document.createElement("th");
var cabecalho_th6 = document.createElement("th");

var corpo = document.createElement("tbody");
let corpo_td1 = document.createElement("td");
let corpo_td2 = document.createElement("td");
let corpo_td3 = document.createElement("td");
let corpo_td4 = document.createElement("td");
let corpo_td5 = document.createElement("td");
let corpo_td6 = document.createElement("td");

var tr = document.createElement(tr)

tabela.appendChild(cabecalho);
tabela.appendChild(corpo);

cabecalho.appendChild(cabecalho_th1)
cabecalho.appendChild(cabecalho_th2)
cabecalho.appendChild(cabecalho_th3)
cabecalho.appendChild(cabecalho_th4)
cabecalho.appendChild(cabecalho_th5)
cabecalho.appendChild(cabecalho_th6)

tr.appendChild(corpo_td1)
tr.appendChild(corpo_td2)
tr.appendChild(corpo_td3)
tr.appendChild(corpo_td4)
tr.appendChild(corpo_td5)
tr.appendChild(corpo_td6)
corpo.appendChild(tr)


function enviar(){
    var nome = document.getElementById("Nome").value;
    var matricula = document.getElementById("Matricula").value;
    var nota1 = document.getElementById("Nota1").value;
    var nota2 = document.getElementById("Nota2").value;
    var media = (nota1/1 + nota2/1) / 2

    var novotr = document.createElement("tr")

    cabecalho_th1.innerHTML = "Nome"
    cabecalho_th2.innerHTML = "Matrícula"
    cabecalho_th3.innerHTML = "Nota 1"
    cabecalho_th4.innerHTML = "Nota 2"
    cabecalho_th5.innerHTML = "Média"
    cabecalho_th5.innerHTML = "Situação"

    let corpo_td1 = document.createElement("td");
    let corpo_td2 = document.createElement("td");
    let corpo_td3 = document.createElement("td");
    let corpo_td4 = document.createElement("td");
    let corpo_td5 = document.createElement("td");
    let corpo_td6 = document.createElement("td");

    corpo_td1.innerHTML = nome
    corpo_td2.innerHTML = matricula
    corpo_td3.innerHTML = nota1
    corpo_td4.innerHTML = nota2
    corpo_td5.innerHTML = media

    novotr.appendChild(corpo_td1)
    novotr.appendChild(corpo_td2)
    novotr.appendChild(corpo_td3)
    novotr.appendChild(corpo_td4)
    novotr.appendChild(corpo_td5)
    novotr.appendChild(corpo_td6)
    corpo.appendChild(novotr)

    if (media > 5) {
        corpo_td6.innerHTML = "Aprovado"
    } else {
        corpo_td6.innerHTML = "Reprovado"
    }

    document.getElementById("tabela").appendChild(novaTabela);

    var form = document.getElementById("form");
        form.reset();
    return true;

}


window.onload = function() {
    document.getElementById("form").addEventListener("submit", function(event){
        event.preventDefault();

        console.log("Formulário enviado!");
    });
}