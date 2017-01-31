// JavaScript Document

//This function below which is the buttonclick makes it so that the pokeclicker works and is spamable. It
var i = 0;
var caterpie = 0;
var charmander = 0;
var pichu = 0;
var teping = 0;
var Piplupf = 0;
var oshawatt = 0;
var Reshiram = 0;
var Arceus = 0;

function buttonClick() {
	document.getElementById('inc').value = ++i;
}

function shop(pokemon) {
	prompt("what pokemon would you like to buy. 1 for caterpie, 2 for Charmander, 3 for pichu, 4, for teping, 5 for Piplupf, 6 for oshawatt, 7 for Reshiram, and 8 for Arceus.");
	switch(pokemon) {
		case "pikachu":
			if(i>=40) {		
				pikachu++;
				i-=40;
			}
			break;
		case "caterpie":
			if(i>=10) {
				caterpie++;
				i-=10;
			}
			break;
			
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