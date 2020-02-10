// create a bar that has let user view highscore and keep track of time


// create a short cut to call headerBar Div
var newDiv = document.getElementById("headerBar")
//created score tracker 
var scoreTracker = "View High Scores";
//create a div that is 50% width with a link to score page and append it to the headerBar div
var leftDiv = document.createElement("div")
leftDiv.setAttribute("id", "leftDiv");
leftDiv.setAttribute("style", "width:50%; display:inline-block");
leftDiv.innerHTML = scoreTracker.link("#"); 
newDiv.appendChild(leftDiv);

//create div for timer
var rightDiv = document.createElement("div");
rightDiv.setAttribute("id", "rightDiv")
//create a div that is 50% width with a time tracker and append it to the headerBar div and align the text to the right
rightDiv.setAttribute("style", "width:50%; display:inline-block; text-align:right");
newDiv.appendChild(rightDiv);
// create timer that count down from 60 seconds
var seconds = 0;
var interval ;
// create a timer function that have input of seconds 
function counter(seconds) {
   interval = setInterval(function() {
       // time decrease every seconds
        seconds--;
        // write time to rightDiv
        rightDiv.innerHTML = "Timer " + seconds;
        // when timer hit 0 game over
        if(!seconds){
             clearInterval(interval); 
             alert("Game Over");
        }
   },1000)
}
counter(60);


// create highscore page that let user enter their initals and score from quiz

//create 5 multiple choice questions that returns correct or incorrect and keep score 
//if incorrect timer decrease time
//if timer hit 0 or all question answered game is over take user to highscore page

