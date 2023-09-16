/*
Create a responsive tester. A form will receive the width and height value and a URL.
When the form is submitted, a new window should open and the page passed by the URL should be in that window.
*/

export function responsiveTest() {
    const form = document.getElementById("tester"); // We obtain the HTML element and assign it to a variable.
    const closeBtn = document.getElementById("close-test"); // We obtain the HTML element and assign it to a variable.
    let testWindow; // Reference to the popup window.

    form.addEventListener('submit', (event) => { // We add an EventListener of the type submit to the form variable.
        event.preventDefault(); // We prevent the default behaviour.
        const windowFeatures = `width=${form.width.value},height=${form.height.value}`; // We create the const and pass whe values of width and height from the form variable.
        testWindow = window.open(form.url.value, "testWindow", windowFeatures); // We open a popup window
        // form.url.value is the value given by the user in the form. "form" is the variable. "url" is the name of the input in the HTML. "value" will return the value stored in "url".
        // testWindow will be the name of the popup window.
        // windowFeatures is the const that we created before. It contains the values of width and height that the popup window will have.
    });

    closeBtn.addEventListener('click', (event) => { // We add an EventListener of the click type to the close button.
        if (testWindow) { // If testWindow is defined...
            try {
                testWindow.close(); // We try to close the window.
            } catch (error) { // If the closing of the window fails...
                console.error("Error trying to close the popup window:", error); // We send a message to the console.
            }
        }
    });
}


/*export function responsiveTest() { // THIS FUNCTION DOES NOT WORK IN FIREFOX AND CHROME
    const form = document.getElementById("tester");
    const closeBtn = document.getElementById("close-test");
    let testWindow;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const windowFeatures = `width=${form.width.value},height=${form.height.value}`;
        testWindow = window.open(form.url.value, "testWindow", windowFeatures);
    });

    closeBtn.addEventListener('click', (event) => {
        if (testWindow && !testWindow.closed) {
            testWindow.close();
        }
    });
}*/