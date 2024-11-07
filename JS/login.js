const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
e.preventDefault();
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  if (username == "admin" && password == "admin") {
    alert("login successful")
    window.location.href = "../HTML/currency.html"
  } else {
    alert("Login failed");
  }
});
