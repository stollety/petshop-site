/* ---------- Saudação  ---------- */
const agora = new Date();
const hora = agora.getHours();
let msg = "";

if (hora < 12) msg = "Bom dia!";
else if (hora < 18) msg = "Boa tarde!";
else msg = "Boa noite!";

const titulo = document.getElementById("saudacao");
if (titulo) {
    titulo.innerText = msg;
}

/* ---------- Carrossel  ---------- */
const carrossel = document.querySelector("#carouselPets");

if (carrossel) {
    new bootstrap.Carousel(carrossel, {
        interval: 3000,
        ride: "carousel"
    });
}

/* ---- Validação do formulário ---- */
const form = document.getElementById("formCadastro");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Cadastro enviado com sucesso! Obrigado por escolher o PetShop Mundo Animal 🐾");
        form.reset();
    });
}
