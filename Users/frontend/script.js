document.addEventListener("DOMContentLoaded", function () {
  const registerNowBtn = document.getElementById("register-now");
  const loginNowBtn = document.getElementById("login-now");
  const loginLink = document.getElementById("login-link");
  const registerLink = document.getElementById("register-link");
  const registrationForm = document.getElementById("registration-form");
  const loginForm = document.getElementById("login-form");
  const dashboard = document.getElementById("dashboard");
  const registerFormEl = document.getElementById("register-form");
  const loginFormEl = document.getElementById("login-form");

  registerNowBtn.addEventListener("click", () => {
    registrationForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
  });

  loginNowBtn.addEventListener("click", () => {
    loginForm.classList.remove("hidden");
    registrationForm.classList.add("hidden");
  });

  loginLink.addEventListener("click", () => {
    loginForm.classList.remove("hidden");
    registrationForm.classList.add("hidden");
  });

  registerLink.addEventListener("click", () => {
    registrationForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
  });

  registerFormEl.addEventListener("submit", (event) => {
    event.preventDefault();
    // Handle registration logic here
    alert("Registration successful!");
    registrationForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  });

  loginFormEl.addEventListener("submit", (event) => {
    event.preventDefault();
    // Handle login logic here
    const studentName = "John Doe"; // Replace with actual logged-in student's name
    document.getElementById("student-name").innerText = studentName;
    dashboard.classList.remove("hidden");
    loginForm.classList.add("hidden");
  });
});
