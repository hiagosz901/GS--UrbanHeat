const form = document .getElementById("form-Contato");

form.addEventListener("submit",(e) => {

    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if(nome === "" || email === "" || mensagem === ""){
        alert("Preencha todos os campos");
        return
    }

    alert("Formulario enviado")
});