async function sendToAI() {
  const prompt = document.getElementById("promptInput").value;

  const response = await fetch("/.netlify/functions/openaiProxy", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt })
  });

  const rawText = await response.text();

  try {
    const data = JSON.parse(rawText);
    document.getElementById("output").textContent =
      data.choices?.[0]?.message?.content || "⚠️ Leere Antwort";
  } catch (e) {
    document.getElementById("output").textContent =
      "❌ JSON-Parse-Fehler:

" + rawText;
  }
}
