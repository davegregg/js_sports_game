const audioGoal = new Audio("http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Basketball%20Swish-4011-Free-Loops.com.mp3");

const audioBuzzer = new Audio("http://thebeautybrains.com/wp-content/uploads/podcast/soundfx/shotclockhorn.wav");

const oneShots = document.querySelector("#teamone-shoot-button");
oneShots.addEventListener("click", function Random() {
    console.log ("Team one shot taken");
    document.getElementById("teamone-numshots").innerText++;
    if (Math.floor(Math.random() * 2 ) > 0 ) {
        document.getElementById("teamone-numgoals").innerHTML++;
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
    audioBuzzer.play();
    document.getElementById("num-resets").innerText++;
    document.getElementById("teamone-numshots").innerText = 0;
    document.getElementById("teamone-numgoals").innerText = 0;
    document.getElementById("teamtwo-numshots").innerText = 0;
    document.getElementById("teamtwo-numgoals").innerText = 0;
})


