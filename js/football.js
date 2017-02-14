// JS Football
var start = alert("You are a quarterback in the NFL. Your team is losing by 4 and there is 2 minutes left on the clock, no timeouts. If you win you are a hero forever!");
var user = prompt ("HIKE! You drop back to pass. You can take a chance and win the game now (DEEP), play it safe and stop the clock (SAFE), or fake an injury and leave the game (FAKE).").toUpperCase();

var pressure = Math.random();
console.log(pressure);

//-----------------------------begin case---------------------------------------
switch (user) {
    case 'DEEP':
        var deepPass = prompt("You have a man down field. Throw the hail mary (WR1) or up the middle (WR2)?").toUpperCase(); 

        if (deepPass === "WR1" && pressure < .2) {
            console.log("You throw the hail mary... You have a man wide open! He catches the pass and you win the game!");
        } 
        else if (deepPass === "WR2" && pressure < .4) {
            console.log("You throw a deep ball up the middle and its caught! First down but the clock is still running!");
        }
        else {
            console.log("The defense blitz's. You try to throw the deep pass but its picked off and you lose the game.");
        }
        
      break; 
      
        //--------------------------------------------------------------
        
    case 'SAFE':
        var shortPass = prompt("You look down field but the defense has it covered. Throw a check down to the running back (RB) or tight end (TE)?").toUpperCase();
        if (shortPass === "RB" && pressure < .6) {
            console.log("The pass is checked down to the running back, he makes a man miss. WOW! He picks up a first down and gets out of bounds to stop the clock!");
        } else if (shortPass === "TE" && pressure <.6) {
            console.log("The pass is to the tight end. He catches it along the sideline and keeps both feet in bounds. What a catch! The clock stops and they get a first down.")
        }
        else {
            console.log("The pass is incomplete. The linebacker got in there to break it up.");
        }
        break;
    
        //---------------------------------------------------------------
    
    case 'FAKE':
        console.log("Oh no! The defense blitz's the QB and you get hit from behind!!! The ball is loose and the defense recovers! What a mistake! You will be forever ashamed!");
        break;
    default: 
        console.log("The defense does a great job covering up the receivers and you have no choice but to throw the ball away.")
}