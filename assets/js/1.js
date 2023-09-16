export function toggleNav() {
    const menuOffcanvas = document.getElementById("menu-offcanvas"); // We assign the offcanvas menu to a variable.
    const menuWidth = menuOffcanvas.style.width; // We obtain the width of the offcanvas menu and assign it to a variable.
    const hamburger = document.querySelector(".hamburger"); // We select the hamburger button.
    //const offcanvasFooter = document.querySelector(".offcanvas-footer"); // We select the offcanvas footer. ABANDONED. LEFT FOR REFERENCES

    if (menuWidth === "250px") { // If the width of the offcanvas menu is 250 pixels and/or is currently open...
        menuOffcanvas.style.width = "0"; // We set the width to 0 pixels.
        hamburger.classList.remove("is-active"); // We remove the "is-active" class.
        //offcanvasFooter.style.setProperty("position", "static", "important"); // We apply the style. It's not elegant or optimal but it works! ABANDONED. LEFT FOR REFERENCES
    } else { // If the width of the offcanvas menu is 0 pixels and/or is currently closed...
        menuOffcanvas.style.width = "250px"; // We set the width to 250 pixels.
        hamburger.classList.add("is-active"); // We add the "is-active" class.
        //offcanvasFooter.style.setProperty("position", "fixed", "important"); // We apply the style. It's not elegant or optimal but it works! ABANDONED. LEFT FOR REFERENCES
    }
}

export function scrollToSection(event) {
    toggleNav(); // We call the function toggleNav() so that our offcanvas menu closes when we scroll to a section of the page.

    event.preventDefault(); // We prevent the default behaviour of the navigation.

    const targetId = this.getAttribute("href").substring(1); // We obtain the href attribute of the link and assign it to a variable

    const targetSection = document.getElementById(targetId); // We obtain the target section by its ID.

    targetSection.scrollIntoView({ behavior: "smooth" }); // We move smoothly towards the target.
}