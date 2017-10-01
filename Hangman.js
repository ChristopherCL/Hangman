var password = "TESTOWY TEST";
var hiddenPassword = "";
var mistakes = 0;

for(var i=0; i<password.length; i++) {
    hiddenPassword += password.charAt(i) == " " ? " " : "-"; 
}

function showPassword()
{
    document.getElementById("sentence").innerHTML = hiddenPassword.toUpperCase();
}

window.onload = start;

var letters = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŻŹ";

function showAlphabet() {
    var alphabet = "";
        for(var i=0; i<35; i++) {
            var letterId = "letter"+i;
            alphabet += ((i+1)%7 === 0) ?  '<div class="letter" onclick="checkLetter('+i+')" id="'+letterId+'">'+letters.charAt(i)+'</div><div style="clear:both"></div>'
                                        : '<div class="letter" onclick="checkLetter('+i+')" id="'+letterId+'">'+letters.charAt(i)+'</div>';
        }
    document.getElementById("alphabet").innerHTML = alphabet;
}

String.prototype.insertLetter = function(position, letter) {
    if(position > this.length -1) {
        return this.toString();
    }
    else {
        return this.substr(0, position) + letter + this.substr(position+1);
    }
}

function checkLetter(letterNumber) {
    var letterGuessed = false;
    for(var i=0; i<password.length; i++) {
        if(password.charAt(i) == letters.charAt(letterNumber)) {
            hiddenPassword = hiddenPassword.insertLetter(i, letters.charAt(letterNumber));
            letterGuessed = true;
        }
    }
    if(letterGuessed) {
        showPassword();
    }
    else {
        alert("zła litera");
        alert(++mistakes);
    }

    if(password == hiddenPassword) { alert("Wygrana");}
    if(mistakes > 10) {alert("Przegrana, za dużo pomyłek");}
}

function start() {
    showPassword();
    showAlphabet();
}
