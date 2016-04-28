var run = 0,
    cycleTime = 30000,
    //cycler = window.setInterval("cycleFeed()", cycleTime),
    updateInterval = 100,
    debugTimer = window.setInterval("updateTimer()", updateInterval),
    timeLeft = 30000;

if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        'use strict';
        if (typeof start !== 'number') {
            start = 0;
        }

        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
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

}

function forceChange() {
    'use strict';

    cycleFeed();
}

function updateTimer() {
    'use strict';

    var timerText = document.getElementById("timer-text"),
        timeString;
    timeLeft = timeLeft - updateInterval;
    if (timeLeft <= 0) {
        cycleFeed();
        timeLeft = 30000;
    }
    timeString = (timeLeft / 1000).toString();
    if (!timeString.includes(".")) {
        timeString = timeString + ".0";
    }
    timerText.innerHTML = timeString;
}

cycleFeed();
