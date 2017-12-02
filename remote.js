function getRemoteAddress(){
	return "http://" + document.getElementById("remoteAddress").value;
}

function upButton(){
	httpRequest = new XMLHttpRequest();
	var requestURI = getRemoteAddress() + "/?up=1";
	httpRequest.open("get", requestURI, true);
	httpRequest.send();
}

function downButton(){
	httpRequest = new XMLHttpRequest();
	var requestURI = getRemoteAddress() + "/?down=1";
	httpRequest.open("get", requestURI, true);
	httpRequest.send();
}

function enterButton(){
	httpRequest = new XMLHttpRequest();
	var requestURI = getRemoteAddress() + "/?select=true";
	httpRequest.open("get", requestURI, true);
	httpRequest.send();
}

function sendText(){
	httpRequest = new XMLHttpRequest();
	var requestURI = getRemoteAddress() + "/?text=" + document.getElementById("keyboardInput").value;
	httpRequest.open("get", requestURI, true);
	httpRequest.send();
	closeKeyboard();
}

function returnHome(){
	httpRequest = new XMLHttpRequest();
	var requestURI = getRemoteAddress() + "/?home=true";
	httpRequest.open("get", requestURI, true);
	httpRequest.send();
}

function openKeyboard(){
	document.getElementById("keyboardModal").classList.add("is-active");
}

function closeKeyboard(){
	document.getElementById("keyboardModal").classList.remove("is-active");
}