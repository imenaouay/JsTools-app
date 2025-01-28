//for get text area and speak button elements
let textarea = document.getElementById("text");
let speakButton = document.getElementById("speak-button");

// add on event listener to the speak button

speakButton.addEventListener("click", () => {
    // get the text from the text area
    let text = textarea.value;
    //create  a new speech object
    let utterance = new SpeechSynthesisUtterance();

    if (text === "") {
        alert("Enter Some Text to speech , please");
    }

    // set the text and voice utterance
    utterance.text = text;
    utterance.voice = window.speechSynthesis.getVoices()[5];

    //speck the utterance
    window.speechSynthesis.speak(utterance);
});