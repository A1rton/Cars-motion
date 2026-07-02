const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value.trim();
  let email = document.getElementById("email").value.trim();
  let telefono = document.getElementById("telefono").value.trim();
  let mensaje = document.getElementById("mensaje").value.trim();

  let errorNombre = document.getElementById("errorNombre");
  let errorEmail = document.getElementById("errorEmail");
  let errorTelefono = document.getElementById("errorTelefono");
  let errorMensaje = document.getElementById("errorMensaje");
  let mensajeExito = document.getElementById("mensajeExito");

  errorNombre.textContent = "";
  errorEmail.textContent = "";
  errorTelefono.textContent = "";
  errorMensaje.textContent = "";
  mensajeExito.textContent = "";

  let valido = true;

  if (nombre === "") {
    errorNombre.textContent = "El nombre es obligatorio.";
    valido = false;
  }

  if (email === "") {
    errorEmail.textContent = "El correo es obligatorio.";
    valido = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    errorEmail.textContent = "Ingresá un correo válido.";
    valido = false;
  }

  if (telefono === "") {
    errorTelefono.textContent = "El teléfono es obligatorio.";
    valido = false;
  } else if (isNaN(telefono)) {
    errorTelefono.textContent = "El teléfono solo debe contener números.";
    valido = false;
  }

  if (mensaje === "") {
    errorMensaje.textContent = "El mensaje es obligatorio.";
    valido = false;
  }

  if (valido) {
    mensajeExito.textContent = "Consulta enviada correctamente. ¡Gracias por contactarnos!";
    formulario.reset();
  }
});