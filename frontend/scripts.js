document.addEventListener("DOMContentLoaded", () => {
  loadScores();
});

// **Navigation**
function redirectToSpeech() {
  window.location.href = "speech.html";
}

function redirectToGesture() {
  window.location.href = "gesture.html";
}

// **Question Bank Management**
function toggleQuestionBank() {
  const bank = document.getElementById('questionBank');
  const btn = document.getElementById('questionBankBtn');
  bank.style.display = (bank.style.display === 'block') ? 'none' : 'block';
  btn.textContent = bank.style.display === 'block' ? "Hide Question Bank" : "Show Question Bank";
}

function setQuestion(question) {
  document.getElementById("currentQuestion").innerHTML = `<strong>Q:</strong> ${question}`;
  toggleQuestionBank();
}

// **Evaluate Text Response**
function evaluateTextResponse() {
  const answer = document.getElementById("textAnswer").value.trim();
  if (!answer) {
      alert("Please enter your answer first!");
      return;
  }

  // **Basic Scoring (Word Count & STAR method)**
  const wordCount = answer.split(/\s+/).length;
  const hasSTAR = /situation|task|action|result/i.test(answer);
  let score = Math.min(wordCount * 0.8, 40) + (hasSTAR ? 30 : 0) + 30;
  score = Math.min(score, 100);

  // **Save to localStorage**
  saveScore('text', score);

  document.getElementById("textFeedback").innerHTML = `
      <strong>Score: ${score}%</strong><br>
      ${wordCount < 40 ? "<span class='negative'>Too short. Aim for 50+ words.</span>" : "<span class='positive'>Good length.</span>"}
      ${!hasSTAR ? "<span class='negative'>Try using the STAR method.</span>" : "<span class='positive'>Good structure.</span>"}
  `;
  document.getElementById("textFeedback").style.display = "block";
}

// **Save and Load Scores**
function saveScore(type, score) {
  localStorage.setItem(`${type}Score`, score);
  loadScores();
}

function loadScores() {
  document.getElementById("tipsSection").innerHTML = `
      <h2>Your Performance Dashboard</h2>
      <p><strong>Speech Score:</strong> ${localStorage.getItem("speechScore") || 0}%</p>
      <p><strong>Gesture Score:</strong> ${localStorage.getItem("gestureScore") || 0}%</p>
      <p><strong>Text Response Score:</strong> ${localStorage.getItem("textScore") || 0}%</p>
  `;
}
