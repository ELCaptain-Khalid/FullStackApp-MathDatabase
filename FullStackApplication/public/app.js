/*  Khalid Munassar 
      Full Stack App - Final Project
      app.js

    Js code to allow the user to enter a number and try to guess the randomly generated number

*/

$(startup);

//**********************************************************//
    //This will show the name of the player that I grabbed from the local storage


function startup(){
    // Grab the user name from the input
    let playerName = sessionStorage.getItem("PlayerName");
    console.log("Player name is:"+ playerName);
    let Khabib = $("#nameLS").text()+ " "+ playerName;
    $("#nameLS").text(Khabib);

    //This will start the game when the button to guess gets clicked per each player/user
    $("#submit").click(Guess);
}

//neccessay for the guess to work so we must initialize the guess to a number
let randomNum = 5;
let counter=1; // to count the attempts

//creating an array to store the attempts per game for a particular user each game they play. This will be in session storage and can be displayed
//if need be to the user
let scores =[];





//The guess function will assist with setting the paramer on how the user will be given feedback on their guesses.
//also, this will call a random function to the user once they get the already initialized number we created in line 31
//so that way it will help with the Ajax call
function Guess(){

    // right number
    let userGuess = $("#guess").val();
    if (userGuess == randomNum  ){

        let name = sessionStorage.getItem("PlayerName");
        scores.push(counter);
        sessionStorage.setItem(name, JSON.stringify(scores));
       output.innerHTML = "Awesome!🎇 you guessed right. The mysterious number is "+ randomNum;
       var tries = document.getElementById("attempt"); 
            tries.innerHTML = "It took you "+ counter + "  tries to guess the number 👀";

            //Setting the name for  user after each session
            var nameAfterSession = document.getElementById("nameRecord");
            nameAfterSession.innerHTML = name;
            // setting their record on screen 
            var record = document.getElementById("scoreRecord")
            record.innerHTML = counter;

            counter =0;// assign 0 so that the new game will have a different count
            
            ajaxCall();
         }

         // too low guess
     if (userGuess < randomNum ) {
        output.innerHTML = "Too low Boss 😅 Try again 👊🏽";
        }

        // too high guess
    if  (userGuess > randomNum){

        output.innerHTML = "Too high Boss 🥵! Try again 👊🏽";
        }
        counter++;
      
    }
// will grab the value from the input 
var output = document.getElementById("output");



//this function send http request for my server using jquery.
function ajaxCall() {
    $.ajax({url: "http://45.79.221.107:3200/random", success: Information });
}

//this function parses the random number and assigns it to theRandomNumber variable which I initialized above.
function Information(dataObject) {
    let objectParsed = JSON.parse(dataObject);
    console.log("Here is the random nummber", objectParsed.Number);
    randomNum =  objectParsed.Number;


}






    