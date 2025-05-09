async function getOpenAIResponse(prompt) {
  const response = await fetch("/.netlify/functions/openaiProxy", {
    method: "POST",
    body: JSON.stringify({ prompt }),
  });

  const data = await response.json();
  return data.choices[0].message.content;
}
