/*
Build a function to filter a search.
*/

export function searchFilters() {
    document.addEventListener("DOMContentLoaded", () => { // We add an EventListener of the type DOMContentLoaded
        const searchInput = document.getElementById("search-image"); // We obtain the HTML element and assign it to a constant.
        const images = document.querySelectorAll(".img-search"); // We obtain all the image elements and assign them to a constant.

        searchInput.addEventListener("input", () => { // We add an EventListener of the type input to the constant searchInput.
            const searchTerm = searchInput.value.trim().toLowerCase(); // The constant searchTerm is equal to the value of searchInput.
            // We remove the withe spaces at the start and end of the string, and we convert the string to a lower case.

            images.forEach((image) => { // For each image...
                const altText = image.getAttribute("alt").toLowerCase(); // The constant altText is equal to the attribute alt of the image and is converted to lower case.

                if (altText.includes(searchTerm)) { // If altText has the search term introduced by the user...
                    image.style.display = "inline-block"; // We display the image via CSS.
                } else { // If altText does not have the search term introduced by the user...
                    image.style.display = "none"; // We hide the image via CSS.
                }
            });
        });
    });
}