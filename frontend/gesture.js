function startGestureAnalysis() {
    alert("Gesture analysis started...");
    setTimeout(() => {
        stopGestureAnalysis();
        analyzeGestures();
    }, 5000);
}

function stopGestureAnalysis() {
    alert("Gesture analysis stopped.");
}

function analyzeGestures() {
    let score = Math.random() * 50 + 50;
    localStorage.setItem("gestureScore", Math.round(score));

    document.getElementById("gestureFeedback").innerHTML = `<strong>Score:</strong> ${score.toFixed(2)}%`;
}

function saveGestureScore() {
    window.location.href = "index.html";
}
