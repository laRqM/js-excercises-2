/*
Make a digital clock and an audible alarm. It should have 4 buttons:
     - Button 1: Starts the clock and it appears in the HTML. The button should be disabled when pressed and enabled when button 2 is pressed.
     - Button 2: Stops the clock and it disappears from the HTML.
     - Button 3: Starts an audible alarm that does not stop until button 4 is pressed. The button must be disabled when pressed and enabled when button 4 is pressed.
     - Button 4: Stops the audible alarm.
*/

const btnStartClock = document.getElementById("btn-start-clock"); // We obtain the HTML element by its ID, and then it's assigned to a variable.
const btnStopClock = document.getElementById("btn-stop-clock"); // We obtain the HTML element by its ID, and then it's assigned to a variable.
const spanClock = document.getElementById("js-clock"); // We obtain the HTML element by its ID, and then it's assigned to a variable.
let clockInterval; // Variable to mantain the reference to the interval.
let clockRunning = false; // Variable to track the state of the clock.

export function toggleClock() {
    if (!clockRunning) { // If clockRunning is false, we start the clock...
        btnStartClock.disabled = true; // We disable the start block button.
        btnStopClock.disabled = false; // We enable the stop clock button

        spanClock.style.display = "block"; // We display the clock.
        updateClock(); // We update the clock.

        clockInterval = setInterval(updateClock, 1000); // We start an interval so that the clock updates every second.

        clockRunning = true; // The state of clockRunning is set to true.
    } else { // if clockRunning is true, we stop the clock...
        btnStartClock.disabled = false; // We enable the start block button.
        btnStopClock.disabled = true; // We disable the stop clock button.

        clearInterval(clockInterval); // We stop the interval.
        spanClock.style.display = "none"; // We hide the clock.

        clockRunning = false; // The state of clockRunning is set to false.
    }
}

function updateClock() {
    const now = new Date(); // We create a Date object.
    spanClock.textContent = now.toLocaleTimeString(); // We set the content of spanClock to now variable and that variable is converted to a string.
}


const btnStartAlarm = document.getElementById("btn-start-alarm"); // We obtain the HTML element by its ID, and then it's assigned to a variable.
const btnStopAlarm = document.getElementById("btn-stop-alarm"); // We obtain the HTML element by its ID, and then it's assigned to a variable.
const audio = new Audio("assets/audio/clock-alarm.mp3"); // We create an Audio object and we pass the file path.
let clickedButton = false; // Variable to track the state of the button.

export function toggleAlarm() {
    if (!clickedButton) { // If clickedButton is false...
        btnStartAlarm.disabled = true; // We disable the start block button.
        btnStopAlarm.disabled = false; // We enable the stop clock button.

        audio.loop = true; // We loop the audio.
        audio.play(); // We play the audio.

        clickedButton = true; // We set the clickedButton variable to true.
    } else { // If clickedButton is true...
        btnStartAlarm.disabled = false; // We disable the start block button.
        btnStopAlarm.disabled = true; // We enable the stop clock button.

        audio.pause(); // We pause the audio.

        clickedButton = false; // We set clickedButton variable to false.
    }
}