document.getElementById('rockForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const input = document.getElementById('rockInput').value;
  const responseDiv = document.getElementById('response');

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: input }),
    });

    const data = await res.json();
    responseDiv.textContent = data.response;
  } catch (error) {
    responseDiv.textContent = '❌ Error contacting server';
  }
});
