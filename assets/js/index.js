import { toggleNav, scrollToSection } from './1.js';
import { toggleClock, toggleAlarm } from './2.js';
import { keyboardShortcuts, miniGame } from "./3.js";
import { updateCountdown } from "./4.js";
import { scrollToTopButton } from "./5.js";
import { toggleMode } from "./6.js";
import { checkScreenWidth } from "./7.js";
import { responsiveTest } from "./8.js";
import { userAgentDetection } from "./9.js";
import { networkStatus } from "./10.js";
import { webcamDetection } from "./11.js";
import { geoDetection } from "./12.js";
import { searchFilters } from "./13.js";
import { digitalLottery } from "./14.js";
import { responsiveSlider } from "./15.js";
import { scrollSpy } from "./16.js";
import { fancyVideo } from "./17.js";
import { formValidation } from "./18.js";
import { textToSpeech } from "./19.js";

/*
=================================
========== EXERCISE 01 ==========
=================================
*/

const menuButton = document.getElementById("menu-button"); // We obtain the HTML element by its ID, and then it's assigned to a variable.
menuButton.addEventListener("click", toggleNav); // We add a EvenListener to menuButton. When a click is done on the menuButton, the function toggleNav() will be executed.

const menuLinks = document.querySelectorAll("#menu-offcanvas .offcanvas-content a"); // We select the HTML IDs and classes and assign them to a variable.
menuLinks.forEach(link => { // For each of the links in the variable menuLinks...
    link.addEventListener("click", scrollToSection); // We add them a EventListener. When a click is done on them, we execute the function scrollToSection.
});

const closeMenuButton = document.getElementById("close-menu-button"); // We obtain the HTML element by its ID, and then it's assigned to a variable.
closeMenuButton.addEventListener("click", toggleNav); // We add a EvenListener to closeMenuButton. When a click is done on the closeMenuButton, the function toggleNav() will be executed.

/*
=================================
========== EXERCISE 02 ==========
=================================
*/

const btnStartClock = document.getElementById("btn-start-clock"); // We obtain the HTML element by its ID, and then it's assigned to a variable.
const btnStopClock = document.getElementById("btn-stop-clock"); // We obtain the HTML element by its ID, and then it's assigned to a variable.

btnStartClock.addEventListener("click", toggleClock); // We add a EvenListener to menuButton. When a click is done on the btnStartClock, the function toggleClock() will be executed and the clock will appear.
btnStopClock.addEventListener("click", toggleClock); // We add a EvenListener to menuButton. When a click is done on the btnStopClock, the function toggleClock() will be executed and the clock will disappear.

const btnStartAlarm = document.getElementById("btn-start-alarm"); // We obtain the HTML element by its ID, and then it's assigned to a variable.
const btnStopAlarm = document.getElementById("btn-stop-alarm"); // We obtain the HTML element by its ID, and then it's assigned to a variable.

btnStartAlarm.addEventListener("click", toggleAlarm); // We add a EvenListener to menuButton. When a click is done on the btnStartClock, the function toggleClock() will be executed and the clock will appear.
btnStopAlarm.addEventListener("click", toggleAlarm); // We add a EvenListener to menuButton. When a click is done on the btnStopClock, the function toggleClock() will be executed and the clock will disappear.

/*
=================================
========== EXERCISE 03 ==========
=================================
*/

document.addEventListener('keydown', keyboardShortcuts); // We add an EventListener to the document of keydown type. When the key is pressed, the keyboardShortcuts function will be executed.
const ball = document.querySelector(".ball");
const gameArea = document.querySelector(".game-area");
miniGame(ball, gameArea);

/*
=================================
========== EXERCISE 04 ==========
=================================
*/

setInterval(updateCountdown, 1000);
updateCountdown();

/*
=================================
========== EXERCISE 05 ==========
=================================
*/

scrollToTopButton();

/*
=================================
========== EXERCISE 06 ==========
=================================
*/

toggleMode();

/*
=================================
========== EXERCISE 07 ==========
=================================
*/

checkScreenWidth();
window.addEventListener("resize", checkScreenWidth); // We add an EventListener that will execute the checkScreenWidth function when we resize the window.

/*
=================================
========== EXERCISE 08 ==========
=================================
*/

responsiveTest();

/*
=================================
========== EXERCISE 09 ==========
=================================
*/

userAgentDetection();

/*
=================================
========== EXERCISE 10 ==========
=================================
*/

networkStatus();

/*
=================================
========== EXERCISE 11 ==========
=================================
*/

webcamDetection();

/*
=================================
========== EXERCISE 12 ==========
=================================
*/

geoDetection();

/*
=================================
========== EXERCISE 13 ==========
=================================
*/

searchFilters();

/*
=================================
========== EXERCISE 14 ==========
=================================
*/

digitalLottery();

/*
=================================
========== EXERCISE 15 ==========
=================================
*/

responsiveSlider();

/*
=================================
========== EXERCISE 16 ==========
=================================
*/

scrollSpy();

/*
=================================
========== EXERCISE 17 ==========
=================================
*/

fancyVideo();

/*
=================================
========== EXERCISE 18 ==========
=================================
*/

//formValidation();
document.addEventListener("DOMContentLoaded", () => {
    formValidation();
});

/*
=================================
========== EXERCISE 19 ==========
=================================
*/

textToSpeech();
