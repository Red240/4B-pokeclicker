// JavaScript Document

//These are the variables for the number of pokeballs and the pokemon.
var pokeballs = 0;
var greatballs = 0;

var bulbasaur = 0;
var charmander = 0;
var Squirtle = 0;
var Pikachu = 0;
var Ratatta= 0;
var Nidoran = 0;
var Drantini = 0;
var Arceus = 0;


//This function updates the button clicks and the bonus so that the pokeballs are added to the dispaly smoothly.
function update() {
	document.getElementById("numberofpokeballs").value = Math.round(10*pokeballs)/10;
}
 
 
//This function below which is the buttonclick makes it so that the pokeclicker works and is spamable.  It also hase a Math.round that makes it so it rounds the value of the pokeballs to the nearest tenth.
function buttonClick() {
	pokeballs++;
	greatballbonus();
	update();
}


//This is the shop. This makes it so that when you click the button for the pokemon it starts the code in the corresponding case. It is also used to by other ball types like Greatball.
function shop(pokemon) {
	
	switch(pokemon) {
		
		case "bulbasaur":
			if(pokeballs>=10) {
				bulbasaur++;
				pokeballs-=10;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "charmander":
			if(pokeballs>=100) {
				charmander++;
				pokeballs-=100;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Squirtle":
			if(pokeballs>=1000) {
				Squirtle++;
				pokeballs-=1000;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Pikachu":
			if(pokeballs>=10000) {
				Pikachu++;
				pokeballs-=10000;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Ratatta":
			if(pokeballs>=20000) {
				Ratatta++;
				pokeballs-=20000;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Nidoran":
			if(pokeballs>=40000) {
				Nidoran++;
				pokeballs-=40000;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Drantini":
			if(pokeballs>=100000) {
				Drantini++;
				pokeballs-=100000;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Arceus":
			if(pokeballs>=1000000) {
				Arceus++;
				pokeballs-=1000000;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Greatball":
			if(pokeballs>=500) {
				greatballs++;
				pokeballs-=500;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;	
		default:
			alert("Please collect more pokeballs.");
			break;
				
			
	}
}


//This is the setInterval that makes it so that the pokemon add pokeballs over time. It does this by activating the bonus function.
	setInterval(bonus,1000);

	
//This function is the bonus function that controlls how many pokeballs you get per second base on the number of pokemon you have.
function bonus() {
	
		pokeballs+= bulbasaur * 0.2;
	
		pokeballs+= charmander * 5;

		pokeballs+= Squirtle * 25;
		
		pokeballs+= Pikachu * 50;
		
		pokeballs+= Ratatta * 80;
		
		pokeballs+= Nidoran * 200;
		
		pokeballs+= Drantini * 400;
		
		pokeballs+= Arceus * 10000;
		
		update();
		
		clickspersecond();
}
//This is the clicks per second function. This tells you how many clicks per second you get with your pokemon.
function clickspersecond() {
	
	document.getElementById("numberofclicks").value = Math.round( 10 *[(bulbasaur * 0.2) + (charmander * 5) + (Squirtle * 25) + (Pikachu * 50) + ( Ratatta * 80) + (Nidoran * 200) + (Drantini * 400) + (Arceus * 10000)] )/10;
	
}

//OTHER TYPES OF POKEBALLS

function greatballbonus () {
	pokeballs+= greatballs*3;
	}