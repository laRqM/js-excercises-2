/*
Create a button to apply dark mode or light mode to the side.
*/

export function toggleMode() {
    const button = document.getElementById("darkmodeBtn"); // We obtain the HTML element and assign it to a variable.
    const sections = document.querySelectorAll("section"); // We obtain the HTML element and assign it to a variable.
    const menu = document.getElementById("menu-offcanvas"); // We obtain the HTML element and assign it to a variable.
    const isDarkMode = localStorage.getItem("darkMode") === "true"; // We verify if the dark mode is active.

    function enableDarkMode() { // Function to enable dark mode.
        sections.forEach((section) => { // For each section in our HTML...
            section.style.setProperty("background-color", "black", "important"); // We apply a background color to the section.
            section.style.color = "white"; // We apply a color to the text inside a section.
        });
        menu.style.backgroundColor = "#cccccc"; // We apply a background color to the menu.
        button.classList.add("darkOn"); // We add the class darkOn to the toggle button.
        button.classList.remove("lightOn"); // We remove the class lightOn to the toggle button.
        button.innerHTML = '<i class="fa-regular fa-sun"></i>'; // We change the button icon.
        localStorage.setItem("darkMode", "true"); // We save the current state to LocalStorage
    }

    function enableLightMode() { // Function to enable light mode.
        sections.forEach((section) => { // For each section in our HTML...
            section.style.backgroundColor = "lightblue"; // We apply a background color to the section.
            section.style.color = "black"; // We apply a color to the text inside a section.
        });
        menu.style.backgroundColor = "#f1f1f1"; // We apply a background color to the menu.
        button.classList.remove("darkOn"); // We remove the class darkOn to the toggle button.
        button.classList.add("lightOn"); // We add the class lightOn to the toggle button.
        button.innerHTML = '<i class="fa-solid fa-moon"></i>'; // We change the button icon.
        localStorage.setItem("darkMode", "false"); // We save the current state to LocalStorage
    }

    if (isDarkMode) { // If dark mode is the initial value stored in LocalStorage...
        enableDarkMode(); // We execute the function for dark mode.
    } else { // If is not...
        enableLightMode(); // We execute the function for light mode.
    }

    button.addEventListener("click", () => { // We add an EventListener to the toggle button.
        if (button.classList.contains("darkOn")) { // If the button contains the class darkOn...
            enableLightMode(); // We enable light mode.
        } else { // If does not contain the class darkOn...
            enableDarkMode(); // We enable dark mode.
        }
    });
}
