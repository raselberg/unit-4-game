// // Create each jewel as a button

// // Generate random number for the entirety of the game

// // Add a specific amount of points to each jewel

// // Add points from jewels when clicked to total score

// // Hide individual jewel points until the player clicks a jewel.

// // On click, players score counter updates.

// // Wins go up if their total score matches the number from beginning game.

// // Losses go up if their score goes above the random number.

// // The game restarts whenever the player wins or loses.

// // When the game begins again, the player should see a new random number. 

// // On restart jewels will have four new hidden values. 

// // User's score (and score counter) will reset to zero.

// // Keep track of player wins and losses. 

// // DO NOT REFREASH PAGE UNLESS YOU WANT TO RESTART GAME

$(document).ready(function() {
  var randomNumber = Math.floor(Math.random() * ((100 - 10) +1) + 10);
  $("#random").html(randomNumber);
  console.log (randomNumber);

function get_id() {
  var jewelID = Math.floor(Math.random()*9) + 1;
  console.log(jewelID);
  return jewelID;
}

var jewelOne = get_id();
var jewelTwo = get_id();
var jewelThree = get_id();
var jewelFour = get_id();


    var wins = 0;
    var losses = 0;  
    var totalScore = 0;

    $('.jewelOne').click(() => {
        totalScore = totalScore + jewelOne;
        button();
    });
    $('.jewelTwo').click(() => {
        totalScore = totalScore + jewelTwo;
        button();
    });
    $('.jewelThree').click(() => {
        totalScore = totalScore + jewelThree;
        button();
    });
    $('.jewelFour').click(() => {
        totalScore = totalScore + jewelFour;
        button();
    });

    function button() {
        $('#totalscore').text(totalScore);
        if (totalScore === randomNumber) {
            wins++;
            $('#wins').text(wins);
        } 
        else if (totalScore > randomNumber) {
            losses++;
            $('#losses').text(losses);
        } 
        else {return;
        }
        reset();
        resetTwo();
    }
    function reset() {
        totalScore = 0;
        $('#totalscore').text(totalScore);
    }
    function resetTwo() {
        randomNumber = Math.floor(Math.random() * ((100 - 10) + 1) + 10);
        $('#random').html(randomNumber);
        jewelOne = Math.floor(Math.random() * 9)+1;
        jewelTwo = Math.floor(Math.random() * 9)+1;
        jewelThree = Math.floor(Math.random() * 9)+1;
        jewelFour = Math.floor(Math.random() * 9)+1;
    }
});
