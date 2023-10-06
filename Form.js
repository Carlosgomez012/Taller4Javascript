// Obtener elementos
const nombreInput = document.getElementById("name");
const nombreError = document.getElementById("nombreError");

// Agregar el evento "input" y pasar la función de validación como parámetro
nombreInput.addEventListener("input", validarNombre);
nombreInput.addEventListener("click", validarNombre);


// Definir la función de validación
function validarNombre() {
    const nombreValue = nombreInput.value.trim();
    const regex = /^[A-Za-z]+$/; // Expresión regular para letras mayúsculas y minúsculas

    if (nombreValue === "") {
        nombreError.textContent = "El campo nombre debe estar lleno.";
    } else if (!regex.test(nombreValue)) {
        nombreError.textContent = "El campo nombre debe contener solo letras.";
    } else if (nombreValue.length > 25) {
        nombreError.textContent = "El nombre no debe tener más de 25 caracteres.";
    } else {
        nombreError.textContent = ""; // Limpiar mensaje de error
    }
}

const apellidoInput = document.getElementById("lastname");
const apellidoError = document.getElementById("apellidoError");

apellidoInput.addEventListener("input", validarApellido);
apellidoInput.addEventListener("click", validarApellido);

function validarApellido() {
    const apellidoValue = apellidoInput.value.trim();
    const regex = /^[A-Za-z]+$/; // Expresión regular para letras mayúsculas y minúsculas

    if (apellidoValue === "") {
        apellidoError.textContent = "El campo apellido debe estar lleno.";
    } else if (!regex.test(apellidoValue)) {
        apellidoError.textContent = "El campo apellido  debe contener solo letras.";
    } else if (apellidoValue.length > 25) {
        apellidoError.textContent = "El campo apellido no debe tener más de 25 caracteres.";
    } else {
        apellidoError.textContent = ""; // Limpiar mensaje de error
    }
}

// Para dirección

const direccionInput = document.getElementById("adress");
const direccionError = document.getElementById("direccionError");

direccionInput.addEventListener("input", function () {// forma mas corta sin poner nombre para la función.
    const direccionValue = direccionInput.value.trim();
    if (direccionValue === "") {
        direccionError.textContent = "El campo dirección debe estar lleno.";
    } else {
        const palabrasClave = ["cll", "cra", "av", "anv", "trans"];
        const empiezaConPalabraClave = palabrasClave.some(palabra => direccionValue.toLowerCase().startsWith(palabra));
        if (!empiezaConPalabraClave) {
            direccionError.textContent = "La dirección debe empezar con cll, cra, av, anv o trans.";
        } else {
            direccionError.textContent = ""; // Clear error message
        }
    }
});

//CC usuario 


// Obtener elementos del DOM
const ccUsuarioInput = document.getElementById("cc_user");
const ccUsuarioError = document.getElementById("ccUsuarioError");

// Agregar un evento "input" al campo de entrada y asociarlo a la función de validación
ccUsuarioInput.addEventListener("input", validarCCUsuario);

// Definir la función de validación
function validarCCUsuario() {
    // Obtener el valor del campo de entrada y eliminar espacios en blanco al principio y al final
    const ccUsuarioValue = ccUsuarioInput.value.trim();

    // Lista de caracteres no permitidos
    const caracteresNoPermitidos = ["@", "#", "$", "%", "&"];

    // Verificar si el campo está vacío
    if (ccUsuarioValue === "") {
        ccUsuarioError.textContent = "El campo CC usuario debe estar lleno.";
    } else if (ccUsuarioValue.length < 10) {
        ccUsuarioError.textContent = " El campo CC usuario debe tener almenos 10 caracteres";
    }
    else if (ccUsuarioValue.length > 25) {
        ccUsuarioError.textContent = "El campo CC usuario no debe contener más de 25 caracteres";
    }
    else {
        let contieneCaracterNoPermitido = false;

        // Iterar a través de los caracteres del valor ingresado
        for (let i = 0; i < ccUsuarioValue.length; i++) {
            const caracter = ccUsuarioValue[i];

            // Verificar si el carácter actual está en la lista de caracteres no permitidos
            if (caracteresNoPermitidos.includes(caracter)) {
                contieneCaracterNoPermitido = true;
                break; // Salir del bucle si se encuentra un carácter no permitido
            }
        }

        // Verificar si se encontraron caracteres no permitidos
        if (contieneCaracterNoPermitido) {
            ccUsuarioError.textContent = "El campo CC usuario contiene caracteres no permitidos.";
        } else {
            ccUsuarioError.textContent = ""; // Limpiar mensaje de error
        }
    }
}

//contraseña verificarla


function verificarContrasena() {
    const regexMayuscula = /[A-Z]/;
    const regexNumero = /[0-9]/;
    const regexLetra = /[a-zA-Z]/;
    const regexCaracterEspecial = /[#%\/&]/;
    const password = document.getElementById("password").value;

    if (password.length < 15) {
        document.getElementById("mensaje").textContent =
            "La contraseña debe tener al menos 15 caracteres";
    } else if (password.length > 25) {
        document.getElementById("mensaje").textContent =
            "La contraseña debe tener un máximo de 25 caracteres";
    } else if (
        regexMayuscula.test(password) &&
        regexNumero.test(password) &&
        regexLetra.test(password) &&
        regexCaracterEspecial.test(password)
    ) {
        document.getElementById("mensaje").textContent =
            "La contraseña cumple con los requisitos";
    } else {
        document.getElementById("mensaje").textContent =
            "La contraseña no cumple con los requisitos. Debe contener al menos una mayúscula, un número, una letra y uno de los siguientes caracteres: #, %, /, &.";
    }
}



//email 

const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

// Agregar el evento "input" y pasar la función de validación como parámetro
emailInput.addEventListener("input", validarEmail);



// Definir la función de validación
function validarEmail() {
    const emailValue = emailInput.value;

    if (emailValue === "") {
        emailError.textContent = "El campo email debe estar lleno.";

    }
    else if (emailValue.length > 120) {
        emailError.textContent = "El Email no debe contener más de 120 caracteres.";
    } else {
        emailError.textContent = ""; // Limpiar mensaje de error
    }
}

// gustos 
const gustosRadio = document.getElementById("gustos_radio");
const registroGustos = document.querySelector(".registro-gustos");

gustosRadio.addEventListener("change", function () {
    if (this.checked) {
        registroGustos.style.display = "block";
    } else {
        registroGustos.style.display = "none";
    }
});















