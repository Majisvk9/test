function isAuthenticated() {
  return localStorage.getItem("user");
}

function saveUserSession(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}
