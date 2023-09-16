/*
Build a function for a lottery.
*/

export function digitalLottery() {
    const content = document.getElementById("lottery-content"); // We obtain the HTML element and assign it to a constant.
    const prize = document.getElementById("lottery-prize"); // We obtain the HTML element and assign it to a constant.
    const lotteryButton = document.getElementById("lottery-button"); // We obtain the HTML element and assign it to a constant.

    const images = []; // Array for the images

    for (let i = 0; i < 8; i++) { // Not optimal because we are giving the max value.
        const img = document.createElement("img"); // We create an img HTML element and store it in the constant img.
        img.className = "img-lottery"; // We add the class img-lottery to the img HTML tag.
        img.src = `https://loremflickr.com/g/320/240/car?random=${i}`; // We add the source URL of the image.
        img.alt = `lottery-img-${i}`; // We add the alt of the image and concatenate the current number of the loop.
        images.push(img); // We push the finished img to the array.
        content.appendChild(img); // We send the image to the HTML.
        content.append("\u00A0"); // We append a white space after each image.
    }

    lotteryButton.addEventListener("click", () => { // We add an EventListener of the type click to lotteryButton.
        const randomIndex = Math.floor(Math.random() * 8); // We generate a random number between 0 and 7. This is the image index.

        // Actualiza el elemento "lottery-prize" con la imagen seleccionada
        if (prize && images[randomIndex]) { // If both prize and images[with the index obtained by the randomIndex] are true...
            prize.innerHTML = ""; // We set the content of prize to nothing.
            const clonedImage = images[randomIndex].cloneNode(true); // We clone the image that's in a random index of the array and store it in the constant.
            prize.appendChild(clonedImage); // We pass the obtained image to prize constant, so it will be displayed in the HTML.
        }
    });

    /*export function digitalLottery() { // FIRST TRY - IGNORE
    const content = document.getElementById("lottery-content");
    const prize = document.getElementById("lottery-prize");
    const lotteryButton = document.getElementById("lottery-button");

    for (let i = 0; i < 8; i++) {
        const img = document.createElement("img");
        img.className = "img-lottery";
        img.src = `https://loremflickr.com/g/320/240/car?random=${i}`;
        img.alt = `lottery-img-${i}`;
        content.appendChild(img);
        content.append("\u00A0");
    }
}*/
}
