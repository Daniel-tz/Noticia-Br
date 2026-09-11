// MENU MOBILE

const menuToggle = document.getElementById("menuToggle");

const nav = document.getElementById("nav");


menuToggle.addEventListener("click", () => {

  nav.classList.toggle("open");

});


// FECHAR MENU DEPOIS DE CLICAR

document.querySelectorAll("nav a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("open");

  });

});


// DATA AUTOMÁTICA

const dateEl = document.getElementById("date");

const now = new Date();

dateEl.textContent = now.toLocaleDateString(
  "pt-BR",
  {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  }
);


// FORMULÁRIO

document
  .getElementById("newsletterForm")
  .addEventListener("submit", function(event) {

    event.preventDefault();

    const email =
      document.getElementById("email").value;

    alert(
      `Cadastro demonstrativo realizado para ${email}.`
    );

    this.reset();

  });