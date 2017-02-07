// JavaScript Document

//This function below which is the buttonclick makes it so that the pokeclicker works and is spamable. It
var i = 0;
var bulbasaur = 0;
var charmander = 0;
var Squirtle = 0;
var Pikachu = 0;
var Ratatta= 0;
var Nidoran = 0;
var Drantini = 0;
var Arceus = 0;

function buttonClick() {
	document.getElementById('inc').value = ++i;
}

function shop(pokemon) {
	
	switch(pokemon) {
		
		case "bulbasaur":
			if(i>=10) {
				bulbasaur++;
				i-=10;
			}
			break;
		case "charmander":
			if(i>=100) {
				charmander++;
				i-=100;
			}
			break;
		case "Squirtle":
			if(i>=1000) {
				Squirtle++;
				i-=1000;
			}
			break;
		case "Pikachu":
			if(i>=10000) {
				Pikachu++;
				i-=10000;
			}
			break;
		case "Ratatta":
			if(i>=20000) {
				Ratatta++;
				i-=20000;
			}
			break;
		case "Nidoran":
			if(i>=40000) {
				Nidoran++;
				i-=40000;
			}
			break;
		case "Drantini":
			if(i>=100000) {
				Drantini++;
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
			alert("Please collect more pokeballs.");
			break;
				
			
	}
}



	setInterval(bonus,1000);

	
	// check how many pikachu
	// multiple pikachu * 10
	// add to i
	
	// caterpie
	
	//
	
function bonus() {
	
		i+= bulbasaur * 0.1;
	
		i+= charmander * 2;

		i+= Squirtle * 10;
		
		i+= Pikachu * 20;
		
		i+= Ratatta * 50;
		
		i+= Nidoran * 70;
		
		i+= Drantini * 100;
		
		i+= Arceus * 200;
}