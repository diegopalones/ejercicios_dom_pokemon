

let pok = document.querySelector(".infocard");
console.log(pok);

// Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

let newTittle = document.querySelector("#gen-1");
newTittle.textContent = "Generasión 1 pokimon";

// Cambia el color de fondo de la primera generación de Pokimon.


let cambiaColor = document.querySelector(".infocard-list-pkmn-lg");
cambiaColor.style.background = "red";

// Imprime por consola la URL de la página.

let url = document.location.href;
console.log(url);

// Imprime por consola el dominio de la página.

let domin = document.location.hostname;
console.log(domin);

// Imprime todos los nodos de imagen.

let allImages = document.querySelectorAll("img");
console.log(allImages);

// Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

for (let i = 0; i < allImages.length; i++) {
    allImages[i].setAttribute(
      "src",
      "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
    );
  }

