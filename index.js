/* let savedData = localStorage.getItem('countData'); */
let scoreHome = 0;
let scoreGuest = 0;
let foulHome = 0;
let foulGuest = 0;

let homeScoreNum = document.getElementById("home-score-num");
let guestScoreNum = document.getElementById("guest-score-num");

let homeFoulNum = document.getElementById("home-fouls-num");
let guestFoulNum = document.getElementById("guest-fouls-num");

let restartEl = document.getElementById("restart"); // restart element
let homeScoreBorder = document.getElementById("home-score-num");
let guestScoreBorder = document.getElementById("guest-score-num");

function addScore(team, points) {
  if (team === 'home') {
    scoreHome += points;
    homeScoreNum.innerText = scoreHome;
  } else if (team === 'guest') {
    scoreGuest += points;
    guestScoreNum.innerText = scoreGuest;
  }
  highlight()
}

function addFoul(team, points) {
    if (team === 'home') {
      foulHome += points;
      homeFoulNum.innerText = foulHome;
    } else if (team === 'guest') {
      foulGuest += points;
      guestFoulNum.innerText = foulGuest;
    }
  }

  function highlight() {
    if (scoreHome > scoreGuest) {
        homeScoreBorder.style.border = "2px solid green";
        guestScoreBorder.style.border = "2px solid red";
    }
    else if (scoreGuest > scoreHome) {
        guestScoreBorder.style.border = "2px solid green";
        homeScoreBorder.style.border = "2px solid red";
    }
    else if (scoreGuest = scoreHome) {
        homeScoreBorder.style.border = "2px solid yellow";
        guestScoreBorder.style.border = "2px solid yellow";
    }
    else {
        homeScoreBorder.style.border = "none";
        guestScoreBorder.style.border = "none";
    }
}
    
function restart() {
    scoreHome = 0;
    scoreGuest = 0;
    homeScoreNum.innerText = scoreHome;
    guestScoreNum.innerText = scoreGuest;
    foulHome = 0;
    foulGuest = 0;
    homeFoulNum.innerText = foulHome;
    guestFoulNum.innerText = foulGuest;
    highlight()
}
/* TODO: SAVE FUNC 
localStorage.setItem('countData', saveEl.textContent); // Store count data in localStorage
 */