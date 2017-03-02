// JavaScript Document

//These are the variables for the number of pokeballs and the pokemon.
var pokeballs = 0;
var greatballs = 0;
var ultraballs = 0;

var bulbasaur = 0;
var charmander = 0;
var Squirtle = 0;
var Pikachu = 0;
var Ratatta= 0;
var Nidoran = 0;
var Drantini = 0;
var Arceus = 0;

//COOKIES

function save_cookies() {
	var d = new Date();
	d.setTime(d.getTime() + (120*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	
	document.cookie = "pokeballs=" + pokeballs + "; " + expires;
	document.cookie = "greatballs=" + greatballs + "; " + expires;
	document.cookie = "ultraballs=" + ultraballs + "; " + expires;
	document.cookie = "bulbasaur=" + bulbasaur + "; " + expires;
	document.cookie = "charmander=" + charmander + "; " + expires;
	document.cookie = "Squirtle=" + Squirtle + "; " + expires;
	document.cookie = "Pikachu=" + Pikachu + "; " + expires;
	document.cookie = "Ratatta=" + Ratatta + "; " + expires;
	document.cookie = "Nidoran=" + Nidoran + "; " + expires;
	document.cookie = "Drantini=" + Drantini + "; " + expires;
	document.cookie = "Arceus=" + Arceus + "; " + expires;
}

function load_cookies() {
	alert(document.cookie);
}


//This function updates the button clicks and the bonus so that the pokeballs are added to the dispaly smoothly.
function update() {
	document.getElementById("numberofpokeballs").value = Math.round(10*pokeballs)/10;
}
 
 
//This function below which is the buttonclick makes it so that the pokeclicker works and is spamable.  It also hase a Math.round that makes it so it rounds the value of the pokeballs to the nearest tenth.
function buttonClick() {
	pokeballs++;
	greatballbonus();
	ultraballbonus();
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
			if(pokeballs>=1500) {
				Squirtle++;
				pokeballs-=1500;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Pikachu":
			if(pokeballs>=14200) {
				Pikachu++;
				pokeballs-=14200;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Ratatta":
			if(pokeballs>=25500) {
				Ratatta++;
				pokeballs-=25500;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Nidoran":
			if(pokeballs>=100000) {
				Nidoran++;
				pokeballs-=100000;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Drantini":
			if(pokeballs>170000) {
				Drantini++;
				pokeballs-=170000;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Arceus":
			if(pokeballs>=10000000) {
				Arceus++;
				pokeballs-=10000000;
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
			case "Ultraball":
			if(pokeballs>=15000) {
				ultraballs++;
				pokeballs-=15000;
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
	
		pokeballs+= charmander * 3;

		pokeballs+= Squirtle * 31;
		
		pokeballs+= Pikachu * 320;
		
		pokeballs+= Ratatta * 650;
		
		pokeballs+= Nidoran * 2200;
		
		pokeballs+= Drantini * 3500;
		
		pokeballs+= Arceus * 52420;
		
		update();
		
		clickspersecond();
}
//This is the clicks per second function. This tells you how many clicks per second you get with your pokemon.
function clickspersecond() {
	
	document.getElementById("numberofclicks").value = Math.round( 10 *[(bulbasaur * 0.2) + (charmander * 3) + (Squirtle * 31) + (Pikachu * 320) + ( Ratatta * 650) + (Nidoran * 2200) + (Drantini * 3500) + (Arceus * 52420)] )/10;
	
}

//OTHER TYPES OF POKEBALLS

//This function adds three to the number of poke balls you make when you click. For example when you click the pokeball you will only get 1 pokeball per click. With a single great ball though, it will bring your clicks on the pokeball to 4 per click becuase it adds 3.
function greatballbonus () {
	pokeballs+= greatballs*3;
	}
function ultraballbonus () {
	pokeballs+= ultraballs*100;
}