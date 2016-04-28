var run = 0,
    cycleTime = 30000,
    cycler = window.setInterval("cycleFeed()", cycleTime),
    debugTimer = window.setInterval("updateTimer()", 1000),
    timeLeft = 30;

function updateTimer() {
    'use strict';

    var timerText = document.getElementById("timer-text");
    timeLeft = timeLeft - 1;
    timerText.innerHTML = timeLeft.toString();
}

function forceChange() {
    'use strict';
    
    clearInterval(cycler);
    cycleFeed();
    cycler = window.setInterval("cycleFeed()", cycleTime);
}

function cycleFeed() {
    'use strict';

    var frameId,
        frameNum,
        feeds = document.getElementsByClassName("feed"),
        i;

    for (i = 0; i < feeds.length; i++) {
        feeds[i].style.display = "none";
    }

    frameNum = run % feeds.length;
    frameId = "feed" + frameNum.toString();
    document.getElementById(frameId).style.display = "block";
    run++;
    timeLeft = 30;

}