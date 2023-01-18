function compartir (linkcompartir) {

	navigator.permissions.query({ name: "clipboard-write" }).then(
		(result) => {
			if (result.state == "granted" || result.state == "prompt") {
				
				var copyText = document.getElementById('linkcompartir').innerHTML;
					navigator.clipboard.writeText(copyText).then(() => {
					alert("Se ha copiado en Clipboard:" + "  " + copyText);
    			});
			
			} else {
				alert("Su navigator no admite Clipboard");	
		}
	});
}
// Se ha adaptado el código de la ref para copiar en el portapapeles el elemento que contiene la dir web y visualizarlo con un alert.
// https://stackabuse.com/how-to-copy-to-clipboard-in-javascript-with-the-clipboard-api/