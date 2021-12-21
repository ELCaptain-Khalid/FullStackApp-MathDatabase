/* 
  Khalid Munassar 
      Full Stack App - Final Project
      landingPage.js
   
      */

// this will call main so the doc is ready
$(document).ready(main);


//loading using main
function main () {
    // this is a way to grab the player name from the landing page
   $("#button").on("click" , namesSaved);

}
/* 
var playerName = document.getElementById("playerName");


document.getElementById("button").addEventListener("click", namesSaved) */

function namesSaved(){
    let userName = $("#playerName").val();

    sessionStorage.setItem("PlayerName", userName);

}


