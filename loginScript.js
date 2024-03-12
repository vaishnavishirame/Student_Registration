let username = document.getElementById("un");
let password = document.getElementById("pass");

function login(argument) {
	username = username.value;
	password = password.value;

	let userData = JSON.parse(localStorage.getItem("userdetails"));

	if ((username === userData.un) && (password===userData.pass)&& un!="" && pass!="") {
		open("index.html"," _self");
	}
	else{
		alert("INVALID CREDENTIALS");
	}
}