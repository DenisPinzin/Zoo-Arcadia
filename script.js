document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.getElementById('menuNavbar');

  navbarCollapse.addEventListener('hidden.bs.collapse', function () {
    burgerButton.blur();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formAvis');
  const avisBox = document.querySelector('.avis-box');

  if (form && avisBox) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const pseudo = document.getElementById('pseudo').value.trim();
      const message = document.getElementById('message').value.trim();

      if (pseudo && message) {
        const newAvis = document.createElement('div');
        newAvis.className = 'avis-item border-bottom pb-3 mb-3';
        newAvis.innerHTML = `<strong>${pseudo}</strong><p class="mb-0">${message}</p>`;
        avisBox.prepend(newAvis);

        form.reset();

        // Ferme le modal via l'API Bootstrap
        const modal = bootstrap.Modal.getInstance(document.getElementById('modalAvis'));
        if (modal) modal.hide();
      }
    });
  }
});
