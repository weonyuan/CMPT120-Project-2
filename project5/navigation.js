//project 5 - game v.0.8
//navigation.js
//controls the navigation in the game

//global - navigation
var currentLocation = 0;
var north = 0;
var south = 1;
var west = 2;
var east = 3;

function btn_command(action) {
  var locations = new Array( locations_0,
                              locations_1,
                              locations_2,
                              locations_3,
                              locations_4,
                              locations_5,
                              locations_6,
                              locations_7,
                              locations_8,
                              locations_9,
                              locations_10,
                              locations_11,
                              locations_12 );
                              
  var nav = new Array(/*     0   1   2   3 */
                      /*0*/  [1,  3,  4,  2],
                      /*1*/  [-1, 0, -1, -1],
                      /*2*/  [-1, -1, 0,  6],
                      /*3*/  [0,  5, -1, -1],
                      /*4*/  [7, -1, -1,  0],
                      /*5*/  [3, -1, -1, -1],
                      /*6*/  [-1, -1, 2, -1],
                      /*7*/  [-1, -1, 0,  8],
                      /*8*/  [-1, -1, 7,  9],
                      /*9*/  [12, 10, 8, 11],
                      /*10*/ [9, -1, -1, -1],
                      /*11*/ [-1, -1, 9, -1],
                      /*12*/ [-1, 9, -1, -1]
                      );
  
  var navButtons = new Array("btnNorth", "btnSouth", "btnWest", "btnEast");
                      
  var navButtons_switch = new Array(/*     0   1   2   3 */
                                    /*0*/  [0,  0,  0,  0],
                                    /*1*/  [1,  0,  1,  1],
                                    /*2*/  [1,  1,  0,  0],
                                    /*3*/  [0,  0,  1,  1],
                                    /*4*/  [0,  1,  1,  0],
                                    /*5*/  [0,  1,  1,  1],
                                    /*6*/  [1,  1,  0,  1],
                                    /*7*/  [1,  1,  0,  0],
                                    /*8*/  [1,  1,  0,  0],
                                    /*9*/  [0,  0,  0,  0],
                                    /*10*/ [0,  1,  1,  1],
                                    /*11*/ [1,  1,  0,  1],
                                    /*12*/ [1,  0,  1,  1]
                                    );
  
  if (action === "N" || action === "n" || action === "north") {
    action = north;
  }
  else if (action === "S" || action === "s" || action === "south") {
    action = south;
  }
  else if (action === "W" || action === "w" || action === "west") {
    action = west;
  }
  else if (action === "E" || action === "e" || action === "east") {
    action = east;
  }
  
  var nextLocation = 0;
  nextLocation = nav[currentLocation][action];
  if (nextLocation >= 0) {
    updateDisplay(locations[nextLocation]);
    currentLocation = nextLocation;
    
    for (var i = 0; i < navButtons.length; i++) {
      var btnDisable = 0;
      btnDisable = navButtons_switch[currentLocation][i];
      if (btnDisable === 1) {
        document.getElementById(navButtons[i]).disabled = true;
      } else {
        document.getElementById(navButtons[i]).disabled = false;
        }
    }
  } else {
      updateDisplay("You can't go that way.");
    }
}