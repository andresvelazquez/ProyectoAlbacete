function start(){
	var container = document.getElementById("container");
    while (container.childNodes.length > 0){
	if (container.getElementsByTagName("div")[0]==container.firstChild){
	    view[view.length] = container.removeChild(container.firstChild);
	}
	else container.removeChild(container.firstChild);
    }
}

function show(counter){
	var container = document.getElementById("container");
    if (container.childNodes.length==0){
		container.appendChild(view[counter]);
    }
	else{
		container.replaceChild(view[counter], container.childNodes[0]); 
	}
}

window.onload = function(){
	view = [];
	start();
	show(0);
}
