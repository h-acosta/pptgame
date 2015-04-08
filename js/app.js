
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
				 $("#resultado").html(" <span>Resultado: " + result + "</span> <p>Cumputadora selecciono: " + opciones[opcionMaquina] + " </p> <p>Tu seleccionaste: " + opciones[opcionUsuario] + "</p> </br>");
			}

			function getImage(){
  				  var giphyAPI ="http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=clap";
 				 $.getJSON( giphyAPI, {
  					  format: "json"
  					})
    			  .done(function( data ) {
      				   $( "<img height='200' width='200'>" ).attr( "src", data.data.image_url ).appendTo( "#image" );
        			});
			}

			if(opcionUsuario == piedra)
			{
				if (opcionMaquina == piedra) 
				{
			            resultadoJuego("Enpate!");
				}
				else if (opcionMaquina == papel) 
				{
						getImage("sad");
			            resultadoJuego("Perdiste :(");
				}
				else if (opcionMaquina == tijera) 
				{
			            getImage("clap");
			            resultadoJuego("Ganaste!");
				}
			}
			else if(opcionUsuario == papel)
			{
					if (opcionMaquina == piedra) 
				{
			           getImage();
			           resultadoJuego("Ganaste!");
				}
				else if (opcionMaquina == tijera) 
				{
			            resultadoJuego("Perdiste:(");
				}
				else if (opcionMaquina == papel) 
				{
			            resultadoJuego("Enpate!");
				}
			}

			else if(opcionUsuario == tijera)
			{
					if (opcionMaquina == papel) 
				{
						getImage();
			            resultadoJuego("Ganaste!");
				}
				else if (opcionMaquina == piedra) 
				{
			            resultadoJuego("Perdiste :(");
				}
				else if (opcionMaquina == tijera) 
				{
			            resultadoJuego("Enpate!");
				}
			} 
        });

    });


