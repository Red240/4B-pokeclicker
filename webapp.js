// JavaScript Document

//This function below which is the buttonclick makes it so that the pokeclicker works and is spamable. It
var i = 0;
var caterpie = 0;
var charmander = 0;
var pichu = 0;
var tepig = 0;
var Piplup= 0;
var oshawatt = 0;
var Reshiram = 0;
var Arceus = 0;

function buttonClick() {
	document.getElementById('inc').value = ++i;
}

function shop(pokemon) {
	
	switch(pokemon) {
		
		case "caterpie":
			if(i>=10) {
				caterpie++;
				i-=10;
			}
			break;
		case "charmander":
			if(i>=100) {
				charmander++;
				i-=100;
			}
			break;
		case "pichu":
			if(i>=1000) {
				pichu++;
				i-=1000;
			}
			break;
		case "tepig":
			if(i>=10000) {
				tepig++;
				i-=10000;
			}
			break;
		case "Piplup":
			if(i>=20000) {
				Piplup++;
				i-=20000;
			}
			break;
		case "oshawatt":
			if(i>=40000) {
				oshawatt++;
				i-=40000;
			}
			break;
		case "Reshiram":
			if(i>=100000) {
				Reshiram++;
				i-=100000;
			}
			break;
		case "Arceus":
			if(i>=1000000) {
				Arceus++;
				i-=1000000;
			}
			break;
		default:
			alert("press a button with vaild input.");
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