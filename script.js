
async function sendToAI() {
  const prompt = document.getElementById("promptInput").value;
  const output = document.getElementById("output");

  try {
    const response = await fetch("/.netlify/functions/openaiProxy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();
    output.textContent = data.choices?.[0]?.message?.content || "Keine Antwort erhalten.";
  } catch (err) {
    output.textContent = "Fehler: " + err.message;
  }
}
