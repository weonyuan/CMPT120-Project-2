//global variables
var currentLocation = 0;
var north = "N";
var south = "S";
var west = "W";
var east = "E";
var invalidLocation = "You can't go this way.";

var scoreChart = 0;

function location_init() {
  updateDisplay("You are enclosed in the center of a white cube room " +
                "with no windows. There is an elevator in front of you.");
  document.getElementById("btnNorth").disabled = false;
  document.getElementById("btnSouth").disabled = false;
  document.getElementById("btnWest").disabled = false;
  document.getElementById("btnEast").disabled = false;
}

function location_1() {
  updateDisplay("You are in an elevator. It is well-lit, but it " +
                "does not seem to be functioning. There is a " +
                "number panel by the door.");
  document.getElementById("btnNorth").disabled = true;
  document.getElementById("btnSouth").disabled = false;
  document.getElementById("btnWest").disabled = true;
  document.getElementById("btnEast").disabled = true;
}

function location_2() {
  updateDisplay("You are standing in a dim hallway with an " +
                "opening on your west and east.");
  document.getElementById("btnNorth").disabled = true;
  document.getElementById("btnSouth").disabled = true;
  document.getElementById("btnWest").disabled = false;
  document.getElementById("btnEast").disabled = false;
}

function location_3() {
  updateDisplay("You are now in a small bedroom. There " +
                "seems to be no windows here aside from " +
                "a bed and a closet.");
  document.getElementById("btnNorth").disabled = false;
  document.getElementById("btnSouth").disabled = false;
  document.getElementById("btnWest").disabled = true;
  document.getElementById("btnEast").disabled = true;
}

function location_4() {
  updateDisplay("You are in a storage room. There is " +
                "an opening in front of you and a letter " +
                "taped by the opening.");
  document.getElementById("btnNorth").disabled = false;
  document.getElementById("btnSouth").disabled = true;
  document.getElementById("btnWest").disabled = true;
  document.getElementById("btnEast").disabled = false;
}

function location_5() {
  updateDisplay("You are in a closet. It is completely " +
                "dark and dusty. There is nothing stored " +
                "here.");
  document.getElementById("btnNorth").disabled = false;
  document.getElementById("btnSouth").disabled = true;
  document.getElementById("btnWest").disabled = true;
  document.getElementById("btnEast").disabled = true;
}

function location_6() {
  updateDisplay("You are in a bathroom. There is a " +
                "toilet, mirror, and shower in " +
                "this room.");
  document.getElementById("btnNorth").disabled = true;
  document.getElementById("btnSouth").disabled = true;
  document.getElementById("btnWest").disabled = false;
  document.getElementById("btnEast").disabled = true;
}  

function location_7() {
  updateDisplay("Location 7");
  document.getElementById("btnNorth").disabled = true;
  document.getElementById("btnSouth").disabled = true;
  document.getElementById("btnWest").disabled = false;
  document.getElementById("btnEast").disabled = false;
} 

function location_8() {
  updateDisplay("Location 8");
  document.getElementById("btnNorth").disabled = true;
  document.getElementById("btnSouth").disabled = true;
  document.getElementById("btnWest").disabled = false;
  document.getElementById("btnEast").disabled = false;
} 

function location_9() {
  updateDisplay("Location 9");
  document.getElementById("btnNorth").disabled = false;
  document.getElementById("btnSouth").disabled = false;
  document.getElementById("btnWest").disabled = false;
  document.getElementById("btnEast").disabled = false;
}

function location_10() {
  updateDisplay("Location 10");
  document.getElementById("btnNorth").disabled = false;
  document.getElementById("btnSouth").disabled = true;
  document.getElementById("btnWest").disabled = true;
  document.getElementById("btnEast").disabled = true;
}

function location_11() {
  updateDisplay("Location 11");
  document.getElementById("btnNorth").disabled = true;
  document.getElementById("btnSouth").disabled = true;
  document.getElementById("btnWest").disabled = false;
  document.getElementById("btnEast").disabled = true;
}

function location_12() {
  updateDisplay("Location 12");
  document.getElementById("btnNorth").disabled = true;
  document.getElementById("btnSouth").disabled = false;
  document.getElementById("btnWest").disabled = false;
  document.getElementById("btnEast").disabled = false;
}

//describes the direction
function btn_command(direction) {
  switch(direction) {
    case north:
    case "n":
    case "north":
      switch(currentLocation) {
        case 5:
          currentLocation = 3;
          location_3();
        break;
        
        case 3:
          currentLocation = 0;
          location_init();
        break;
        
        case 0:
          currentLocation = 1;
          location_1();
        break;
        
        case 4:
          currentLocation = 7;
          location_7();
        break;
        
        case 9:
          currentLocation = 12;
          location_12();
        break;
        
        case 10:
          currentLocation = 9;
          location_9();
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
          location_init();
        break;
        
        case 0:
          currentLocation = 3;
          location_3();
        break;
                
        case 3:
          currentLocation = 5;
          location_5();
        break;
        
        case 7:
          currentLocation = 4;
          location_4();
        break;
        
        case 9:
          currentLocation = 10;
          location_10();
        break;
        
        case 12:
          currentLocation = 9;
          location_9();
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
          location_2();
        break;
            
        case 2:
          currentLocation = 0;
          location_init();
        break;
              
        case 0:
          currentLocation = 4;
          location_4();
        break;
        
        case 7:
          currentLocation = 0;
          updateDisplay("You fell into a trap door, and you wound up " +
                        "back where you started.");
          location_init();
        break;
        
        case 8:
          currentLocation = 7;
          location_7();
        break;
        
        case 9:
          currentLocation = 8;
          location_8();
        break;
        
        case 11:
          currentLocation = 9;
          location_9();
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
          location_init();
        break;
        
        case 0:
          currentLocation = 2;
          location_2();
        break;
        
        case 2:
          currentLocation = 6;
          location_6();
        break;
      
        case 7:
          currentLocation = 8;
          location_8();
        break;
        
        case 8:
          currentLocation = 9;
          location_9();
        break;
        
        case 9:
          currentLocation = 11;
          location_11();
        break;
        
        default:
          updateDisplay(invalidLocation);
        break;
      }
      break;
    
    case "help":
    case "?":
        help();
      break;
      
    default:
      updateDisplay("Invalid command.");
      break;
  }
}
    
//takes String literal from command bar
function btn_go() {
  btn_command(txtCommand.value);
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

function help() {
  updateDisplay('Use the directional buttons below to move, ' +
                'or use "N, S, W, E, n, s, w, e" in the ' +
                'command bar.' + '\n\n' + 'You are awarded ' +
                '1 point everytime you move successfully.' + '\n' +
                'Good luck and happy playing!');
}
/*
function cleanInput() {
  if (typeof direction === "string") {
    direction.toUpperCase();
  }
}

cleanInput();*/