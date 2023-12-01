/*

código html a implementar:
<div id="habitsList">
				<div class="habitRow">
					<h3>Meditation</h3>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button>Delete</button>

				</div>
				<div class="habitRow">
					<h3>Journaling</h3>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					
				</div>
				<div class="habitRow">
					<h3>Pilates</h3>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					
				</div>
			</div>

*/

// Obtener la fecha actual
const fechaActual = new Date();

// Obtener el último día del mes actual
const ultimoDiaDelMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0);

// Obtener el número de días del mes actual
const cantidadDeDias = ultimoDiaDelMes.getDate();

console.log(`El mes actual tiene ${cantidadDeDias} días.`);



// Para agregar un nuevo hábito:

const addNewHabitButton = document.getElementById('addNewHabitButton');
const addNewHabitText = document.getElementById('addNewHabitText');

addNewHabitButton.addEventListener('click', function() {
	// Borro el mensaje de lista vacía si es necesario:
	const emptyListMessage = document.getElementById('emptyListMessage');
	if (emptyListMessage !== null) {
		emptyListMessage.remove();
		const habitList = document.createElement('div');
		habitList.id = 'habitList';
		habitsGrid.appendChild(habitList);
	}

	// Escondo el botón y el texto para agregar un nuevo hábito:	
	
	addNewHabitText.style.display = 'none';
	addNewHabitButton.style.display = 'none';
	// Muestro el campo para que el usuario escriba el nombre del hábito:
	contenedorCampo.style.display = 'block';
	
});

const guardarTexto = document.getElementById('guardarTexto');
const campoEntrada = document.getElementById('campoEntrada');
const habitsGrid = document.getElementById('habitsGrid');

guardarTexto.addEventListener('click', function() {

	// Vuelvo a mostrar el botón y el texto para agregar un nuevo hábito:
	addNewHabitText.style.display = 'block';
	addNewHabitButton.style.display = 'block';
	// Escondo el campo de nuevo:
	contenedorCampo.style.display = 'none';


    // Realizar acciones con el texto ingresado (en este caso, solo lo mostramos en la consola)
    //console.log('Texto ingresado:', textoIngresado);

	// Me traigo habitList:
	const habitList = document.getElementById('habitList');

	// Creo los elementos a agregar:
	const habitRow = document.createElement('div');
	habitRow.classList.add('habitRow');
	const habitName = document.createElement('h3');
	habitName.textContent = campoEntrada.value;
	campoEntrada.value = '';

	// Los agrego:
	
	habitList.appendChild(habitRow);
	habitRow.appendChild(habitName);

	// Creo y agrego los botones:
	for(let i = 0; i < cantidadDeDias; i++) {
		const gridButton = document.createElement('button');
		gridButton.classList.add('gridButton');
		habitRow.appendChild(gridButton);
	}

	habitRow.addEventListener('click', function(event) {
    // Verificar si el objetivo del evento es un botón
    if (event.target.classList.contains('gridButton')) {
      // Realizar acciones específicas cuando se hace clic en un botón
      console.log('Se hizo clic en un botón:', event.target.textContent);
      cambiarColor(event); 
    }
  });
});


function cambiarColor(event) {
	if(event.target.style.backgroundColor == 'whitesmoke') {
		event.target.style.backgroundColor = 'green'; 
	} else if (event.target.style.backgroundColor == 'green') {
		event.target.style.backgroundColor = 'red'; 
	} else if (event.target.style.backgroundColor == 'red') {
		event.target.style.backgroundColor = 'blue';
	} else {
		event.target.style.backgroundColor = 'whitesmoke';
	}
}

/*
const gridButtons = document.getElementsByClassName('gridButton');

for(let i = 0; i < gridButtons.length; i++) {
	gridButtons[i].addEventListener('click', function() {
		let hola = window.getComputedStyle(gridButtons[i]).backgroundColor;
		console.log(hola); 
		if(window.getComputedStyle(gridButtons[i]).backgroundColor == 'whitesmoke') 
		{
			gridButtons[i].style.backgroundColor = 'green';	
		} 
		else if(window.getComputedStyle(gridButtons[i]).backgroundColor == 'green') 
		{
			gridButtons[i].style.backgroundColor = 'red';	
		}
		else if(window.getComputedStyle(gridButtons[i]).backgroundColor == 'red')
		{
			gridButtons[i].style.backgroundColor = 'blue';
		} else {
			gridButtons[i].style.backgroundColor = 'whitesmoke';
		} 
	});
}
*/







	