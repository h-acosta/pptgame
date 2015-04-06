
    $(document).ready(function() {
    	var piedra = 0;
		var papel = 1;
		var tijera = 2;
		var opciones = ["Piedra","Papel","Tijeras"];
        var opcionUsuario;

        $("#procesar").click(function(){
        	
	        var opcionMaquina = aleatorio(1,3);
	        var selected = $("input[type='radio'][name='userOption']:checked");
			if (selected.length > 0) {
			    opcionUsuario = selected.val();
			}

			function aleatorio(minimo, maximo)
			{
			   var numero = Math.floor( Math.random() * (maximo - minimo +1) +minimo);
			   return numero;
			}
			
			function resultadoJuego(result){
				 $("#resultado").html(" <span>Resultado: " + result + "</span> <p>Cumputadora selecciono: " + opciones[opcionMaquina] + " </p> <p>Tu seleccionaste: " + opciones[opcionUsuario] + "</p>");
			}

			if(opcionUsuario == piedra)
			{
				if (opcionMaquina == piedra) 
				{

			            resultadoJuego("Enpate!");
				}
				else if (opcionMaquina == papel) 
				{
			            resultadoJuego("Perdiste :(");
				}
				else if (opcionMaquina == tijera) 
				{
			            resultadoJuego("Ganaste!");
				}
			}
			else if(opcionUsuario == papel)
			{
					if (opcionMaquina == piedra) 
				{
			            alert("Ganaste!");
				}
				else if (opcionMaquina == tijera) 
				{
			            alert("Perdiste:(");
				}
				else if (opcionMaquina == papel) 
				{
			            alert("Enpate!");
				}
			}

			else if(opcionUsuario == tijera)
			{
					if (opcionMaquina == papel) 
				{
			            alert("Ganaste!");
				}
				else if (opcionMaquina == piedra) 
				{
			            alert("Perdiste :(");
				}
				else if (opcionMaquina == tijera) 
				{
			            alert("Enpate!");
				}
			} 
        });

    });


