/*
Build a responsive slider
*/

export function responsiveSlider() {
    const slider = document.querySelector(".slider"); // We obtain the HTML element and assign it to a constant.
    const prevBtn = document.getElementById("prevBtn"); // We obtain the HTML element and assign it to a constant.
    const nextBtn = document.getElementById("nextBtn"); // We obtain the HTML element and assign it to a constant.

    let currentIndex = 0; // We set the current index to 0

    const slides = slider.querySelectorAll("img"); // We obtain all the images at once.

    function showSlide(index) { // Function to show the current image
        // We go through each element(image) in the constant slides.
        // The constant "slides" represents the current image in the iteration, the i represents the index of that element.
        slides.forEach((slide, i) => { // For each image in slides constant...
            // The style of the current element in the constant "slide" is equal to...
            // i === index verifies if these two are the same. If they are, we apply the style "block". Otherwise, we apply "none".
            slide.style.display = i === index ? "block" : "none"; // We display or hide the images using ternary operators.
        });
    }

    showSlide(currentIndex); // We display the fist image.

    prevBtn.addEventListener("click", () => { // We add an EventListener of the type click to the constant prevBtn.
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // currentIndex equals to...
        // (currentIndex - 1 + slides.length) calculates the new index subtracting 1 to the current index and then adding the length of the slider (the total number of images in the slider).
        // % slides.length calculates the remainder of the division between the previous result and the length of the constant "slides". This ensures that the new calculated index is within the valid limits of the image index range.
        showSlide(currentIndex); // We call the function passing the index obtained.
    });

    nextBtn.addEventListener("click", () => { // We add an EventListener of the type click to the constant nextBtn.
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });
}