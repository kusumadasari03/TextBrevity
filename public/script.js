const textArea = document.getElementById("text_to_summarize");
const submitButton = document.getElementById("submit-button");
const summarizedTextArea = document.getElementById("summary");
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

submitButton.disabled = true;

textArea.addEventListener("input", verifyTextLength);
submitButton.addEventListener("click", submitData);
themeToggle.addEventListener("click", toggleTheme);

function verifyTextLength(e) {
  const textarea = e.target;
  if (textarea.value.length >= 200 && textarea.value.length <= 100000) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

function submitData(e) {
  submitButton.classList.add("submit-button--loading");

  const text_to_summarize = textArea.value;
  
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${process.env.ACCESS_TOKEN}`);

  var raw = JSON.stringify({
    "inputs": text_to_summarize,
    "parameters": {
      "min_length": 100,
      "max_length": 1000,
      "length_penalty": 2.0
    }
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch('https://api-inference.huggingface.co/models/facebook/bart-large-cnn', requestOptions)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        summarizedTextArea.value = `Error: ${data.error}`;
      } else {
        const summary = data[0]?.summary_text || "Summary could not be generated.";
        summarizedTextArea.value = summary;
      }
      submitButton.classList.remove("submit-button--loading");
    })
    .catch(error => {
      console.log(error.message);
      summarizedTextArea.value = "An error occurred while generating the summary.";
      submitButton.classList.remove("submit-button--loading");
    });
}

function toggleTheme() {
  body.classList.toggle('light-theme');
  body.classList.toggle('dark-theme');
}

// Initialize theme
const isLightTheme = window.matchMedia("(prefers-color-scheme: light)").matches;
if (isLightTheme) {
  body.classList.add('light-theme');
  body.classList.remove('dark-theme');
} else {
  body.classList.add('dark-theme');
  body.classList.remove('light-theme');
}
