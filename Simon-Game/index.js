//NEED REFACTORING!
var colorMemory = [];
var colorClick = [];

var level = 0;


//Detecting Button Press

var numberOfColorButtons = $(".btn").length;

for (var i = 0; i < numberOfColorButtons; i++) {


	document.querySelectorAll(".btn")[i].addEventListener("click", function(event) {
	
		var buttonId = this.id;


		makeSound(buttonId);
		buttonAnimation(buttonId); //first random color
		

		colorClick.push(buttonId);
		colorCheck(colorClick.length-1);

    });
};



//Detecting Keyboard Press

document.addEventListener("keydown", function(event) {

setTimeout(function(){
							var gameOver = "Game Over, Press Any Key to Restart";
							var startGame = "Press A Key to Start";
							var h1Text = $("h1").text();

							if(h1Text === startGame || h1Text === gameOver){

								randomColor();
							}
							else{}; }, 200);
});



function colorCheck(currentLevel) {

		if(colorClick[currentLevel] === colorMemory[currentLevel]) {
    		console.log("true color");
    		if (colorClick.length === colorMemory.length) {

    		setTimeout(function(){ randomColor(); }, 500);
    		}
    	}
		else if(colorClick[currentLevel] !== colorMemory[currentLevel]){
			makeSound("wrong");
			console.log("false color");
			document.querySelector("h1").innerText = "Game Over, Press Any Key to Restart";
			$("body").addClass("game-over");
			setTimeout(function(){ $("body").removeClass("game-over"); }, 300);
			level = 0;
			colorMemory=[];

		}
};


//Random Color
function randomColor(){

	colorClick = [];
	level++;

	//change h1
	$("#level-title").text("Level " + level);
	
	//[colors]
	var colors = ["blue","green","red","yellow"];


	//random color from [colors]
	var n = Math.floor(Math.random() * 4);

	//animation and sound
	makeSound(colors[n]);
	buttonAnimation(colors[n]);

	//enter array
	colorMemory.push(colors[n]);
	
};


//Sound Function
function makeSound(iD){
					var audio = new Audio("sounds/" + iD + ".mp3");
					audio.play();
	
};

//Button Animation

function buttonAnimation(iD){

	var activeButton = $("#" + iD);
	activeButton.addClass("pressed");
	setTimeout(function(){ activeButton.removeClass("pressed"); }, 100);
}