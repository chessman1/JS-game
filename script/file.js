var c;
var ctx;
var painted = [];
var content = [];
var player;
var theCanvas;
var turn = 0;
var squaresFilled = 0;
var message = "";
var i;
var game = false;
var img1;
var img2;

img1 = document.createElement("IMG");
img1.src = "images/player_1.jpg";
img1.alt = "player_1";

img2 = document.createElement("IMG");
img2.src = "images/player_2.jpg";
img2.alt = "player_2";

for(var i=0;i<9;++i) {
	painted[i] = false;
	content[i] = "";
}

function makeMove(number) {
theCanvas = "canvas" + number;
c = document.getElementById(theCanvas);
ctx = c.getContext('2d');

if(!painted[number-1]) {
	if(!game) {
		if(turn % 2 == 0) {
		ctx.drawImage(img1, -55, -5);  
		ctx.fillRect(5, 5, 0, 0);
		content[number-1] = "Cats";
	}
	
	else {
		ctx.drawImage(img2, -65 , -25);  
		ctx.fillRect(5, 5, 0, 0);
		content[number-1] = "Dogs";
	}
	
	turn++; //increment of turn with 1
	painted[number-1]=true; //the square is painted
	squaresFilled++; //increment the number of filled squares
	checkWinner(content[number-1]); //check for winner
	}
	else if(game == true && painted[number-1] == false) {
		alert("There is a combination on the board! Please play a new game!");
	}
}


//if the square is already painted
else {
	if(!game) {
	alert("Occupied square!");
	}
	else {
	alert("There is a combination on the board! Please play a new game!");
		}
	}
}

function checkWinner(symbol) {
	if(content[0] == symbol && content[1] == symbol && content[2] == symbol) {
		alert("The player with " + symbol + " WON!");
		game = true;
	}
	else if(content[3] == symbol && content[4] == symbol && content[5] == symbol) {
		alert("The player with " + symbol + " WON!");
		game = true;
	}
	else if(content[6] == symbol && content[7] == symbol && content[8] == symbol) {
		alert("The player with " + symbol + " WON!");
		game = true;
	}
	else if(content[0] == symbol && content[3] == symbol && content[6] == symbol) {
		alert("The player with " + symbol + " WON!");
		game = true;		
	}
	else if(content[1] == symbol && content[4] == symbol && content[7] == symbol) {
		alert("The player with " + symbol + " WON!");
		game = true;
	}
	else if(content[2] == symbol && content[5] == symbol && content[8] == symbol) {
		alert("The player with " + symbol + " WON!");
		game = true;
	}
	 else if(content[0] == symbol && content[4] == symbol && content[8] == symbol) {
		alert("The player with " + symbol + " WON!");
		game = true;
	}
	else if(content[2] == symbol && content[4] == symbol && content[6] == symbol) {
		alert("The player with " + symbol + " WON!");
		game = true;
	}
	
	//check for draw
	else if(squaresFilled == 9) {
		alert("Draw");
		game = true;
		}
}

function playAgain() {
	var y = confirm("Do you want a new game?");
	if(y==true) {
		location.reload(true);
	}
	else {
		alert("Thank you for playing!");
	}
}

//click events
$(document).ready(function() {
	$(".canvas").click(function() {
		var div_id = $(this).attr("id");
		if(div_id == "canvas1")
			makeMove(1);
		else if(div_id == "canvas2")
			makeMove(2);
		else if(div_id == "canvas3")
			makeMove(3);
		else if(div_id == "canvas4")
			makeMove(4);
		else if(div_id == "canvas5")
			makeMove(5);
		else if(div_id == "canvas6")
			makeMove(6);
		else if(div_id == "canvas7")
			makeMove(7);
		else if(div_id == "canvas8")
			makeMove(8);
		else if(div_id == "canvas9")
			makeMove(9);
	});
});

$(document).ready(function() {
	$("#btn_game").click(function() {
		playAgain();
	});
});

