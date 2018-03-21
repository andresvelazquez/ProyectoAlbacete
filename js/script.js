function start(){
	$("section").hide();
	$("#menu").show();
}

function change(id1,id2){
	$(id1).hide();
	$(id2).show();
}

function overlap(id){
	$(id).toggle();
}

window.onload = function(){
	view = [];
	start();
}
