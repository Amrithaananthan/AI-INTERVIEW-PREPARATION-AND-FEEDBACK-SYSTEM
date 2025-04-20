// Mock data placeholders
let textFeedback = "";
let voiceFeedback = "";
let gestureFeedback = "";

// Handle text submission
document.getElementById("submit-text").addEventListener("click", () => {
  const response = document.getElementById("typed-response").value;
  if (response.trim()) {
    textFeedback = "Great structure in your typed answer. Try elaborating technical aspects more.";
    alert("Text submitted for analysis.");
  } else {
    alert("Please type your response first.");
  }
});

// Voice Recording
document.getElementById("start-voice").addEventListener("click", () => {
  voiceFeedback = "Good pace and tone. Reduce filler words like 'um' and 'like'.";
  document.getElementById("voice-feedback").innerText = "Voice analysis in progress...";
  setTimeout(() => {
    document.getElementById("voice-feedback").innerText = voiceFeedback;
  }, 2000);
});

document.getElementById("stop-voice").addEventListener("click", () => {
  document.getElementById("voice-feedback").innerText += "\nVoice recording stopped.";
});

// Gesture Analysis
document.getElementById("start-gesture").addEventListener("click", () => {
  gestureFeedback = "Hand gestures were expressive. Maintain them within camera view.";
  document.getElementById("gesture-feedback").innerText = "Gesture analysis running...";
  setTimeout(() => {
    document.getElementById("gesture-feedback").innerText = gestureFeedback;
  }, 2000);
});

document.getElementById("stop-gesture").addEventListener("click", () => {
  document.getElementById("gesture-feedback").innerText += "\nGesture analysis stopped.";
});

// Show feedback
function showFeedback(type) {
  const feedbackBox = document.getElementById("feedback-display");
  const chart = document.getElementById("performance-chart");
  feedbackBox.innerHTML = "";
  chart.style.display = "none";

  if (type === "hr") {
    feedbackBox.innerText = "HR Feedback: Show more confidence and mention your goals clearly.";
  } else if (type === "technical") {
    feedbackBox.innerText = "Technical Feedback: Dive deeper into problem-solving examples.";
  } else if (type === "behavioral") {
    feedbackBox.innerText = "Behavioral Feedback: Use the STAR method consistently.";
  } else if (type === "overall") {
    feedbackBox.innerHTML = `
      <p><strong>Text Analysis:</strong> ${textFeedback || "No text feedback yet."}</p>
      <p><strong>Voice Analysis:</strong> ${voiceFeedback || "No voice feedback yet."}</p>
      <p><strong>Gesture Analysis:</strong> ${gestureFeedback || "No gesture feedback yet."}</p>
    `;
    chart.style.display = "block";
    displayChart();
  }
}

function displayChart() {
  const ctx = document.getElementById("performance-chart").getContext("2d");
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Text', 'Speech', 'Gesture'],
      datasets: [{
        label: 'Performance (%)',
        data: [
          textFeedback ? 75 : 0,
          voiceFeedback ? 85 : 0,
          gestureFeedback ? 65 : 0
        ],
        backgroundColor: ['#4CAF50', '#2196F3', '#FF9800']
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}
