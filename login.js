const ACCESS_PASSWORD = "8080";

const form = document.getElementById("login-form");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("password-error");
const accessButton = document.getElementById("access-button");
const buttonLabel = accessButton.querySelector(".button-label");

if (sessionStorage.getItem("najmah-access") === "granted") {
  window.location.replace("map.html");
}

passwordInput.addEventListener("input", () => {
  passwordInput.value = passwordInput.value.replace(/\D/g, "").slice(0, 4);
  passwordInput.removeAttribute("aria-invalid");
  errorMessage.textContent = "";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (passwordInput.value !== ACCESS_PASSWORD) {
    passwordInput.value = "";
    passwordInput.setAttribute("aria-invalid", "true");
    errorMessage.textContent = "Incorrect password. Try again.";
    passwordInput.focus();
    return;
  }

  accessButton.disabled = true;
  accessButton.classList.add("is-loading");
  accessButton.setAttribute("aria-busy", "true");
  buttonLabel.textContent = "Checking…";
  sessionStorage.setItem("najmah-access", "granted");

  window.setTimeout(() => {
    window.location.assign("map.html");
  }, 260);
});
