var formulario = document.getElementById('formulario');
var inputs = document.querySelectorAll('#formulario input');
var expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^.{4,12}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
};
var campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false
};
var validarFormulario = function (e) {
    switch (e.target.name) {
        case 'usuario':
            validarCampo(expresiones.usuario, e.target, 'usuario');
            break;
        case 'nombre':
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case 'password':
            validarCampo(expresiones.password, e.target, 'password');
            validarPassword2();
            break;
        case 'password2':
            validarPassword2();
            break;
        case 'correo':
            validarCampo(expresiones.correo, e.target, 'correo');
            break;
        case 'telefono':
            validarCampo(expresiones.telefono, e.target, 'telefono');
            break;
        default:
            break;
    }
};
var validarCampo = function (expresion, input, campo) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    if (expresion.test(input.value)) {
        (_a = document.getElementById("grupo__" + campo)) === null || _a === void 0 ? void 0 : _a.classList.remove('formulario__grupo-incorrecto');
        (_b = document.getElementById("grupo__" + campo)) === null || _b === void 0 ? void 0 : _b.classList.add('formulario__grupo-correcto');
        (_c = document.querySelector("#grupo__" + campo + " i")) === null || _c === void 0 ? void 0 : _c.classList.add('fa-check-circle');
        (_d = document.querySelector("#grupo__" + campo + " i")) === null || _d === void 0 ? void 0 : _d.classList.remove('fa-times-circle');
        (_e = document.querySelector("#grupo__" + campo + " .formulario__input-error")) === null || _e === void 0 ? void 0 : _e.classList.remove('formulario__input-error-activo');
        // @ts-ignore: Unreachable code error
        campos[campo] = true;
    }
    else {
        (_f = document.getElementById("grupo__" + campo)) === null || _f === void 0 ? void 0 : _f.classList.add('formulario__grupo-incorrecto');
        (_g = document.getElementById("grupo__" + campo)) === null || _g === void 0 ? void 0 : _g.classList.remove('formulario__grupo-correcto');
        (_h = document.querySelector("#grupo__" + campo + " i")) === null || _h === void 0 ? void 0 : _h.classList.add('fa-times-circle');
        (_j = document.querySelector("#grupo__" + campo + " i")) === null || _j === void 0 ? void 0 : _j.classList.remove('fa-ckecl-circle');
        (_k = document.querySelector("#grupo__" + campo + " .formulario__input-error")) === null || _k === void 0 ? void 0 : _k.classList.add('formulario__input-error-activo');
        // @ts-ignore: Unreachable code error
        campos[campo] = true;
    }
};
var validarPassword2 = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var inputPassword = document.getElementById('password');
    var inputPassword2 = document.getElementById('password2');
    if (inputPassword.value !== inputPassword2.value) {
        (_a = document.getElementById("grupo__password2")) === null || _a === void 0 ? void 0 : _a.classList.add('formulario__grupo-incorrecto');
        (_b = document.getElementById("grupo__password2")) === null || _b === void 0 ? void 0 : _b.classList.remove('formulario__grupo-correcto');
        (_c = document.querySelector("#grupo__password2 i")) === null || _c === void 0 ? void 0 : _c.classList.add('fa-times-circle');
        (_d = document.querySelector("#grupo__password2 i")) === null || _d === void 0 ? void 0 : _d.classList.remove('fa-ckecl-circle');
        (_e = document.querySelector("#grupo__password2 .formulario__input-error")) === null || _e === void 0 ? void 0 : _e.classList.add('formulario__input-error-activo');
        campos['password'] = false;
    }
    else {
        (_f = document.getElementById("grupo__password2")) === null || _f === void 0 ? void 0 : _f.classList.remove('formulario__grupo-incorrecto');
        (_g = document.getElementById("grupo__password2")) === null || _g === void 0 ? void 0 : _g.classList.add('formulario__grupo-correcto');
        (_h = document.querySelector("#grupo__password2 i")) === null || _h === void 0 ? void 0 : _h.classList.remove('fa-times-circle');
        (_j = document.querySelector("#grupo__password2 i")) === null || _j === void 0 ? void 0 : _j.classList.add('fa-ckecl-circle');
        (_k = document.querySelector("#grupo__password2 .formulario__input-error")) === null || _k === void 0 ? void 0 : _k.classList.remove('formulario__input-error-activo');
        campos['password'] = true;
    }
};
inputs.forEach(function (input) {
    // @ts-ignore: Unreachable code error
    input.addEventListener('keyup', validarFormulario);
    // @ts-ignore: Unreachable code error
    input.addEventListener('blur', validarFormulario);
});
formulario === null || formulario === void 0 ? void 0 : formulario.addEventListener('submit', function (e) {
    var _a, _b;
    e.preventDefault();
    var terminos = document.getElementById('terminos');
    if (campos.usuario &&
        campos.nombre &&
        campos.password &&
        campos.correo &&
        campos.telefono &&
        terminos.checked) {
        formulario.reset();
        (_a = document.getElementById('formulario__mensaje-exito')) === null || _a === void 0 ? void 0 : _a.classList.add('formulario__mensaje-exito-activo');
        setTimeout(function () {
            var _a;
            (_a = document.getElementById('formulario__mensaje-exito')) === null || _a === void 0 ? void 0 : _a.classList.remove('formulario__mensaje-exito-activo');
        }, 5000);
        document.querySelectorAll('.formulario__grupo-correcto').forEach(function (icono) {
            icono.classList.remove('formulario__grupo-correcto');
        });
    }
    else {
        (_b = document.getElementById('formulario__mensaje')) === null || _b === void 0 ? void 0 : _b.classList.add('formulario__mensaje-activo');
    }
});
