let oneNumShots = 1
const oneShots = document.querySelector("#teamone-shoot-button");
oneShots.addEventListener("click", function Random() {
    console.log ("Team one shot taken");
    document.getElementById("teamone-numshots").innerText +++ oneNumShots;
    document.getElementById("teamone-numgoals").innerText -= Math.floor(Math.random() * 2);
})



let twoNumShots = 1
const twoShots = document.querySelector("#teamtwo-shoot-button");
twoShots.addEventListener("click", function Random() {
    console.log ("Team two shot taken");
    document.getElementById("teamtwo-numshots").innerText +++ twoNumShots;
    document.getElementById("teamtwo-numgoals").innerText -+ Math.floor(Math.random() * 2);
})

let numResets = 1
const resets = document.querySelector("#reset-button");
resets.addEventListener("click", function () {
    console.log ("Game Reset");
    document.getElementById("num-resets").innerText +++ numResets;
    document.getElementById("teamone-numshots").innerText = 0;
    document.getElementById("teamone-numgoals").innerText = 0;
    document.getElementById("teamtwo-numshots").innerText = 0;
    document.getElementById("teamtwo-numgoals").innerText = 0;
})
