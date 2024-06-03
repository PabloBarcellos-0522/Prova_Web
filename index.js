function enviar(){
    var nome = document.getElementById("Nome").value;
    var matricula = document.getElementById("Matricula").value;
    var nota1 = document.getElementById("Nota1").value;
    var nota2 = document.getElementById("Nota2").value;
    var media = (nota1/1 + nota2/1) / 2

    var novaTabela = document.createElement("table");
    var cabecalho = document.createElement("thead");
    var cabecalho_th1 = document.createElement("th");
    var cabecalho_th2 = document.createElement("th");
    var cabecalho_th3 = document.createElement("th");
    var cabecalho_th4 = document.createElement("th");
    var cabecalho_th5 = document.createElement("th");
    var cabecalho_th6 = document.createElement("th");

    var corpo = document.createElement("tbody");
    var corpo_td1 = document.createElement("td");
    var corpo_td2 = document.createElement("td");
    var corpo_td3 = document.createElement("td");
    var corpo_td4 = document.createElement("td");
    var corpo_td5 = document.createElement("td");
    var corpo_td6 = document.createElement("td");

    tabela.appendChild(cabecalho);
    tabela.appendChild(corpo);

    cabecalho.appendChild(cabecalho_th1)
    cabecalho.appendChild(cabecalho_th2)
    cabecalho.appendChild(cabecalho_th3)
    cabecalho.appendChild(cabecalho_th4)
    cabecalho.appendChild(cabecalho_th5)
    cabecalho.appendChild(cabecalho_th6)

    corpo.appendChild(corpo_td1)
    corpo.appendChild(corpo_td2)
    corpo.appendChild(corpo_td3)
    corpo.appendChild(corpo_td4)
    corpo.appendChild(corpo_td5)
    corpo.appendChild(corpo_td6)

    cabecalho_th1.innerHTML = "Nome"
    cabecalho_th2.innerHTML = "Matrícula"
    cabecalho_th3.innerHTML = "Nota 1"
    cabecalho_th4.innerHTML = "Nota 2"
    cabecalho_th5.innerHTML = "Média"
    cabecalho_th5.innerHTML = "Situação"

    corpo_td1.innerHTML = nome
    corpo_td2.innerHTML = matricula
    corpo_td3.innerHTML = nota1
    corpo_td4.innerHTML = nota2
    corpo_td5.innerHTML = media

    document.getElementById("tabela").appendChild(novaTabela);
    


    return true;



    const criarNovoParticipante = (participante) => {
        const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
        let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)
      
        if (participante.dataCheckIn == null) {
          dataCheckIn = `
              <button
                  data-email="${participante.email}"
                  onclick="fazerCheckIn(event)"
              >
                  Confirmar Check-in
              </button>
              `
        }
      
        return `
        <tr>
          <td>
            <strong>
              ${participante.nome}
            </strong>
            <br>
            <small>
              ${participante.email}
            </small>
          </td>
      
          <td>${dataInscricao}</td>
          <td>${dataCheckIn}</td>
        </tr>
        `
      }
}


window.onload = function() {
    document.getElementById("form").addEventListener("submit", function(event){
        event.preventDefault();
        console.log("Formulário enviado!");
    });
}