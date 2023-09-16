/*
Device detection. Build a function that detects both operating system and browser.
*/

export function userAgentDetection() {
    const content = document.getElementById("user-agent-content"); // We obtain the HTML element and assign it to a variable.
    const platform = document.getElementById("user-agent-platform"); // We obtain the HTML element and assign it to a variable.
    const browser = document.getElementById("user-agent-browser"); // We obtain the HTML element and assign it to a variable.
    const contentBrowser = document.getElementById("user-agent-perBrowser"); // We obtain the HTML element and assign it to a variable.
    const contentPlatform = document.getElementById("user-agent-perPlatform"); // We obtain the HTML element and assign it to a variable.

    const userAgent = navigator.userAgent; // We save the User Agent string in the variable userAgent.
    let platformName = navigator.platform; // We save the platform string in the variable platformName.
    let browserName = "Could not detect the browser"; // A string to indicate that the browser couldn't be detected.

    if (userAgent.includes("Chrome") || userAgent.includes("Chromium") || userAgent.includes("CriOS")) { // If userAgent contains the word Chrome, Chromium or CriOS...
        browserName = "Chrome"; // Now the value stored in browserName will be Chrome.
        contentBrowser.textContent = "Content only visible in Chrome and Chromium based browsers." // We set the content in the variable contentBrowser.
    } else if (userAgent.includes("Firefox") || userAgent.includes("FxiOS")) { // If userAgent contains the word Firefox...
        browserName = "Firefox"; // Now the value stored in browserName will be Firefox.
        contentBrowser.textContent = "Content only visible in Firefox"; // We set the content in the variable contentBrowser.
    } else if (userAgent.includes("Safari")) { // If userAgent contains the word Safari...
        browserName = "Safari"; // Now the value stored un browserName will be Safari.
        contentBrowser.textContent = "Content only visible in Safari"; // We set the content in the variable contentBrowser.
    } else if (userAgent.includes("OPR")) { // If the userAgent contains the word OPR...
        browserName = "Opera"; // Now the value stored in browserNAme will be Opera.
        contentBrowser.textContent = "Content only visible in Opera"; // We set the content in the variable contentBrowser.
    } else if (userAgent.includes("Edg")) { // If userAgent contains the word Edg...
        browserName = "Edge"; // Now the value stored in browserName will be Edge.
        contentBrowser.textContent = "Content only visible in Microsoft Edge"; // We set the content in the variable contentBrowser.
    }

    function isMobile() { // Function to detect if the user is using a mobile device.
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        // We use regular expressions to search for coincidences in navigator.userAgent.
        // test() will check if the specified regular expression matches the provided string(navigator.userAgent).
        // If there is a coincidence, it returns true. Otherwise, it returns false.
        // Or, if true, is a mobile device. If false, it's not.
    }

    content.textContent = userAgent; // We set the content in the variable content with the string from userAgent variable.
    platform.textContent = platformName; // We set the content in the variable content with the string from platformName variable.
    browser.textContent = browserName; // We set the content in the variable browser with the string from browserNAme variable.

    if (isMobile()) { // If isMobile returns true..
        contentPlatform.textContent = "Content only visible in mobile browsers"; // We set the content in the variable contentPlatform.
    } else { // If isMobile returns false(is not a mobile device)...
        contentPlatform.textContent = "Content only visible in desktop browsers"; // We set the content in the variable contentPlatform.
    }
}