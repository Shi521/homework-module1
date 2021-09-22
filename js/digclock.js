function currentTime() {
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var ampm;
    var utchr = d.getUTCHours();
    var timeDiff;
    var adjTimeDiff;
    var timeZone;

    if (sec < 10) {
      sec = "0" + sec;
    }
    if (min < 10) {
      min = "0" + min;
    }

    if (hr == 12) {
      ampm = "PM";
    } else if (hr > 12) {
      hr -= 12;
      ampm = "PM";
    } else {
      ampm = "AM";
    }

    timeDiff = utchr - hr //difference between local time and UTC
    if (timeDiff < 0) {
      adjTime = timeDiff -=1
    } else {
      adjTime = timeDiff
    }
    
    if (adjTimeDiff== 8){
      timeZone= "PT"
    } else if (adjTimeDiff ==7) {
      timeZone= "MT"
    } else if  (adjTimeDiff ==6) {
      timeZone= "CT"
    } else if (adjTimeDiff == 5) {
      timeZone= "ET"
    } else {
      timeZone="GMT"
    }
    

    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

    document.getElementById("clock").innerText = time;
    setInterval(currentTime, 1000);
  }
  currentTime();