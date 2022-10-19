/* document.body.children[1].children[0].href = 'https://google.com'; */

/* 
console.dir(document);
alert();
window.alert(); 
*/

document.getElementById('some-id') //seleccione un elemento HTML por su ID (selecciona solo un elemento, ya que las ID deben ser únicas)

document.querySelector('<some-css-selector>') //Selecciona el primer elemento HTML coincidente (!) que cumple/selecciona el selector de CSS provisto; El selector de CSS puede ser básicamente cualquier tipo de selector de CSS válido (por ejemplo, selector de ID, selector de tipo de etiqueta, selector de clase, selectores combinados, etc.)

document.querySelectorAll('<some-css-selector>') //selecciona TODOS los elementos HTML coincidentes que se cumplen/seleccionan mediante el selector de CSS proporcionado

document.getElementsByClassName('some-css-class') //selecciona todos los elementos HTML que tienen la clase CSS proporcionada

document.getElementsByTagName('tag') //selecciona todos los elementos HTML que son del tipo de etiqueta HTML proporcionado

let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';

anchorElement = document.querySelector('p a');
anchorElement.href = 'https://academind.com';