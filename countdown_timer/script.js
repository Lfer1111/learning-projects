const newYears = "01 Jan 2022"

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const uniqueSec = (newYearsDate - currentDate) / 1000;
    var seconds = Math.floor(uniqueSec % 60);
    var mins = Math.floor((uniqueSec / 60) % 60);
    var hours = Math.floor((uniqueSec / 60 / 60) % 24);
    var days = Math.floor(uniqueSec / 60 / 60 / 24);

    seconds = zeroTime(seconds);
    mins = zeroTime(mins);
    hours = zeroTime(hours);
    days = zeroTime(days);

    //console.log(uniqueSec);
    //console.log(newYearsDate - currentDate);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("seconds").innerHTML = seconds;
}

// add a "0" before the one digit numbers
function zeroTime(i) {
    if(i<10) {
        i = "0" + i;
    }
    return i;
}
// inicial call
countdown(); 

setInterval(countdown, 1000);