const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxhedIe_3optwkjkHt9sncwWWM5AwnjUohWRqJOz8fbux9nf4P1Bmem7YWZZu4urFSzxA/exec", {
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
