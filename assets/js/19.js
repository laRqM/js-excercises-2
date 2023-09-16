/*
Build a Text-To-Speech function that allows to select a voice to use.
*/

export function textToSpeech() {
    const voiceSelect = document.getElementById('voice-select'); // We obtain the HTML element and assign it to a constant.
    const ttsText = document.getElementById('tts-text'); // We obtain the HTML element and assign it to a constant.
    const submitButton = document.getElementById('submit-tts'); // We obtain the HTML element and assign it to a constant.

    function loadVoices() { // Function to load the available voices in the option HTML field.
        const voices = speechSynthesis.getVoices(); // We get the voices.

        voices.forEach((voice, index) => { // For each voice...
            const option = document.createElement('option'); // We create an option HTML field.
            option.value = index; // The value of the option will be the index of the voice.
            option.textContent = `${voice.name} - (${voice.lang})`; // We set the content of the option.
            voiceSelect.appendChild(option); // We pass the option to the select HTML field.
        });
    }

    speechSynthesis.onvoiceschanged = () => { // Event for when the voices load.
        loadVoices(); // We execute the function.
    };

    submitButton.addEventListener('click', () => { // We add an EventListener of the type click to the submit button.
        const selectedVoiceIndex = voiceSelect.value; // We get the value of the selected voice.
        const textToSpeak = ttsText.value; // We get the value of text submitted by the user.

        if (selectedVoiceIndex >= 0 && textToSpeak) { // If the selected voice is equal or lower than zero and the submitted text is true(it has text)...
            const voices = speechSynthesis.getVoices(); // We get the voices.
            const selectedVoice = voices[selectedVoiceIndex]; // We pass the selected voice.
            const utterance = new SpeechSynthesisUtterance(textToSpeak); // We create an instance of SpeechSynthesisUtterance and we pass the submitted text.
            utterance.voice = selectedVoice; // We indicate which voice to use.
            utterance.rate = 0.8; // We change the speed.
            speechSynthesis.speak(utterance); // We play the voice with the submitted text.
        }
    });

    loadVoices(); // We load the available voices when the page loads.
}