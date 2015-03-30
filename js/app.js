    $(document).ready(function() {
    	var piedra = 0;
		var papel = 1;
		var tijera = 2;
		var opciones = ["Piedra","Papel","Tijeras"];
        var opcionUsuario;
        $("#procesar").click(function(){
		
        var opcionMaquina = aleatorio(0,2);
        var selected = $("input[type='radio'][name='userOption']:checked");
		if (selected.length > 0) {
		    opcionUsuario = selected.val();
		}

		function aleatorio(minimo, maximo)
		{
		   var numero = Math.floor( Math.random() * (maximo - minimo +1) +minimo);
		   return numero;
		}

		console.log(opcionUsuario);
		if(opcionUsuario == piedra)
		{
			if (opcionMaquina == piedra) 
			{
		            alert("Enpate!");
			}
			else if (opcionMaquina == papel) 
			{
		            alert("Perdiste :(");
			}
			else if (opcionMaquina == tijera) 
			{
		            alert("Ganaste!");
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




// opcionUsuario = prompt("Que eliges?\nPiedra: 0\nPapel: 1\nTijera: 2",0);
     
//alert("Elegiste " + opciones[opcionUsuario])
//alert("Javasript eligio " + opciones[opcionMaquina])


