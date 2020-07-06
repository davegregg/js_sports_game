const audioGoal = new Audio("http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Basketball%20Swish-4011-Free-Loops.com.mp3");
const audioBuzzer = new Audio("http://thebeautybrains.com/wp-content/uploads/podcast/soundfx/shotclockhorn.wav");

const team1 = new Team("Discombobulated");
const team1ShotsTakenElement = document.getElementById("teamone-numshots");
const team1GoalsElement = document.getElementById("teamone-numgoals");
const team1Button = document.querySelector("#teamone-shoot-button");

const team2 = new Team("The EveryBuddies");

team1Button.addEventListener("click", function () {
    console.log ("Team 1 has taken a shot!");

    const shotsTaken = team1.shoots();
    team1ShotsTakenElement.innerText = shotsTaken;

    if (team1.checkForGoal()) {
        team1GoalsElement.innerHTML = team1.getGoals();
        audioGoal.play();
    }
})

const twoShots = document.querySelector("#teamtwo-shoot-button");
twoShots.addEventListener("click", function Random() {
    console.log ("Team two shot taken");
    document.getElementById("teamtwo-numshots").innerText++;
    if (Math.floor(Math.random() * 2 ) > 0 ) {
        document.getElementById("teamtwo-numgoals").innerText++;
        audioGoal.play();
    }
})

const resets = document.querySelector("#reset-button");
resets.addEventListener("click", function () {
    console.log ("Game Reset");

    team1.reset()
    team2.reset()

    audioBuzzer.play();
    document.getElementById("num-resets").innerText++;
    document.getElementById("teamone-numshots").innerText = 0;
    document.getElementById("teamone-numgoals").innerText = 0;
    document.getElementById("teamtwo-numshots").innerText = 0;
    document.getElementById("teamtwo-numgoals").innerText = 0;
})


