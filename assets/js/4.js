/*
Create a countdown
*/

const countdownElement = document.getElementById("countdown"); // We obtain the HTML element and assign it to a variable.

const targetDate = new Date("2024-12-09T23:59:59"); // The target date.

export function updateCountdown() {
    const currentDate = new Date(); // We create a Date object.
    const timeDifference = targetDate - currentDate; // The time difference will be equal to the target date minus the current date.

    if (timeDifference <= 0) { // If the time difference is equal or lower than 0...
        countdownElement.textContent = "Countdown finished!"; // The countdown has finished. We display a message.
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // We convert the milliseconds of timeDifference to days by dividing for the result of the multiplication.
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // We convert the milliseconds of timeDifference to hours by calculating the remainder by dividing the time difference by the number of milliseconds in a day. The result is then divided by the milliseconds in an hour.
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); // We convert the milliseconds of timeDifference to minutes by calculating the remainder by dividing the time difference by the number of milliseconds in an hour. The result is then divided by the milliseconds in an minute.
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000); // We convert the milliseconds of timeDifference to minutes by calculating the remainder by dividing the time difference by the number of milliseconds in a second. The result is then divided by the milliseconds.
    // Math.floor is used to round the number that we get as result of the math operation.

    countdownElement.textContent = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`; // We show the result in the HTML.
}