const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result')

form.addEventListener('submit', sumarInputValues);
// nombre del evento que queremos ejecutar, código Javascript que queremos llamar 

function sumarInputValues(event) {
    // console.log({event});
    event.preventDefault();
    // Esto hace que no se realice la acción preventiva del botón submit en un formulario: enviar a otra página
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
    // Para que escriba los resultados en la página.
}