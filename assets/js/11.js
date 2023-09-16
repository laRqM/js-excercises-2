/*
Build a function that allows the usage of a webcam. Show the realtime video in the page.
*/

export function webcamDetection() {
    document.addEventListener("DOMContentLoaded", () => { // We add an EventListener of the type DOMContentLoaded to the document.
        const video = document.getElementById("video"); // We obtain the HTML element and assign it to a variable.
        const startButton = document.getElementById("startButton"); // We obtain the HTML element and assign it to a variable.

        async function startWebcam() { // Function to start the webcam.
            // The async will determine that the function can contain asynchronous operations. Which means it can wait the resolution of the Promises with the "await".
            try {
                video.srcObject = await navigator.mediaDevices.getUserMedia({video: true}); // We request access to the webcam. Once the Promise has been resolved, we configure el video element in the page.
                // navigator.mediaDevices is an object that grants access to multimedia devices.
                // getUserMedia({ video: true }) asynchronous function used to grant access to the user's webcam.
                // The await is used in an asynchronous function, and it waits for the Promise to be resolved before continuing with the execution of the code.
            } catch (error) { // We catch the error.
                console.error("Error accessing webcam:", error); // We print the error in the console.
            }
        }

        startButton.addEventListener("click", () => { // We add and EventListener to the type click to the startButton.
            startWebcam(); // We start the webcam.
            startButton.disabled = true; // We disable the button when the webcam is activated.
        });

        window.addEventListener("beforeunload", () => { // We add an EvenLister of the type beforeunload to the window.
            // Therefore, this function will allow to stop the webcam when the window is closed.
            const stream = video.srcObject; // We capture the media flow from the webcam that's showing in the video tag.
            const tracks = stream.getTracks(); // We access oll of the media flow tracks that are part of the media flow from the webcam.

            tracks.forEach((track) => { // For each media flow track...
                track.stop(); // We stop all of them.
            });
        });
    });
}