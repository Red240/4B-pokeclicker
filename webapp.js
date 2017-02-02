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
			alert("Please collect more pokeballs.");
			break;
				
			
	}
}



if(caterpie>= 1) {
	setInterval(firstbonus,1000);
	}

if(charmander>= 1) {
	setInterval(secondbonus,1000);
	}

if(pichu>= 1) {
	setInterval(thirdbonus,1000);
	}
	
if(tepig>= 1) {
	setInterval(forthbonus,1000);
	}
	
if(Piplup>= 1) {
	setInterval(fifthbonus,1000);
	}
	
if(oshawatt>= 1) {
	setInterval(sixthbonus,1000);
	}
	
if(Reshiram>= 1) {
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
	
	if(caterpie>= 1) {
		var sum1 = caterpie*0.1;
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
	
	if(pichu>= 1) {
		var sum3 = pichu*10;
		i+= sum3;
		}
	
	}
	
function forthbonus() {
	
	if(tepig>= 1) {
		var sum4 = tepig*20;
		i+= sum4;
		}
	
	}
	
function fifthbonus() {
	
	if(Piplup>= 1) {
		var sum5 = Piplup*50;
		i+= sum5;
		}
	
	}
	
function sixthbonus() {
	
	if(oshawatt>= 1) {
		var sum6 = oshawatt*70;
		i+= sum6;
		}
	
	}
	
function sevethbonus() {
	
	if(Reshiram>= 1) {
		var sum7 = Reshiram*100;
		i+= sum7;
		}
	
	}
	
function lastbonus() {
	
	if(Arceus>= 1) {
		var sum8 = Arceus*200;
		i+= sum8;
		}
	
	}