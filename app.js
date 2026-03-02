async function runAI() {
  const prompt = document.getElementById("prompt").value;
  const output = document.getElementById("output");

  if (!prompt) {
    alert("Enter a prompt");
    return;
  }

  output.classList.remove("hidden");
  output.innerHTML = "⏳ Generating with AI...";

  try {
    const response = await fetch(
      "https://dataflow-ai-backend.onrender.com/generate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      }
    );

    const data = await response.json();

    output.innerHTML = `
      <h3>AI Output</h3>
      <pre>${data.result}</pre>
    `;
  } catch (error) {
    output.innerHTML = "❌ Error connecting to AI backend";
  }
}
