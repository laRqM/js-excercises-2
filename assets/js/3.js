/*
Create an area in which a ball can be moved using the keyboard.
Additionally, create keyboard shortcuts to launch an alert, prompt and confirm windows.
*/

export function keyboardShortcuts(event) { // We define the function that will receive an Event object called event.
    if (event.ctrlKey || event.metaKey) { // If Ctrl/CMD key...
        switch (event.key) { // Switch/Case to detect if Ctrl/CMD have been pressed in combination with any of the following keys...
            case 'a': // If Ctrl/CMD + a have been pressed...
                event.preventDefault(); // We prevent the default behavior. For example, Ctrl+a can select all the elements.
                alert('Keyboard shortcut Ctrl/Cmd + A detected.\nThis is an alert.'); // We show the alert window.
                break; // We get out.
            case 'p':
                event.preventDefault(); // We prevent the default behavior. For example, Ctrl+p can print a page.
                prompt('Keyboard shortcut Ctrl/Cmd + P detected.\nThis is a prompt.'); // We show the prompt window.
                break; // We get out.
            case 'c':
                event.preventDefault(); // We prevent the default behavior. For example, Ctrl+c will copy to the clipboard and text or file selected.
                confirm('Keyboard shortcut Ctrl/Cmd + C detected.\nThis is a confirm.'); // We show the confirm window.
                break; // We get out.
        }
    }

    // ABANDONED. LEFT FOR REFERENCES...
    /*if ((event.ctrlKey || event.metaKey) && event.key === 'a') { // If Control/CMD Key and "a" key are pressed...
        event.preventDefault(); // We prevent the default behavior. For example, Ctrl+a can select all the elements.
        alert('Atajo de teclado Ctrl/Cmd + S detectado.\nEsto es un alert.'); // We show the alert window.
    }

    if ((event.ctrlKey || event.metaKey) && event.key === 'p') { // If Control/CMD Key and "p" key are pressed...
        event.preventDefault(); // We prevent the default behavior. For example, Ctrl+p can print a page.
        prompt('Atajo de teclado Ctrl/Cmd + P detectado.\nEsto es un prompt.'); // We show the prompt window.
    }

    if ((event.ctrlKey || event.metaKey) && event.key === 'c') { // If Control/CMD Key and "c" key are pressed...
        event.preventDefault(); // We prevent the default behavior. For example, Ctrl+c will copy to the clipboard and text or file selected.
        confirm('Atajo de teclado Ctrl/Cmd + C detectado.\nEsto es un confirm.'); // We show the confirm window.
    }*/
}

export function miniGame(ball, gameArea) { // I tried but the collisions just don't work properly. It appears to be a CSS problem.
    let ballX = 0; // Current position in X axis.
    let ballY = 0; // Current position in Y axis.
    let velocityX = 0; // This will track the speed of the object in the exact position.
    let velocityY = 0; // This will track the speed of the object in the exact position.
    const acceleration = 0.4; // Acceleration. This will make the movement smoother.
    const maxSpeed = 6; // Maximum speed.

    const gameAreaRect = gameArea.getBoundingClientRect(); // We store the object with the information of position and dimensions of gameArea.
    const ballRect = ball.getBoundingClientRect(); // We store the object with the information of position and dimensions of ballRect.

    function updateBallPosition() {
        ballX += velocityX; // We update the horizontal position of the ball.
        ballY += velocityY; // We update the vertical position of the ball.

        const maxX = gameAreaRect.width - ballRect.width; // We calculate the max allowed value in the X axis for the ball.
        // To do this, we subtract the width of gameAreaRect from the width of ballRect. This ensures the ball does not go out of bounds.
        const maxY = gameAreaRect.height - ballRect.height; // We calculate the max allowed value in the Y axis for the ball.
        // To do this, we subtract the width of gameAreaRect from the width of ballRect. This ensures the ball does not go out of bounds.

        ballX = Math.min(maxX, Math.max(0, ballX)); // We limit the horizontal position of the ball.
        // Math.max(0, ballX) takes the current value of ballX and compares it to 0. If it is lower than 0, it means the ball has got out of bounds.
        // The expression will set ballX to zero if this happens, so the ball never gets out of bounds.
        ballY = Math.min(maxY, Math.max(0, ballY)); // We limit the vertical position of the ball.
        // Math.max(0, ballY) takes the current value of ballY and compares it to 0. If it is lower than 0, it means the ball has got out of bounds.
        // The expression will set ballY to zero if this happens, so the ball never gets out of bounds.

        ball.style.transform = `translate(${ballX}px, ${ballY}px)`; // We update the position of the ball.
        requestAnimationFrame(updateBallPosition); // We loop the updateBallPosition function.
    }

    updateBallPosition(); // We call the updateBallPosition function.

    document.addEventListener("keydown", (event) => { // We add an EventListener to the document to detect when a key is pressed.
        switch (event.key) { // Switch/case for the event.
            case "ArrowLeft": // If the left key is pressed...
                event.preventDefault(); // We prevent the default behavior.
                velocityX = -maxSpeed; // The ball will go left.
                break;
            case "ArrowRight": // If the right key is pressed...
                event.preventDefault(); // We prevent the default behavior.
                velocityX = maxSpeed; // The ball will go right.
                break;
            case "ArrowUp": // If key-up key is pressed...
                event.preventDefault(); // We prevent the default behavior.
                velocityY = -maxSpeed; // The ball will go top.
                break;
            case "ArrowDown": // If key-down key is pressed...
                event.preventDefault(); // We prevent the default behavior.
                velocityY = maxSpeed; // The ball will go bottom.
                break;
        }
    });

    document.addEventListener("keyup", (event) => { // We add and EvenListener to the document to detect when a key is released.
        switch (event.key) { // Switch/case for the event.
            case "ArrowLeft":
            case "ArrowRight":
                velocityX = 0; // If the left and right keys are released, the horizontal movement stops.
                break;
            case "ArrowUp":
            case "ArrowDown":
                velocityY = 0; // If the up and down keys are released, the vertical movement stops.
                break;
        }
    });

    setInterval(() => { // We set and interval to make the movement smoother.
        if (velocityX > 0) { // If the speed of the object in the X axis  is greater than 0...
            velocityX = Math.max(0, velocityX - acceleration); // We apply a gradual deceleration to the ball by subtracting the current acceleration to the current speed.
        } else if (velocityX < 0) { // If the speed of the object is lower than 0...
            velocityX = Math.min(0, velocityX + acceleration); // We apply a gradual acceleration to the ball by adding the current acceleration to the current speed.
        }

        if (velocityY > 0) { // If the speed of the object in the Y axis is greater than 0...
            velocityY = Math.max(0, velocityY - acceleration); // We apply a gradual deceleration to the ball by subtracting the current acceleration to the current speed.
        } else if (velocityY < 0) { // If the speed of the object is lower than 0...
            velocityY = Math.min(0, velocityY + acceleration); // We apply a gradual acceleration to the ball by adding the current acceleration to the current speed.
        }
    }, 16);
}

/*export function miniGame(ball, gameArea) { OLD VERSION - NO COLLISIONS IN ANY OF THEM.
    let ballX = 0; // X position of the ball.
    let ballY = 0; // Y position of the ball.
    const speed = 4; // Speed.

    function updateBallPosition() {
        ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
        requestAnimationFrame(updateBallPosition);
    }

    updateBallPosition();

    document.addEventListener("keydown", (event) => {
        event.preventDefault(); // Prevenir comportamiento predeterminado para todas las teclas
        switch (event.key) {
            case "ArrowLeft":
                ballX -= speed; // Mover hacia la izquierda
                break;
            case "ArrowRight":
                ballX += speed; // Mover hacia la derecha
                break;
            case "ArrowUp":
                ballY -= speed; // Mover hacia arriba
                break;
            case "ArrowDown":
                ballY += speed; // Mover hacia abajo
                break;
        }
    });
}*/

