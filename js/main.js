const link = document.querySelector(".hero-button");

function tokenCheck() {
  let token = localStorage.getItem("x-auth-token");
  if (token) {
    link.textContent = "Admin";
    link.href = "./admin/admin.html";
  } else {
    link.textContent = "Login";
    link.href = "./login/index — копия.html";
  }
}
tokenCheck();
