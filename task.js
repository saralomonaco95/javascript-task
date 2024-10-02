function aggiungiinvitato() {
  
    var nome = document.getElementById("in-nom").value;
    var cognome = document.getElementById("in-cogn").value;
    var numero = document.getElementById("in-num").value;
    var email = document.getElementById("in-ema").value;

   
    if (!nome || !cognome || isNaN(numero) || !email) {
        document.getElementById("messaggio").innerHTML = "Inserisci i campi correttamente";
        return;
    }

    var tabella = document.getElementById("corpotabella");
    var datiinvitato = [nome, cognome, numero, email];

    var riga = "<tr>";

    for (var i = 0; i < datiinvitato.length; i++) {
        riga +=  ` <td> ${datiinvitato[i]}</td> `;
    }

    riga += "</tr>"; 

    tabella.innerHTML += riga;

    document.getElementById("in-nom").value = "";
    document.getElementById("in-cogn").value = "";
    document.getElementById("in-num").value = "";
    document.getElementById("in-ema").value = "";
    document.getElementById("messaggio").innerHTML = "";
}