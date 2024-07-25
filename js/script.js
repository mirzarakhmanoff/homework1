const username = document.querySelector(".username");
const password = document.querySelector(".password");
const login = document.querySelector(".login");
const adminBtn = document.querySelector(".admin-btn");
const messageElement = document.getElementById("message");
const API_URL = "https://dummyjson.com";

login.addEventListener("submit", async (e) => {
  e.preventDefault();

  let user = {
    username: username.value,
    password: password.value,
  };

  let response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  response.json().then((res) => {
    if (res.token) {
      localStorage.setItem("x-auth-token", res.token);
      showSuccessMessage("Logged in successfully!");
      open("/admin/admin.html", "_self");
    } else {
      showErrorMessage("Error: Invalid login.");
    }
  });
});

function showSuccessMessage(message) {
  messageElement.textContent = message;
  messageElement.className = "message success";
  messageElement.style.display = "block";
  messageElement.style.opacity = 1;

  setTimeout(function () {
    messageElement.style.opacity = 0;
    setTimeout(function () {
      messageElement.style.display = "none";
    }, 500);
  }, 3000);
}

function showErrorMessage(message) {
  messageElement.textContent = message;
  messageElement.className = "message error";
  messageElement.style.display = "block";
  messageElement.style.opacity = 1;

  setTimeout(function () {
    messageElement.style.opacity = 0;
    setTimeout(function () {
      messageElement.style.display = "none";
    }, 500);
  }, 3000);
}

function tokenCheck() {
  let token = localStorage.getItem("x-auth-token");
  if (token) {
    adminBtn.textContent = "Admin";
    adminBtn.href = "./admin/admin.html";
  } else {
    adminBtn.textContent = "Login";
    adminBtn.href = "./login/index — копия.html";
  }
}
tokenCheck();
