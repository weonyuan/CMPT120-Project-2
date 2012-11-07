//project 4 - game v.0.6
//locations.js

//physical locations
function location_0() {
  currentLocation = 0;
  updateDisplay("You are enclosed in the center of a " +
                "white cube room with no windows. " +
                "There is an elevator in front of you.");
  document.getElementById("btnNorth").disabled = false;
  document.getElementById("btnSouth").disabled = false;
  document.getElementById("btnWest").disabled = false;
  document.getElementById("btnEast").disabled = false;
}

function location_1() {
  currentLocation = 1;
  updateDisplay("You are in an elevator. It is " +
                "well-lit, but it does not seem " +
                "to be functioning.");
  document.getElementById("btnNorth").disabled = true;
  document.getElementById("btnSouth").disabled = false;
  document.getElementById("btnWest").disabled = true;
  document.getElementById("btnEast").disabled = true;
}

function location_2() {
  currentLocation = 2;
  updateDisplay("You are standing in a dim hallway with an " +
                "opening on your west and east.");
  document.getElementById("btnNorth").disabled = true;
  document.getElementById("btnSouth").disabled = true;
  document.getElementById("btnWest").disabled = false;
  document.getElementById("btnEast").disabled = false;
}

function location_3() {
  currentLocation = 3;
  updateDisplay("You are now in a small bedroom. There " +
                "seems to be no windows here aside from " +
                "a bed and a closet.");
  document.getElementById("btnNorth").disabled = false;
  document.getElementById("btnSouth").disabled = false;
  document.getElementById("btnWest").disabled = true;
  document.getElementById("btnEast").disabled = true;
}

function location_4() {
  currentLocation = 4;
  updateDisplay("You are in a storage room. There is " +
                "an opening in front of you and a letter " +
                "taped by the opening.");
  if (!item_wrench) {
    updateDisplay("There is a wrench on the ground.");
  }
    else {
      updateDisplay("You notice a wrench mark on the ground.");
    }
  document.getElementById("btnNorth").disabled = false;
  document.getElementById("btnSouth").disabled = true;
  document.getElementById("btnWest").disabled = true;
  document.getElementById("btnEast").disabled = false;
}

function location_5() {
  currentLocation = 5;
  updateDisplay("You are in a closet. It is completely " +
                "dark and dusty. There is nothing stored " +
                "here.");
  document.getElementById("btnNorth").disabled = false;
  document.getElementById("btnSouth").disabled = true;
  document.getElementById("btnWest").disabled = true;
  document.getElementById("btnEast").disabled = true;
}

function location_6() {
  currentLocation = 6;
  updateDisplay("You are in a bathroom. There is a " +
                "toilet, mirror, and shower in " +
                "this room.");
  document.getElementById("btnNorth").disabled = true;
  document.getElementById("btnSouth").disabled = true;
  document.getElementById("btnWest").disabled = false;
  document.getElementById("btnEast").disabled = true;
}  

function location_7() {
  currentLocation = 7;
  updateDisplay("You are in a dim room, with rooms on the west " +
                "and east of you. You tried to decipher what " +
                "is inside those rooms but failed, they are " +
                "are completely pitch black.");
  document.getElementById("btnNorth").disabled = true;
  document.getElementById("btnSouth").disabled = false;
  document.getElementById("btnWest").disabled = false;
  document.getElementById("btnEast").disabled = false;
} 

function location_8() {
  currentLocation = 8;
  updateDisplay("You enter a pitch-black room and suddenly " +
                "the lights turn on, revealing a completely " +
                "white room. There seems to be a motion " +
                "sensor located on the ceiling, and a sign " +
                "of a large arrow pointing to the east.");
  document.getElementById("btnNorth").disabled = true;
  document.getElementById("btnSouth").disabled = true;
  document.getElementById("btnWest").disabled = false;
  document.getElementById("btnEast").disabled = false;
} 

function location_9() {
  currentLocation = 9;
  updateDisplay("You are in an intersection with a room " +
                "located in each side. All of them look " +
                "identical among each other.");
  document.getElementById("btnNorth").disabled = false;
  document.getElementById("btnSouth").disabled = false;
  document.getElementById("btnWest").disabled = false;
  document.getElementById("btnEast").disabled = false;
}

function location_10() {
  currentLocation = 10;
  updateDisplay("You are in an office. There is a " +
                "desk, chair, and a shelf of books " +
                "that are utterly useless to you.");
  if (!item_capsule) {
    updateDisplay("There is a capsule on the desk.");
  }
    else {
      updateDisplay("There is nothing but useless " +
                    "papers on the desk.");
    }
  document.getElementById("btnNorth").disabled = false;
  document.getElementById("btnSouth").disabled = true;
  document.getElementById("btnWest").disabled = true;
  document.getElementById("btnEast").disabled = true;
}

function location_11() {
  currentLocation = 11;
  updateDisplay("You are in the electrical room. There " +
                "is the occasional buzzing sound here " +
                "but the only power meter in this room " +
                "is shut off. You wonder where the sound " +
                "is coming from.");
  document.getElementById("btnNorth").disabled = true;
  document.getElementById("btnSouth").disabled = true;
  document.getElementById("btnWest").disabled = false;
  document.getElementById("btnEast").disabled = true;
}

function location_12() {
  currentLocation = 12;
  updateDisplay("You have entered a room where it is " +
                "completely dark, and you cannot find " +
                "your way out of here. To be continued. " +
                "Hit Refresh to restart the game.");
  document.getElementById("btnNorth").disabled = true;
  document.getElementById("btnSouth").disabled = true;
  document.getElementById("btnWest").disabled = true;
  document.getElementById("btnEast").disabled = true;
}

//fake locations
function location_trap_1() {
  currentLocation = 0;
  updateDisplay("You fell into a trap door, and you wound up " +
                        "back where you started.");
  location_init();
}