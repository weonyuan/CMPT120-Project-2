//project 5 - game v.0.8
//locations.js

//Location prototype
function Location(_id, _name, _description, _hasItem) {
  //Attributes
  this.id = _id;
  this.name = _name;
  this.description = _description;
  this.hasItem = _hasItem;
  this.item = function() {
    if(this.hasItem) {
      return items[nextLocation].description;
    } else {
      return "";
      }
  }
  
  this.toString = function() {
    var returnVal = "";
    returnVal = this.description + " " + this.item();
    return returnVal;
  }
}

//Item prototype
function Item(_id, _name, _description) {
  this.id = _id;
  this.name = _name;
  this.description = _description;
}

//Location instances
var locations_0 = new Location();
locations_0.id = 0;
locations_0.name = "Cube room";
locations_0.description = "You are enclosed in the center of a " +
                          "white cube room with no windows. " +
                          "There is an elevator in front of you.";
locations_0.hasItem = true;

var locations_1 = new Location();
locations_1.id = 1;
locations_1.name = "Elevator";
locations_1.description = "You are in an elevator. It is " +
                          "well-lit, but it does not seem " +
                          "to be functioning.";
locations_1.hasItem = false;

var locations_2 = new Location();
locations_2.id = 2;
locations_2.name = "Dim hallway";
locations_2.description = "You are standing in a dim hallway " + 
                          "with an opening on your west and " +
                          "east.";
locations_2.hasItem = false;

var locations_3 = new Location();
locations_3.id = 3;
locations_3.name = "Dim hallway";
locations_3.description = "You are now in a small bedroom. There " +
                          "seems to be no windows here aside from " +
                          "a bed and a closet.";
locations_3.hasItem = false;

var locations_4 = new Location();
locations_4.id = 4;
locations_4.name = "Storage room";
locations_4.description = "You are in a storage room. There is " +
                          "an opening in front of you.";
locations_4.hasItem = true;

var locations_5 = new Location();
locations_5.id = 5;
locations_5.name = "Closet";
locations_5.description = "You are in a closet. It is completely " +
                          "dark and dusty. There is nothing stored " +
                          "here.";
locations_5.hasItem = true;

var locations_6 = new Location();
locations_6.id = 6;
locations_6.name = "Bathroom";
locations_6.description = "You are in a bathroom. There is a " +
                          "toilet, mirror, and shower in " +
                          "this room.";
locations_6.hasItem = false;

var locations_7 = new Location();
locations_7.id = 7;
locations_7.name = "Opening";
locations_7.description = "You are in a dim room, with rooms on " +
                          "the west and east of you. You tried " +
                          "to decipher what is inside those rooms " +
                          "but failed, they are completely pitch "+
                          "black.";
locations_7.hasItem = false;

var locations_8 = new Location();
locations_8.id = 8;
locations_8.name = "Dark room";
locations_8.description = "You enter a pitch-black room and suddenly " +
                          "the lights turn on, revealing a completely " +
                          "white room. There seems to be a motion " +
                          "sensor located on the ceiling, and a sign " +
                          "of a large arrow pointing to the east.";
locations_8.hasItem = false;

var locations_9 = new Location();
locations_9.id = 9;
locations_9.name = "Intersection";
locations_9.description = "You are in an intersection with a room " +
                          "located in each side. All of them look " +
                          "identical among each other.";
locations_9.hasItem = false;

var locations_10 = new Location();
locations_10.id = 10;
locations_10.name = "Office";
locations_10.description =  "You are in an office. There is a " +
                            "desk, chair, and a shelf of books " +
                            "that are utterly useless to you.";
locations_10.hasItem = true;

var locations_11 = new Location();
locations_11.id = 11;
locations_11.name = "Power room";
locations_11.description =  "You are in the electrical room. " +
                            "There is the occasional buzzing " +
                            "sound here but the only power meter " +
                            "in this room is shut off. You wonder " +
                            "where the sound is coming from.";
locations_11.hasItem = false;

var locations_12 = new Location();
locations_12.id = 12;
locations_12.name = "???";
locations_12.description =  "You have entered a room where it is " +
                            "completely dark, and you cannot find " +
                            "your way out of here. TO BE " +
                            "CONTINUED. Hit Refresh to restart" +
                            "the game.";
locations_12.hasItem = false;

//Item instances
var itemFlashlight = new Item();
itemFlashlight.id = 0;
itemFlashlight.name = "Flashlight";
itemFlashlight.description = "There is a flashlight on the ground.";

var itemWrench = new Item();
itemWrench.id = 4;
itemWrench.name = "Wrench";
itemWrench.description = "There is a wrench on the ground.";

var itemKey = new Item();
itemKey.id = 5;
itemKey.name = "Key";
itemKey.description = "There is a key on the ground.";

var itemPowerCapsule = new Item();
itemPowerCapsule.id = 10;
itemPowerCapsule.name = "Power capsule";
itemPowerCapsule.description = "There is a power capsule on the table.";