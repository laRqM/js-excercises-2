/*
Make a scroll to top button.
*/

export function scrollToTopButton() {
    const scrollButton = document.getElementById('scrollTop'); // We obtain the HTML element and assign it to a variable.

    window.addEventListener('scroll', () => { // We add an EvenListener to detect when the user scroll through the page.
        if (window.scrollY > 300) { // If the window scroll in the Y axis is greater than 300 pixels...
            scrollButton.style.display = 'block'; // We show the scroll to top button.
        } else { // If the window scroll in the Y axis is lower than 300 pixels...
            scrollButton.style.display = 'none'; // We hide the scroll to top button.
        }
    });

    scrollButton.addEventListener('click', () => { // We add an EvenListener to detect when the user clicks on the scroll to top button.
        window.scrollTo({ // Function to move the current window.
            top: 0, // We move the window to 0 pixels or to the top.
            behavior: 'smooth' // The behavior of the scroll will be smooth.
        });
    });
}