// Elementos para el menu
const body = document.querySelector("body")
let list = document.querySelectorAll(".li-list"); // selecciono todos las palabras del menu
let submenu1 = document.getElementById('submenu');
let borroso = document.querySelector(".borroso")
let isOpen = false; // Variable para confirmar si el menu esta abierto o cerrado

list.forEach((elemento) => { // creo un bucle que seleccione a todos los elementos (services, works, company, etc )
    elemento.addEventListener("mouseover", () => {
        if (!isOpen) { // Si el menu no esta abierto se acceden a estas funciones
            submenu1.style.padding = "41px";
            submenu1.style.height = "354px";
            submenu1.style.transition = "0.5s";
            borroso.style.display = "block"
            borroso.style.backdropFilter = "blur(10px)"
            isOpen = true; // IsOpen se vuelve verdadero
        }
    });
});

//Se crea un evento si el mouse esta afuera
submenu1.addEventListener("mouseleave", () => {
    if (isOpen) { //Como IsOpen pasa a ser verdadero la condicion es verdadera por lo tanto el evento va a funcionar
        submenu1.style.padding = "0";
        submenu1.style.height = "0";
        submenu1.style.transition = "0.5s";
        borroso.style.display = "none"
        borroso.style.backdropFilter = "blur(0)"
        isOpen = false; // IsOpen se vuelve falso
    }
});

// Parte de la bienvenida
let welcome = document.querySelector(".welcome")

setInterval((Interval) => { //se crea un intervalo de tiempo de 2ms 
    welcome.style.display = "none" // cuando pasen los 2ms el div de la raya va a tener un display none, osea desaparece
}, 200);


// Parte del texto que cambia 
let textoCambiante = document.querySelector(".typetext");
let textos = ["Business", "Startup", "Company"];

const escribir = (textos, tiempo, textoVariable) => {
    let index = 0;
    let caracteres = textos[index].split('');
    let count = 0;
    let j = textos[index].length;

    setInterval(() => {
        if (count === caracteres.length) {
            textoVariable.innerHTML = textos[index].substring(0, j);
            j--;
            if (j === 0) {
                textoVariable.innerHTML = '';
                count = 0;
                j = textos[index].length;
                index++;
                if (index >= textos.length) {
                    index = 0;
                }
                caracteres = textos[index].split('');
            }
        } else {
            textoVariable.innerHTML += caracteres[count];
            count++;
        }
    }, tiempo);
};

escribir(textos, 150, textoCambiante);

// Parte 3

let preguntasContainer = document.querySelectorAll(".containerQuestione")
preguntasContainer.forEach(element => { 
    element.addEventListener("click", ()=>{
    element.classList.toggle('openQuestion')
})
}) 

/* Boton */
let boton = document.querySelector(".buttom")
    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 500) {
            boton.style.display = "flex"
            boton.style.transition = "0.2s"
        }else {
            boton.style.display = "none"
        }
    })

let main = document.querySelector(".main")
let design = document.querySelector(".designs")

let letras = document.querySelectorAll(".subsub-ulli");

letras.forEach(ele => {
    ele.addEventListener("click", () => {
        if (ele.style.height !== "40px") {
            ele.style.height = "40px";
        } else {
            ele.style.height = "auto";
        }
        ele.style.transition = "0.5s";
    });
});

let submenu = document.querySelector(".subsub-menu")

let iconoMenu = document.querySelector(".menu")
let menuStick1 = document.querySelector(".span1")
let menuStick2 = document.querySelector(".span2")
let menuactive = true

iconoMenu.addEventListener("click", () => {
    menuStick1.classList.toggle("rotateX");
    menuStick2.classList.toggle("rotateY");
    letras.forEach(ele => {
            ele.style.height = "40px"
            ele.style.transition = "0.5s" 
        });

    if (menuactive) {
        submenu.style.transform = "translate(0)";
        submenu.style.display = "flex";
    } else {
        submenu.style.transform = "translate(-100%)";
        
    }
    menuactive = !menuactive; // Cambia el estado del menú
});
alert(window.innerWidth)
alert(window.innerHeight)
