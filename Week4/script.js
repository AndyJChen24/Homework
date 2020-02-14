
//created score tracker 
var scoreTracker = "View High Scores";
//create a link for highscore.html on leftDiv on header bar
leftDiv.innerHTML = scoreTracker.link("highScore.html"); 

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
var i = 0;
var question = document.getElementsByClassName("correct");

question[i].addEventListener("click", function(event){
    alert("button clicked");

});


var initalInput = "AC";
var scoreInput = 60;

var score = {inital : initalInput, score : scoreInput};

localStorage.setItem("score", JSON.stringify(score));




// create highscore page that let user enter their initals and score from quiz

//create 5 multiple choice questions that returns correct or incorrect and keep score 
//if incorrect timer decrease time
//if timer hit 0 or all question answered game is over take user to highscore page
