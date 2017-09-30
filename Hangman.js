var password = "testowy test";
var hiddenPassword = "";

for(var i=0; i<password.length; i++) {
	hiddenPassword += password.charAt(i) == " " ? " " : "-"; 
}

function showPassword()
{
	document.getElementById("sentence").innerHTML = hiddenPassword.toUpperCase();
}

window.onload = start;

function showAlphabet() {
	var alphabet = "";
	for(var i=1; i<36; i++) {
		alphabet += (i%7 === 0) ?  '<div style="clear:both"></div>' : '<div class="letter">a</div>';
	}
	document.getElementById("alphabet").innerHTML = alphabet;
}

function start() {
	showPassword();
	showAlphabet();
}