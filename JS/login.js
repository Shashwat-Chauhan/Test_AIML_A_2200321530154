const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  if (username === "admin" && password === "admin") {
    location.href('../HTML/currency.html')
  } else {
    alert("Login failed");
  }
});
