//final project - game v.1.0
//game.js
//controls the game's logic, inventory, and global variables

var scoreChart = 500;

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
    updateDisplay("Taken " + items[currentLocation].name + ".");
    items[currentLocation].isTaken = true;
  }

function itemCheck(nextLocation) {
  //puzzle element that checks for items when proceeding certain rooms
      if (nextLocation === 8) {
        if (itemFlashlight.isTaken) {
          updateDisplay(locations[nextLocation]);
          currentLocation = nextLocation;
        } else {
            updateDisplay("You tried to walk into the room, " +
                          "but it is too dark to decipher " +
                          "anything, so you walked back out.");
          }
      }
      else if (nextLocation === 10) {
        if (itemKey.isTaken) {
          updateDisplay(locations[nextLocation]);
          currentLocation = nextLocation;
        } else {
            updateDisplay("The door is locked.");
          }
      }
      else if (nextLocation === 12) {
        if (itemPowerCapsule.isTaken && itemWrench.isTaken) {
          updateDisplay(locations[nextLocation]);
          updateDisplay("Your final score is " + scoreChart +
                        ".");
          currentLocation = nextLocation;
        } else {
            updateDisplay("You attempted to go into the room " +
                          "but realized that you're still missing " +
                          "item. Collect all items before proceeding!");
          }
      } else {
          updateDisplay(locations[nextLocation]);
          currentLocation = nextLocation;
        }
}

//prints message and location onto textarea
function updateDisplay(message) {
  var message = message;
  var userInput = document.getElementById("taGame");
  userInput.value = message + "\n\n" + userInput.value;
}

function btn_scoreLog() {
  updateDisplay("Current score: " + scoreChart);
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
                '"take" in the command bar if applicable. \n\n' +
                'You are initially given a score value of 500 ' +
                'and for every time you ATTEMPT to move, you ' +
                'lose a point, so plan accordingly!');
}