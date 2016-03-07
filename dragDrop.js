var paintElement = document.getElementById('paint');
var returnElement = document.getElementById('all');
function allowDrop(ev) {
    ev.preventDefault();
    console.log(ev.target.id);
}

function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
}

function dropall(ev){
	console.log("return");
	ev.preventDefault();
    var data = ev.dataTransfer.getData("id");
    returnElement.appendChild(document.getElementById(data));
}

function drop(ev) {
	console.log("drop");
	//check if no other div already in paint section
	console.log(paintElement.querySelectorAll(".border").length);
	if(!paintElement.querySelectorAll("#paint .border").length){
	    ev.preventDefault();
	    var data = ev.dataTransfer.getData("id");
	    paintElement.appendChild(document.getElementById(data));
	}
}

function applyColor(){
	target = paintElement.querySelectorAll(".border")[0];
	var brdcol = document.getElementById('borcol').value;
	var borthick = document.getElementById('borthick').value;
	var bgcol = document.getElementById('bgcolor').value;
	var roundedged = document.getElementById('roundedged').value;

	target.style.borderColor = brdcol;
	target.style.borderWidth = borthick + 'px';
	target.style.backgroundColor  = bgcol;
	target.style.borderRadius = roundedged + 'px';
}
