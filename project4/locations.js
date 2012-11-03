//global variables
var currentLocation = 0;
var north = "N";
var south = "S";
var west = "W";
var east = "E";
var invalidLocation = "You can't go this way.";

var scoreChart = 0;

//describes the direction
function btn_move(direction) {
  switch(direction) {
    case north:
    case "n":
    case "north":
      switch(currentLocation) {
        case 5:
          currentLocation = 3;
          updateDisplay("You are now in a small bedroom. There seems to be no windows here aside from a bed and a closet.");
          document.getElementById("btnNorth").disabled = false;
          document.getElementById("btnSouth").disabled = false;
          document.getElementById("btnWest").disabled = true;
          document.getElementById("btnEast").disabled = true;
        break;
        
        case 3:
          currentLocation = 0;
            updateDisplay("You are enclosed in the center of a white cube room with no windows. There is an elevator in front of you.");
            document.getElementById("btnNorth").disabled = false;
            document.getElementById("btnSouth").disabled = false;
            document.getElementById("btnWest").disabled = false;
            document.getElementById("btnEast").disabled = false;
        break;
        
        case 0:
            currentLocation = 1;
            updateDisplay("You are in an elevator. It is well-lit, but it does not seem to be functioning. There is a number panel by the door.");
            document.getElementById("btnNorth").disabled = true;
            document.getElementById("btnSouth").disabled = false;
            document.getElementById("btnWest").disabled = true;
            document.getElementById("btnEast").disabled = true;
        break;
        
        default:
          updateDisplay(invalidLocation);
        }
    break;
      
    case south:
    case "s":
    case "south":
      switch(currentLocation) {
        case 1:
          currentLocation = 0;
          updateDisplay("You are enclosed in the center of a white cube room with no windows. There is an elevator in front of you.");
          document.getElementById("btnNorth").disabled = false;
          document.getElementById("btnSouth").disabled = false;
          document.getElementById("btnWest").disabled = false;
          document.getElementById("btnEast").disabled = false;
        break;
        
        case 0:
          currentLocation = 3;
          updateDisplay("You are now in a small bedroom. There seems to be no windows here aside from a bed and a closet.");
          document.getElementById("btnNorth").disabled = false;
          document.getElementById("btnSouth").disabled = false;
          document.getElementById("btnWest").disabled = true;
          document.getElementById("btnEast").disabled = true;
        break;
                
        case 3:
          currentLocation = 5;
          updateDisplay("You are in a closet. It is completely dark and dusty. There is nothing stored here.");
          document.getElementById("btnNorth").disabled = false;
          document.getElementById("btnSouth").disabled = true;
          document.getElementById("btnWest").disabled = true;
          document.getElementById("btnEast").disabled = true;
        break;
        
        default:
          updateDisplay(invalidLocation);
        break;
      }
      break;
      
    case west:
    case "w":
    case "west":
      switch(currentLocation) {
        case 6:
          currentLocation = 2;
          updateDisplay("You are standing in a dim hallway with an opening on your west and east.");
          document.getElementById("btnNorth").disabled = true;
          document.getElementById("btnSouth").disabled = true;
          document.getElementById("btnWest").disabled = false;
          document.getElementById("btnEast").disabled = false;
        break;
            
        case 2:
          currentLocation = 0;
          updateDisplay("You are enclosed in the center of a white cube room with no windows. There is an elevator in front of you.");
          document.getElementById("btnNorth").disabled = false;
          document.getElementById("btnSouth").disabled = false;
          document.getElementById("btnWest").disabled = false;
          document.getElementById("btnEast").disabled = false;
        break;
              
        case 0:
          currentLocation = 4;
          updateDisplay("You are in a storage room. There is nothing here except for a letter taped on a wall.");
          document.getElementById("btnNorth").disabled = true;
          document.getElementById("btnSouth").disabled = true;
          document.getElementById("btnWest").disabled = true;
          document.getElementById("btnEast").disabled = false;
        break;
        
        default:
          updateDisplay(invalidLocation);
        break;
      }
      break;
      
    case east:
    case "e":
    case "east":
      switch(currentLocation) {
        case 4:
          currentLocation = 0;
          updateDisplay("You are enclosed in the center of a white cube room with no windows. There is an elevator in front of you.");
          document.getElementById("btnNorth").disabled = false;
          document.getElementById("btnSouth").disabled = false;
          document.getElementById("btnWest").disabled = false;
          document.getElementById("btnEast").disabled = false;
        break;
        
        case 0:
          currentLocation = 2;
          updateDisplay("You are standing in a dim hallway with an opening on your west and east.");
          document.getElementById("btnNorth").disabled = true;
          document.getElementById("btnSouth").disabled = true;
          document.getElementById("btnWest").disabled = false;
          document.getElementById("btnEast").disabled = false;
        break;
        
        case 2:
          currentLocation = 6;
          updateDisplay("You are in a bathroom. There is a toilet, mirror, and shower in this room.");
          document.getElementById("btnNorth").disabled = true;
          document.getElementById("btnSouth").disabled = true;
          document.getElementById("btnWest").disabled = false;
          document.getElementById("btnEast").disabled = true;
        break;
      
        default:
          updateDisplay(invalidLocation);
        break;
      }
      break;
    
    case "help":
        updateDisplay('Welcome to Cube!\nUse the directional buttons below to move,' + '\n' +
                      'or use "N, S, W, E, n, s, w, e" in the command bar.' + '\n\n' +
                      'You are awarded 1 point everytime you move successfully.' + '\n' +
                      'Good luck and happy playing!');
      break;
      
    default:
      updateDisplay("Invalid command.");
      break;
  }
}
    
//takes String literal from command bar
function btn_go() {
  btn_move(txtCommand.value);
}

//prints message and location onto textarea
function updateDisplay(message) {
  var message = message;
  var userInput = document.getElementById("taGame");
  userInput.value = message + "\n\n" + userInput.value;
}

//tells the current score
function btn_scoreLog() {
  updateDisplay("Current score: " + scoreChart);
}

/*
function cleanInput() {
  if (typeof direction === "string") {
    direction.toUpperCase();
  }
}

cleanInput();*/