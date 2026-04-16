const toggleButton = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (toggleButton && siteNav) {
  toggleButton.addEventListener('click', () => {
    const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('is-open');
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggleButton.setAttribute('aria-expanded', 'false');
      siteNav.classList.remove('is-open');
    });
  });
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

document.querySelectorAll('.table-scroll').forEach((wrapper) => {
  if (!wrapper.getAttribute('role')) {
    wrapper.setAttribute('role', 'region');
  }
  if (!wrapper.getAttribute('tabindex')) {
    wrapper.setAttribute('tabindex', '0');
  }
});
