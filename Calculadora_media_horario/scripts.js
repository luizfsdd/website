function adicionarCampo() {
    let div = document.createElement("div");
    div.className = "horario";

    let inputHoras = document.createElement("input");
    inputHoras.type = "number";
    inputHoras.className = "horas";
    inputHoras.placeholder = "HH";
    inputHoras.min = "0";
    inputHoras.max = "23";

    let inputMinutos = document.createElement("input");
    inputMinutos.type = "number";
    inputMinutos.className = "minutos";
    inputMinutos.placeholder = "MM";
    inputMinutos.min = "0";
    inputMinutos.max = "59";

    let inputSegundos = document.createElement("input");
    inputSegundos.type = "number";
    inputSegundos.className = "segundos";
    inputSegundos.placeholder = "SS";
    inputSegundos.min = "0";
    inputSegundos.max = "59";

    let botaoRemover = document.createElement("button");
    botaoRemover.className = "remover";
    botaoRemover.innerText = "❌";
    botaoRemover.onclick = function () {
        div.remove();
    };

    div.appendChild(inputHoras);
    div.appendChild(inputMinutos);
    div.appendChild(inputSegundos);
    div.appendChild(botaoRemover);

    document.getElementById("inputs").appendChild(div);
}

function calcularMedia() {
    let horarios = Array.from(document.querySelectorAll(".horario"));
    
    if (horarios.length === 0) {
        alert("Adicione pelo menos um horário!");
        return;
    }

    let totalSegundos = 0;

    for (let div of horarios) {
        let hh = parseInt(div.querySelector(".horas").value) || 0;
        let mm = parseInt(div.querySelector(".minutos").value) || 0;
        let ss = parseInt(div.querySelector(".segundos").value) || 0;
        
        totalSegundos += hh * 3600 + mm * 60 + ss;
    }

    let mediaSegundos = Math.floor(totalSegundos / horarios.length);
    let horas = String(Math.floor(mediaSegundos / 3600)).padStart(2, '0');
    let minutos = String(Math.floor((mediaSegundos % 3600) / 60)).padStart(2, '0');
    let segundos = String(mediaSegundos % 60).padStart(2, '0');

    document.getElementById("resultado").innerText = `${horas}:${minutos}:${segundos}`;
}
