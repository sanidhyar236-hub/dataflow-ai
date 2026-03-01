function runAI(){
  const prompt = document.getElementById("prompt").value;
  const output = document.getElementById("output");

  if(!prompt){
    alert("Enter a prompt");
    return;
  }

  output.classList.remove("hidden");
  output.innerHTML = `
    <h3>AI Output (Demo)</h3>
    <p>Your prompt:</p>
    <pre>${prompt}</pre>
    <p><b>Next step:</b> Connect backend to generate real Excel, Word & PPT.</p>
  `;
}
