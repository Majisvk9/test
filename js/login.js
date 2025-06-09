const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwLkP5L9h9Uq8svZa0tJwNBsfp3K4Hgn4b3U1_qO6wdfBcunKPF62Qg8yoUIZQUm_utYw/exec", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" }
    });

    const result = await response.json();

    if (result.success) {
      saveUserSession(result.user);
      window.location.href = "dashboard.html";
    } else {
      errorMsg.textContent = "Invalid username or password.";
    }
  } catch (error) {
    console.error(error);
    errorMsg.textContent = "Error connecting to server.";
  }
});
