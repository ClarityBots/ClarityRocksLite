// app.js
const form = document.querySelector("form");
const input = document.querySelector("input");
const result = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userInput = input.value.trim();
  if (!userInput) return;

  result.textContent = "Thinking...";

  try {
    const response = await fetch("http://localhost:3001/api/rock", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt: userInput })
    });

    const data = await response.json();
    result.textContent = data.rock || "No rock returned.";
  } catch (error) {
    console.error("Error:", error);
    result.textContent = "Something went wrong.";
  }

  input.value = "";
});
