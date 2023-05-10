// Countdown Timer
const id = (idName) => {
    return document.getElementById(idName);
};


const day = id("day");
const hrs = id("hrs");
const mins = id("mins");
const secs = id("secs");


function countdownTimer () {
    function countdown () {
        const currentDay = new Date().getDate();
        const endDate = new Date(`May ${currentDay + 1} 2023 00:00:00`);
        const currentDate = new Date();
        const periodLeft = endDate - currentDate;


        let secsRem = Math.floor(periodLeft / 1000);
        let minsRem = Math.floor(secsRem / 60);
        let hrsRem = Math.floor(minsRem / 60);
        let dayRem = Math.floor(hrsRem / 24);

        secsRem = secsRem % 60;
        minsRem = minsRem % 60;
        hrsRem = hrsRem % 24;
        dayRem = dayRem % 7;



        day.innerHTML = formatTime(dayRem) + "<br> days";
        hrs.innerHTML = formatTime(hrsRem) + "<br> hours";
        mins.innerHTML = formatTime(minsRem) + "<br> minutes";
        secs.innerHTML = formatTime(secsRem) + "<br> seconds";
    }


    function formatTime (time) {
        // if(time < 10) {
        //     return `0${time}`;
        // }
        // return time;
        return time < 10 ? `0${time}` : time;
    }

    setInterval(countdown, 1000);

}

countdownTimer()