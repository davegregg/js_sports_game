const oneShots = document.querySelector("#teamone-shoot-button");
oneShots.addEventListener("click", function Random() {
    console.log ("Team one shot taken");
    document.getElementById("teamone-numshots").innerText++;
    if (Math.floor(Math.random() * 2 ) > 0 ) {
        document.getElementById("teamone-numgoals").innerHTML++;
    } 
})

const twoShots = document.querySelector("#teamtwo-shoot-button");
twoShots.addEventListener("click", function Random() {
    console.log ("Team two shot taken");
    document.getElementById("teamtwo-numshots").innerText++;
    if (Math.floor(Math.random() * 2 ) > 0 ) {
    document.getElementById("teamtwo-numgoals").innerText++;
    }
})

const resets = document.querySelector("#reset-button");
resets.addEventListener("click", function () {
    console.log ("Game Reset");
    document.getElementById("num-resets").innerText++;
    document.getElementById("teamone-numshots").innerText = 0;
    document.getElementById("teamone-numgoals").innerText = 0;
    document.getElementById("teamtwo-numshots").innerText = 0;
    document.getElementById("teamtwo-numgoals").innerText = 0;
})
