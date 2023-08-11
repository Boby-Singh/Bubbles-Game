var clutter = "";
var hval = 0;
var timer = 60;
var score = 0;

function make_bubble() {
    for (var i = 1; i <= 90; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
};

function getNewHit() {
    hval = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hval;
};

function runtime() {
    var timeint = setInterval(function() {
        if (timer > 0) {
            timer--;
            document.querySelector("#ctimer").textContent = timer;
        } else {
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over Your Score is = ${score}</h1>`;
        }

    }, 1000);

};

function increasescore() {
    score += 10;
    document.querySelector("#score").textContent = score;
};

document.querySelector("#pbtm").addEventListener("click", function(dets) {
    var clickednum = Number(dets.target.textContent);
    if (clickednum === hval) {
        increasescore();
        make_bubble();
        getNewHit();
    }
});


runtime();
make_bubble();
getNewHit();
increasescore()