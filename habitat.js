document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.getElementById('menuNavbar');

  navbarCollapse.addEventListener('hidden.bs.collapse', function () {
    burgerButton.blur();
  });
});
