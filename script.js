const form = document.getElementById("Formcadastro");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let ingressoSelecionado = "Não selecionado";

    if (document.getElementById("pista").checked) {
        ingressoSelecionado = "Pista";
    } else if (document.getElementById("vip").checked) {
        ingressoSelecionado = "VIP";
    } else if (document.getElementById("camarote").checked) {
        ingressoSelecionado = "Camarote";
    }

    const dados = {
        nome: document.getElementById("Nome").value,
        email: document.getElementById("Email").value, 
        idade: document.getElementById("Idade").value,
        ingresso: ingressoSelecionado
    };

    console.log(dados);
    
    form.reset();
});