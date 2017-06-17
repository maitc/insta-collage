function drag(ev) {
  console.log(ev.target.src);
  ev.dataTransfer.setData('text', ev.target.id);
}

function permitirDrop(ev){
  ev.preventDefault();
}
function drop(ev) {
  ev.preventDefault();
  var id_foto = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(id_foto));
}

/*no tengo mucha noción :( 
function validacion(){
	//botón
	var btn = document.getElementById("inicio");
	var user = document.getElementsByClassName("usr")[0].value;
	var contra = document.getElementsByClassName("pwdd")[0].value;

	btn.addEventListener("click", function(){
		function nombre(){
			if(user === ""){
				alert("Campo obligatorio");
				return false;
			}
		}
		/*function contrasenia(){
			if(contra === ""){
				alert("Campo obligatorio");
				return false;
			}
			if(contra.length < 6){
				alert("Contraseña debe tener al menos 6 caracteres");
				return false;
			}else{
				
			}
		}
		contrasenia();
	})
}
validacion();*/