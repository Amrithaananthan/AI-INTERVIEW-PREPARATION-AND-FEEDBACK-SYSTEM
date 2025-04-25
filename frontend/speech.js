function startSpeechRecording() {
    alert("Recording started...");
    setTimeout(() => {
        stopSpeechRecording();
        analyzeSpeech("Sample response captured.");
    }, 5000);
}

function stopSpeechRecording() {
    alert("Recording stopped.");
}

function analyzeSpeech(transcript) {
    let score = Math.random() * 50 + 50;
    localStorage.setItem("speechScore", Math.round(score));

    document.getElementById("speechFeedback").innerHTML = `<strong>Score:</strong> ${score.toFixed(2)}%`;
}

function saveSpeechScore() {
    window.location.href = "index.html";
}
