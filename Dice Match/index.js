//8. Simple dice run (pseudorandom numbers).

function removeDices() {
	for (var i=1;i<=6;i++){
		document.querySelector("#Player1").children.item(i).classList.add("displayNone");
		document.querySelector("#Player2").children.item(i).classList.add("displayNone");
	}
}
removeDices();

var diceValues = [];
function rollDices() {
	var n1 = Math.random()*6;
	var n2 = Math.random()*6;
	n1 = Math.floor(n1)+1;
	n2 = Math.floor(n2)+1;
	document.querySelector("#Player1").children.item(n1).classList.remove("displayNone");
	document.querySelector("#Player2").children.item(n2).classList.remove("displayNone");
	return diceValues = [n1,n2]
}
rollDices();

function whosWinner(){	
	if((diceValues[0]===diceValues[1])){
		document.querySelector("h1").textContent="Draw!";
	}
	else if(diceValues[0]>diceValues[1]){
			document.querySelector("h1").textContent="🚩 Player 1 is the winner";
	}
	else if(diceValues[0]<diceValues[1]){
			document.querySelector("h1").textContent="Player 2 is the winner 🚩";
	}
}
whosWinner();



