/*
Build a scrollspy
*/

export function scrollSpy() {
    const sections = document.querySelectorAll(".section-content"); // We obtain the HTML element and assign it to a constant.
    const link = document.querySelectorAll(".nav-link"); // We obtain the HTML element and assign it to a constant.

    const options = { // These are options for the Intersection Observer.
        root: null, // We use the viewport as the "root" reference element.
        rootMargin: "0px", // No additional margin.
        threshold: 0.5, // When at least 50% of the element is visible.
    };

    function handleIntersection(entries, observer) { // Callback function to handle the entries from the Intersection Observer.
        entries.forEach((entry) => { // For each entry...
            if (entry.isIntersecting) { // If the entry is completely visible in the viewport...
                const sectionId = entry.target.id; // The constant sectionId is equal to id of the target entry.

                document.querySelectorAll(".nav-link").forEach((link) => {
                    // This will remove the class 'active' of all the links in the navigation.
                    link.classList.remove("active");
                });

                const link = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                // This will add the class 'active' to it's corresponding navigation link.
                if (link) {
                    link.classList.add("active");
                }
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, options); // We create an instance of the Intersection Observer.

    sections.forEach((section) => {
        // We observe each section.
        observer.observe(section);
    });
}