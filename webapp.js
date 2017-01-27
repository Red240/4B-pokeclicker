// JavaScript Document

//This function below which is the buttonclick makes it so that the pokeclicker works and is spamable. It
var i = 0;
var pikachu = 0;
var caterpie = 0;
var charmander = 0;

function buttonClick() {
	document.getElementById('inc').value = ++i;
}

function shop(pokemon) {
	switch(pokemon) {
		case "pikachu":
			if(i>=40) {		
				pikachu++;
				i-=40;
			}
		case "caterpie":
			if(i>=10) {
				caterpie++;
				i-=10;
			
			}
	}
}



if(caterpie>= 1) {
	
setInterval(bonus,1000)
	
	}
	
function bonus() {
	// check how many pikachu
	// multiple pikachu * 10
	// add to i
	
	// caterpie
	
	//
	
}