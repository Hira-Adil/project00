
//Create a variable called alien_color and assign it a value 
let  alien_color : string = "red";

// Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if(alien_color === "red"){
    console.log("Player just earned 5 points !");
}

// Write one version of this program that passes the if test and another that fails.
  alien_color = "green";

//  (The version that fails will have no output.)
if(alien_color === "red"){
    console.log("Player just earned 5 points !");
}