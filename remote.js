function getRemoteAddress(){
	var inputValue = document.getElementById("remoteAddress").value;
	if (inputValue){
		return "http://" + document.getElementById("remoteAddress").value;
	} else {
		return "http://192.168.0.100:8080"; //most likely address
	}
}

function SnappyCommand(command) {
	httpRequest = new XMLHttpRequest();
	httpRequest.open("get", getRemoteAddress() + "/?snappycommand=" + command);
	httpRequest.send();
}

function OmxCommand(command) {
	httpRequest = new XMLHttpRequest();
	httpRequest.open("get", getRemoteAddress() + "/?omxcommand=" + command);
	httpRequest.send();
}

function sendText(){
	httpRequest = new XMLHttpRequest();
	var requestURI = getRemoteAddress() + "/?text=" + document.getElementById("keyboardInput").value;
	httpRequest.open("get", requestURI, true);
	httpRequest.send();
	toggleKeyboard();
}

function toggleKeyboard() {
	document.getElementById("keyboardModal").classList.toggle("is-active");
}