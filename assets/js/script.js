// Animación Navbar
window.addEventListener("DOMContentLoaded", (event) => {
    var navHeight = function() {
        const navbar = document.body.querySelector("#nav");
        if (window.scrollY === 0) {
            navbar.classList.remove("nav100");
        } else {
            navbar.classList.add("nav100");
        }
    };

    // El nav se achica cuando la página hace scroll
    document.addEventListener("scroll", navHeight);
});


// Animación Ícono Menú
let elementoMenu = document.getElementsByClassName('icono-menu')[0];

document.addEventListener('click', function(event) {
    elementoMenu.classList.toggle('activo');
});