//Genera un número aleatorio entre un rango de enteros
function aleatorio(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4

var opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];

var opcionUsuario;
var opcionMaquina = aleatorio(0,4);


opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\nlagarto: 3\nspock: 4", 0);

alert("Elegiste " + opciones[opcionUsuario] + "!!!");
alert("La maquina eligió " + opciones[opcionMaquina] + "!!!");

var respuesta = ["Ganaste Wiiii!!", "Empate O.o", "Perdiste Buuuu!!"];
var explicacion =[
"Las Tijeras cortan el Papel", 
"El Papel cubre a la Piedra", 
"La piedra aplasta a el Lagarto", 
"El Lagarto envenena a Spock", 
"Spock destroza las Tijeras", 
"las Tijeras decapitan al Lagarto", 
"El Lagarto se come el Papel", 
"El Papel Refuta a Spock", 
"Spock vaporiza la Piedra", 
"la piedra aplasta las tijeras"]

if(opcionUsuario == piedra)
{
	if(opcionMaquina == piedra)
	{
		alert(respuesta[1]);
	}
	else if(opcionMaquina == papel)
	{
		alert(explicacion[1] + ", " + respuesta[2]);
	}
	else if(opcionMaquina == tijera)
	{
		alert(explicacion[9] + ", " + respuesta[0]);
	}
	else if(opcionMaquina == lagarto)
	{
		alert(explicacion[2] + ", " + respuesta[0]);
	}
	else if(opcionMaquina == spock)
	{
		alert(explicacion[8] + ", " + respuesta[2]);
	}
}	
else if(opcionUsuario == papel)
{
	if(opcionMaquina == piedra)
	{
		alert(explicacion[1] + ", " + respuesta[0]);
	}
	else if(opcionMaquina == papel)
	{
		alert(respuesta[1]);
	}
	else if(opcionMaquina == tijera)
	{
		alert(explicacion[0] + ", " + respuesta[2]);
	}
	else if(opcionMaquina == lagarto)
	{
		alert(explicacion[6] + ", " + respuesta[2]);
	}
	else if(opcionMaquina == spock)
	{
		alert(explicacion[7] + ", " + respuesta[0]);
	}
}	
else if(opcionUsuario == tijera)
{
	if(opcionMaquina == piedra)
	{
		alert(explicacion[9] + ", " + respuesta[2]);
	}
	else if(opcionMaquina == papel)
	{
		alert(explicacion[0] + ", " + respuesta[0]);
	}
	else if(opcionMaquina == tijera)
	{
		alert(respuesta[1]);
	}
	else if(opcionMaquina == lagarto)
	{
		alert(explicacion[5] + ", " + respuesta[0]);
	}
	else if(opcionMaquina == spock)
	{
		alert(explicacion[4] + ", " + respuesta[2]);
	}
}	
else if(opcionUsuario == lagarto)
{
	if(opcionMaquina == piedra)
	{
		alert(explicacion[2] + ", " + respuesta[2]);
	}
	else if(opcionMaquina == papel)
	{
		alert(explicacion[6] + ", " + respuesta[0]);
	}
	else if(opcionMaquina == tijera)
	{
		alert(explicacion[5] + ", " + respuesta[2]);
	}
	else if(opcionMaquina == lagarto)
	{
		alert(respuesta[1]);
	}
	else if(opcionMaquina == spock)
	{
		alert(explicacion[3] + ", " + respuesta[0]);
	}
}	
else if(opcionUsuario == spock)
{
	if(opcionMaquina == piedra)
	{
		alert(explicacion[8] + ", " + respuesta[0]);
	}
	else if(opcionMaquina == papel)
	{
		alert(explicacion[7] + ", " + respuesta[2]);
	}
	else if(opcionMaquina == tijera)
	{
		alert(explicacion[4] + ", " + respuesta[0]);
	}
	else if(opcionMaquina == lagarto)
	{
		alert(explicacion[3] + ", " + respuesta[2]);
	}
	else if(opcionMaquina == spock)
	{
		alert(respuesta[1]);
	}	
}
else
{
	alert("¿pero que caraj...");
}