/*
Build a function to validate a form
*/

export function formValidation() {
    const nameInput = document.getElementById("validation-name"); // We obtain the HTML element and assign it to a constant.
    const emailInput = document.getElementById("validation-email"); // We obtain the HTML element and assign it to a constant.
    const subjectInput = document.getElementById("validation-subject"); // We obtain the HTML element and assign it to a constant.
    const commentTextarea = document.getElementById("validation-comments"); // We obtain the HTML element and assign it to a constant.

    const nameRegex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/; // Regular expression to accept only letters and space.
    const emailRegex = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/; // Regular expression to validate a email.
    const subjectRegex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü0-9\s]+$/; // Regular expression to accept only letters, numbers and space.

    function showError(input, message) { // Function to show an error message.
        input.style.borderColor = "red"; // We set the border style of the input area to red.
        const errorMessage = document.getElementById(`error-message-${input.id}`); // We dynamically detect where is the error message going to show.
        errorMessage.style.display = "block"; // We display the span.
        errorMessage.textContent = message; // We pass the error message to the span.
    }

    function clearError(input) { // Function to remove an error message.
        input.style.borderColor = ""; // We set the border style of the input area to none.
        const errorMessage = document.getElementById(`error-message-${input.id}`); // We dynamically detect where is the error message going to show.
        errorMessage.style.display = "none"; // We hide the span.
        errorMessage.textContent = ""; // We set the content of the span to nothing.
    }

    nameInput.addEventListener("input", () => { // We add an EventListener of the type input to the name input field.
        if (!nameRegex.test(nameInput.value)) { // If the entered text does not comply with the regular expression...
            showError(nameInput, "Invalid name"); // We display the error.
        } else { // If the entered text does comply with the regular expression...
            clearError(nameInput); // We remove the error.
        }
    });

    emailInput.addEventListener("input", () => { // We add an EventListener of the type input to the email input field.
        if (!emailRegex.test(emailInput.value)) { // If the entered text does not comply with the regular expression...
            showError(emailInput, "Invalid email"); // We display the error.
        } else { // If the entered text does comply with the regular expression...
            clearError(emailInput); // We remove the error.
        }
    });

    subjectInput.addEventListener("input", () => { // We add an EventListener of the type input to the subject input field.
        if (!subjectRegex.test(subjectInput.value)) { // If the entered text does not comply with the regular expression...
            showError(subjectInput, "Invalid subject"); // We display the error.
        } else { // If the entered text does comply with the regular expression...
            clearError(subjectInput); // We remove the error.
        }
    });

    commentTextarea.addEventListener("input", () => { // We add an EventListener of the type input to the comment input field.
        if (commentTextarea.value.length > 255) { // If the entered text is greater than 255 characters...
            showError(commentTextarea, "Your comment exceeds the 255 characters allowed"); // We display the error.
        } else { // If the entered text does comply the limitation...
            clearError(commentTextarea); // We remove the error.
        }
    });
}