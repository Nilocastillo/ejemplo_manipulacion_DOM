const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.getElementsByClassName(".parrafito");
const pid = document.getElementById("pid");
const input = document.querySelector("input");

console.log(input.value);
console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});
h1.innerHTML = "patito <br> Feo"; //  convierte a html permite modificar el html que este dentro de la etiqueta y tambien podemos poner etiquetas html
h1.innerText = "patito <br> Feo"; // convierte a texto para poner como texto para protegerse de los hack

//h1.getAttribute ('') //leer alguno de los atributos que tiene nuestro elemento
//console.log(h1.getAttribute ('class'))
//h1.setAttribute //sirve para modificar clases
//console.log(h1.setAttribute('class', 'rojo'))

//para modificar clases especificamente se usa
h1.classList.add("rojo"); // añadir clases
h1.classList.remove("titulo"); // remover clases
// toggle para eventos quita o pone clases dependiendo cada vez que se ejecute
//contains devuelve true o false dependiendo que si tiene o no la clase el elemento

input.value = "valores";

//crear elementos desde 0
/*document.createElement('img'); */

const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://st.depositphotos.com/1956729/1857/i/950/depositphotos_18572119-stock-photo-approach-to-celestia-prime.jpg"
);

pid.innerHTML = ""; //borra el contenido que tiene
pid.append(img); //insertar dentro de un contenedor despues del contenido
