document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("contactForm");
  const resultado = document.getElementById("success");
  const boton = document.getElementById("sendMessageButton");
  if (!formulario) return;

  const aviso = "Demostración académica: este formulario no envía mensajes.";
  if (boton) boton.textContent = "Formulario de demostración";
  if (resultado) {
    resultado.textContent = aviso;
    resultado.setAttribute("role", "status");
  }
  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    if (resultado) resultado.textContent = aviso;
  });
});