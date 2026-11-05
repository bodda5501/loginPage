document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const navbarToggle = document.getElementById("navbar-toggle");
  const navbarMenu = document.getElementById("navbar-menu");

  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener("click", () => {
      navbarMenu.classList.toggle("active");
    });
  }

  // Form Toggle Logic
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const btnShowRegister = document.getElementById("showRegister");
  const btnShowLogin = document.getElementById("showLogin");

  if (btnShowRegister && btnShowLogin) {
    btnShowRegister.addEventListener("click", () => {
      loginForm.classList.remove("active");
      registerForm.classList.add("active");
    });

    btnShowLogin.addEventListener("click", () => {
      registerForm.classList.remove("active");
      loginForm.classList.add("active");
    });
  }
});
