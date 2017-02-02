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



if(bulbasaur>= 1) {
	setInterval(firstbonus,1000);
	}

if(charmander>= 1) {
	setInterval(secondbonus,1000);
	}

if(Squirtle>= 1) {
	setInterval(thirdbonus,1000);
	}
	
if(Pikachu>= 1) {
	setInterval(forthbonus,1000);
	}
	
if(Ratatta>= 1) {
	setInterval(fifthbonus,1000);
	}
	
if(Nidoran>= 1) {
	setInterval(sixthbonus,1000);
	}
	
if(Drantini>= 1) {
	setInterval(sevethbonus,1000);
	}
	
if(Arceus>= 1) {
	setInterval(lastbonus,1000);
	}
	
	// check how many pikachu
	// multiple pikachu * 10
	// add to i
	
	// caterpie
	
	//
	
function firstbonus() {
	
	if(bulbasaur>= 1) {
		var sum1 = bulbasaur*0.1;
		i+= sum1;
		}

}

function secondbonus() {
	
	if(charmander>= 1) {
		var sum2 = charmander*2;
		i+= sum2;
		}
	
	}
	
function thirdbonus() {
	
	if(Squirtle>= 1) {
		var sum3 = Squirtle*10;
		i+= sum3;
		}
	
	}
	
function forthbonus() {
	
	if(Pikachu>= 1) {
		var sum4 = Pikachu*20;
		i+= sum4;
		}
	
	}
	
function fifthbonus() {
	
	if(Ratatta>= 1) {
		var sum5 = Ratatta*50;
		i+= sum5;
		}
	
	}
	
function sixthbonus() {
	
	if(Nidoran>= 1) {
		var sum6 = Nidoran*70;
		i+= sum6;
		}
	
	}
	
function sevethbonus() {
	
	if(Drantini>= 1) {
		var sum7 = Drantini*100;
		i+= sum7;
		}
	
	}
	
function lastbonus() {
	
	if(Arceus>= 1) {
		var sum8 = Arceus*200;
		i+= sum8;
		}
	
	}