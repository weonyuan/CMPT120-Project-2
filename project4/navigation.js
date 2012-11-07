//project 4 - game v.0.6
//navigation.js
//controls the navigation in the game

function btn_command(action) {
  switch(action) {
    //direction north
    case north:
    case "n":
    case "north":
      switch(currentLocation) {
        case 0: location_1(); break;
        case 3: location_0(); break;
        case 4: location_7(); break;
        case 5: location_3(); break;
        case 9: location_12(); break;
        case 10: location_9(); break;
        default: updateDisplay(invalidLocation); break;
      }
    break;
    
    //direction south
    case south:
    case "s":
    case "south":
      switch(currentLocation) {
        case 0: location_3(); break;
        case 1: location_0(); break;
        case 3: location_5(); break;
        case 7: location_4(); break;
        case 9: location_10(); break;
        case 12: location_9(); break;
        default: updateDisplay(invalidLocation); break;
      }
    break;
    
    //direction west  
    case west:
    case "w":
    case "west":
      switch(currentLocation) {
        case 0: location_4(); break;
        case 2: location_0(); break;
        case 6: location_2(); break;
        case 7: location_trap_1(); break;
        case 8: location_7(); break;
        case 9: location_8(); break;
        case 11: location_9(); break;
        default: updateDisplay(invalidLocation); break;
      }
    break;
    
    //direction east  
    case east:
    case "e":
    case "east":
      switch(currentLocation) {
        case 0: location_2(); break;
        case 2: location_6(); break;
        case 4: location_0(); break;
        case 7: location_8(); break;
        case 8: location_9(); break;
        case 9: location_11(); break;
        default: updateDisplay(invalidLocation); break;
      }
      break;
    
    //game help
    case "help":
    case "?":
        help();
    break;
    
    //items and inventory
    case "inventory": btn_displayInventory(); break;
    case "take wrench": take_wrench(); break;
    case "take capsule": take_capsule(); break;
      
    default:
      updateDisplay("I don't understand your command. [" +
                    txtCommand.value + "]");
    break;
  }
  
}