// JavaScript Document

//This function below which is the buttonclick makes it so that the pokeclicker works and is spamable. It
var pokeballs = 0;
var bulbasaur = 0;
var charmander = 0;
var Squirtle = 0;
var Pikachu = 0;
var Ratatta= 0;
var Nidoran = 0;
var Drantini = 0;
var Arceus = 0;

function buttonClick() {
	document.getElementById('numberofpokeballs').value = ++pokeballs;
}

function shop(pokemon) {
	
	switch(pokemon) {
		
		case "bulbasaur":
			if(pokeballs>=10) {
				bulbasaur++;
				pokeballs-=10;
			}
			break;
		case "charmander":
			if(pokeballs>=100) {
				charmander++;
				pokeballs-=100;
			}
			break;
		case "Squirtle":
			if(pokeballs>=1000) {
				Squirtle++;
				pokeballs-=1000;
			}
			break;
		case "Pikachu":
			if(pokeballs>=10000) {
				Pikachu++;
				pokeballs-=10000;
			}
			break;
		case "Ratatta":
			if(pokeballs>=20000) {
				Ratatta++;
				pokeballs-=20000;
			}
			break;
		case "Nidoran":
			if(pokeballs>=40000) {
				Nidoran++;
				pokeballs-=40000;
			}
			break;
		case "Drantini":
			if(pokeballs>=100000) {
				Drantini++;
				pokeballs-=100000;
			}
			break;
		case "Arceus":
			if(pokeballs>=1000000) {
				Arceus++;
				pokeballs-=1000000;
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
	
		pokeballs+= bulbasaur * 0.1;
	
		pokeballs+= charmander * 2;

		pokeballs+= Squirtle * 10;
		
		pokeballs+= Pikachu * 20;
		
		pokeballs+= Ratatta * 50;
		
		pokeballs+= Nidoran * 70;
		
		pokeballs+= Drantini * 100;
		
		pokeballs+= Arceus * 200;
}