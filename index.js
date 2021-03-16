function scuberGreetingForFeet(value){
  if (value < 400) {
    return "This one is on me!"
  }
  else if ((value > 2000) && (value > 2500 )) {
  
      return "No can do."

    } else {

    return "I will gladly take your thirty bucks."

  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return (city == "NYC") ? "Ok, sounds good." : "No go."
}


function switchOnCharmFromTip(tip){
  // Write your code here!
    switch (tip) {
      case "generous" : 
      return "Thank you so much.";

      case "not as generous" : 
      return "Thank you.";

      default:
        return "Bye."
    }

}
  // if (!(tip == 'generous') && (tip != 'generous')) {
      
  //     return "Bye."

  // }  else if (tip != 'generous') {

  //     return "Thank you." 
    
  // } else {

  //   return "Thank you so much." 

  //   }
