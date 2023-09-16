/*
Build a function to silence a video when we change the browser tab.
*/

export function fancyVideo() {
    let video = document.getElementById("fancy-video"); // We obtain the HTML element and assign it to a constant.

    if (!video) { // If there is no video...
        console.error("Video file not found.");
        return;
    }

    let intersectionObserver;

    function playVideo() { // Function to play the video.
        video.play(); // We play the video.
    }

    function pauseVideo() { // Function to stop the video.
        video.pause(); // We pause the video.
    }

    function muteVideo() { // Function to mute the video.
        video.muted = true; // We mute the video.
    }

    function unmuteVideo() { // Function to unmute the video.
        video.muted = false; // We unmute the video.
    }

    function setupIntersectionObserver() { // Function to configure the Intersection Observer.
        const options = { // Options for the Intersection Observer
            threshold: 0.5
        };

        intersectionObserver = new IntersectionObserver((entries) => { // We create a Intersection Observer and we pass the callback function as argument.
            // The callback function will execute anytime the observed element enters or gets out of the viewport.
            entries.forEach((entry) => { // Inside the callback function, we loop through the entries that are passed as arguments.
                if (entry.isIntersecting) { // If the video is visible in the viewport...
                    playVideo(); // Play the video.
                    unmuteVideo(); // Unmute the video.
                } else { // IF the video is not visible in the viewport...
                    pauseVideo(); // Pause the video.
                }
            });
        }, options);

        intersectionObserver.observe(video); // The observer will pay attention in the view changes of the video variable.
    }

    document.addEventListener("visibilitychange", () => { // We add an EventListener of the type visibilitychange to the document. This will handle the browser tab change.
        if (document.hidden) { // If change to another tab...
            muteVideo(); // We mute the video.
        } else { // If we return to the tab...
            unmuteVideo(); // We unmute the video.
        }
    });

    document.addEventListener("DOMContentLoaded", () => { // We add an EventListener of the type visibilitychange to the document. This will initialize the Intersection Observer when the document is ready.
        setupIntersectionObserver(); // We execute the function.
    });
}