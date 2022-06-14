const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const submitButton = document.querySelector("button");
const errorText = document.querySelector(".error-text");

if (password.value === "") {
  confirmPassword.disabled = true;
}

password.addEventListener("change", () => {
  if (password.value === "") {
    confirmPassword.disabled = true;
  } else {
    confirmPassword.disabled = false;
  }

  if (password.value !== confirmPassword.value) {
    submitButton.disabled = true;
    password.classList.add("error");
    confirmPassword.classList.add("error");
    errorText.display = "block";
  } else {
    submitButton.disabled = false;
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
    errorText.display = "none";
  }
});

confirmPassword.addEventListener("change", () => {
  if (password.value === "") {
    confirmPassword.disabled = true;
  } else {
    confirmPassword.disabled = false;
  }

  if (password.value !== confirmPassword.value) {
    submitButton.disabled = true;
    password.classList.add("error");
    confirmPassword.classList.add("error");
    errorText.style.display = "block";
  } else {
    submitButton.disabled = false;
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
    errorText.style.display = "none";
  }
});
