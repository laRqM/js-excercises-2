/*
Build a function that detects the network status and shows a message when online or offline.
*/

export function networkStatus() {
    const div = document.getElementById("div-network"); // We obtain the HTML element and assign it to a variable.
    const img = document.getElementById("img-network"); // We obtain the HTML element and assign it to a variable.
    const onlineMessage = "Network connection reestablished"; // We set the onlineMessage constant with a string.
    const offlineMessage = "Network connection lost"; // We set the offlineMessage constant with a string.

    function showMessage(message, className, imageUrl) { // Function to show the message. It receives the message, the class name and URL of the image to display.
        div.textContent = message; // We set the content of div constant with the message variable received.
        div.classList.remove("online", "offline"); // We remove the classes online and offline from div constant.
        div.classList.add(className); // We add the class received to the div constant.
        img.innerHTML = imageUrl ? `<img class="img-no-network" src="${imageUrl}" alt="No internet connection">` : ""; // If imageUrl is true, we send the image HTML tag. Else, we send nothing.
    }

    window.addEventListener("offline", function (event) { // We add and EvenListener to the window to know if we go offline.
        showMessage(offlineMessage, "offline", "/assets/img/img-network.png"); // We send the parameters to the function showMessage.
    });

    window.addEventListener("online", function (event) { // We add and EvenListener to the window to know if we go online.
        showMessage(onlineMessage, "online", ""); // We send the parameters to the function showMessage.

        setTimeout(function () { // We set a timeout to remove the classes online and offline.
            div.textContent = ""; // We set the content of the constant div to nothing.
            div.classList.remove("online", "offline"); // We remove the classes online and offline from the constant div.
            img.innerHTML = ""; // We set the constant img to nothing.
        }, 5000); // We apply a delay of 5 seconds.
    });
}