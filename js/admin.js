let token = localStorage.getItem("x-auth-token");
const logout = document.querySelector(".logout");
const wrapper = document.querySelector(".wrapper");
const API_URL = "https://dummyjson.com";

function checkToken() {
  if (!token) {
    window.location.replace("./login/index — копия.html");
  }
}
checkToken();

logout.addEventListener("click", () => {
  localStorage.removeItem("x-auth-token");
  open("/index.html");
});

async function getData(data) {
  let response = await fetch(`${data}/users`);
  response
    .json()
    .then((res) => createItem(res.users))
    .catch((err) => console.log(err));
}
getData(API_URL);

function createItem(items) {
  items.forEach((element) => {
    let item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
   



    <div class="user-card">
    <div class="user-image">
      <img src=${element.image}  />
    </div>
    <div class="user-info">
      <h3 class="user-name">${element.firstName}</h3>
      <p class="user-description">
      ${element.lastName}
      </p>
    </div>
  </div>
    `;
    wrapper.append(item);
  });
}
