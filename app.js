document.getElementById("rockForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = document.getElementById("userInput").value;
  if (!input.trim()) return;

  const conversation = document.getElementById("conversation");
  const userMsg = document.createElement("p");
  userMsg.textContent = "🧑 " + input;
  conversation.appendChild(userMsg);

  const response = await fetch("/api/rock", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ input }),
  });

  const data = await response.json();
  const botMsg = document.createElement("p");
  botMsg.textContent = "🤖 " + data.reply;
  conversation.appendChild(botMsg);

  document.getElementById("userInput").value = "";
});
