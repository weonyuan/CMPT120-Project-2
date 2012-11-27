//project 5 - game v.0.8
//game.js
//controls the game's logic, inventory, and global variables

//global - inventory
var item_wrench = false;
var item_capsule = false;

//global - misc
var scoreChart = 0;
var moveCount = 0;

function init() {
  //calls the starting function
  updateDisplay(locations_0);
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

function pickUpItem(item) {
  if (location.hasItem()) {
    //Do some stuff
  } else {
    alert("This location has no items to pick up!");
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