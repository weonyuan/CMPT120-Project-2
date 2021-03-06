//project 5 - game v.0.8
//game.js
//controls the game's logic, inventory, and global variables

function init() {
  //calls the starting function
  updateDisplay(locations_0);
}

//game items are stored in global array
var items = new Array();
items[0] = itemFlashlight;
items[4] = itemWrench;
items[5] = itemKey;
items[10] = itemPowerCapsule;

var inventory = new Array();

//displays current inventory
function btn_displayInventory() {
  var msg = "Inventory: " + inventory;
  updateDisplay(msg);
}

function pickUpItem(item) {
    inventory.push(items[currentLocation].name);
    updateDisplay("Taken.");
  }

//prints message and location onto textarea
function updateDisplay(message) {
  var message = message;
  var userInput = document.getElementById("taGame");
  userInput.value = message + "\n\n" + userInput.value;
}

//takes String literal from command bar
function btn_go() {
  txtCommand.value = txtCommand.value.toLowerCase();
  btn_command(txtCommand.value);
}

function help() {
  updateDisplay('Use the directional buttons below, or type ' +
                '"N, S, W, E, n, s, w, e, north, south, west, ' +
                'east" in the command bar.' + '\n\n' + 
                'You can also take certain items by typing ' +
                '"take" in the command bar if applicable.');
}