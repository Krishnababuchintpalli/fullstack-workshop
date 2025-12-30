const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const userNameBox = document.getElementById("usernameBox");
const mailBox = document.getElementById("mailBox");
const passwordBox = document.getElementById("passwordBox");
const cpasswordBox = document.getElementById("cpasswordBox");

const nameError = document.querySelector(".nameError");
const mailError = document.querySelector(".mailError");
const passwordError = document.querySelector(".passwordError");
const confirmPasswordError = document.querySelector(".cpasswordError");

const submitBtn = document.querySelector(".submitBtn");

/* ---------- VALIDATION HELPERS ---------- */

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validateUsername = (value) =>
  Array.from(value).every(
    (char) =>
      (char >= "A" && char <= "Z") ||
      (char >= "a" && char <= "z") ||
      (char >= "0" && char <= "9")
  );

const validatePassword = (value) => {
  const hasUpper = Array.from(value).some(
    (c) => c >= "A" && c <= "Z"
  );
  const hasLower = Array.from(value).some(
    (c) => c >= "a" && c <= "z"
  );
  const hasSpecial = Array.from(value).some(
    (c) => "!@#$%^&*".includes(c)
  );

  return value.length >= 8 && hasUpper && hasLower && hasSpecial;
};

/* ---------- EVENT LISTENERS ---------- */

username.addEventListener("blur", () => {
  if (username.value.length < 3) {
    nameError.textContent = `Username must be at least 3 characters`;
    nameError.style.color = "red";
  } else if (username.value.length > 15) {
    nameError.textContent = `Username must be at most 15 characters`;
    nameError.style.color = "red";
  } else if (!validateUsername(username.value)) {
    nameError.textContent = `Username accepts alphanumerics only`;
    nameError.style.color = "red";
  } else {
    nameError.textContent = "";
    userNameBox.checked = true;
  }
});

email.addEventListener("blur", () => {
  if (!isValidEmail(email.value)) {
    mailError.textContent = `Enter a valid email`;
    mailError.style.color = "red";
  } else {
    mailError.textContent = "";
    mailBox.checked = true;
  }
});

password.addEventListener("blur", () => {
  if (!validatePassword(password.value)) {
    passwordError.textContent = `Password must contain:
• 8+ characters
• 1 uppercase
• 1 lowercase
• 1 special character`;
    passwordError.style.color = "red";
  } else {
    passwordError.textContent = "";
    passwordBox.checked = true;
  }
});

confirmPassword.addEventListener("blur", () => {
  if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = `Passwords do not match`;
    confirmPasswordError.style.color = "red";
  } else {
    confirmPasswordError.textContent = "";
    cpasswordBox.checked = true;
  }
});

/* ---------- FORM SUBMIT ---------- */

submitBtn.addEventListener("click", (e) => {
  let isValid = true;

  if (!userNameBox.checked) {
    nameError.textContent = `Please enter a valid username`;
    isValid = false;
  }

  if (!mailBox.checked) {
    mailError.textContent = `Please enter a valid email`;
    isValid = false;
  }

  if (!passwordBox.checked) {
    passwordError.textContent = `Password must be valid before submitting`;
    isValid = false;
  }

  if (!cpasswordBox.checked) {
    confirmPasswordError.textContent = `Passwords must match`;
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault();
    alert(`Please fix all errors before submitting`);
  }
});
