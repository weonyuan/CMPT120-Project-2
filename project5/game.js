//project 5 - game v.0.8
//game.js
//controls the game's logic, inventory, and global variables

//global - navigation
var currentLocation = 0;
var north = "N";
var south = "S";
var west = "W";
var east = "E";
var invalidLocation = "You can't go this way.";

//global - inventory
var item_wrench = false;
var item_capsule = false;

//global - misc
var scoreChart = 0;
var moveCount = 0;

function init() {
  //calls the starting function
  location_0();
}

function btn_displayInventory() {
  var msg = "Inventory: ";
  if (item_wrench) {
    msg = msg + "[Wrench]";
  }
  if (item_capsule) {
    msg = msg + "[Capsule] ";
  }
  else if ((!item_wrench) && (!item_capsule)) {
    msg = msg + "None";
  }
  updateDisplay(msg);
}

function take_wrench() {
  if ((currentLocation === 4) && (txtCommand.value == "take wrench")) {
    updateDisplay("You take the wrench.");
    item_wrench = true;
  }
    else {
      updateDisplay("You can't take this item.");
    }
}

function take_capsule() {
  if ((currentLocation === 10) && (txtCommand.value == "take capsule")) {
    updateDisplay("You take the capsule.");
    item_capsule = true;
  }
    else {
      updateDisplay("You can't take this item.");
    }
}

//prints message and location onto textarea
function updateDisplay(message) {
  var message = message;
  var userInput = document.getElementById("taGame");
  userInput.value = message + "\n\n" + userInput.value;
}

//takes String literal from command bar
function btn_go() {
  btn_command(txtCommand.value);
}

function help() {
  updateDisplay('Use the directional buttons below, or type ' +
                '"N, S, W, E, n, s, w, e, north, south, west, ' +
                'east" in the command bar.' + '\n\n' + 
                'You can also take certain items by typing ' +
                '"take [item]" in the command bar.');
}