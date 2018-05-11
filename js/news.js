window.alert ("Page Loaded!!");

document.getElementById("boton").onclick=function()
{
	alert("hola ");
	url:'https://github.com/Pimpollo21/pruebasmejores2/blob/master/data/1.json',
	type:'POST',
	dataType:'JSON',
	success:function(data)
	{
		var cabeceranoticia = data.cabecera1;
	}

	alert("El resultado es: " + cabeceranoticia);

	
}



