function start(){
	var container = document.getElementById("container");
    while (container.childNodes.length > 0){
	if (container.getElementsByTagName("section")[0]==container.firstChild){
	    view[view.length] = container.removeChild(container.firstChild);
	}
	else container.removeChild(container.firstChild);
    }
}

/*muestra la sección del parámetro page y oculta el resto*/
function show(page){
	var container = document.getElementById("container");
    if (container.childNodes.length==0){
		container.appendChild(view[page]);
    }
	else{
		container.replaceChild(view[page], container.childNodes[0]); 
	}
}

/*superpone la sección del parámetro page sobre la actual*/
function overlap(page){
	var container = document.getElementById("container");
	container.appendChild(view[page]);
	view[page].style.display = "block";
}

/* 
** oculta la sección actual
** usar solo en secciones superpuestas (con la función overlap)
*/
function close_text(page){
	view[page].style.display = "none";
	var container = document.getElementById("container");
	container.removeChild(view[page]);
}

window.onload = function(){
	view = [];
	start();
	show(0);
}
