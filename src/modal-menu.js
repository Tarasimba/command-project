(() => {
  // === For Header animation ===
  const headerSection = document.querySelector('.header');
  const heroSection = document.querySelector('.hero');

  window.addEventListener('scroll', scrollHandler);

  function scrollHandler() {
    const currentPosition = scrollY;
    const headerSectionHeight = headerSection.offsetHeight;
    const heroSectionHeight = heroSection.offsetHeight;

    if (currentPosition < headerSectionHeight) {
      headerSection.classList.remove('is-fixed');
      headerSection.classList.remove('show');
      headerSection.classList.remove('hide');
    } else if (
      currentPosition >= headerSectionHeight &&
      currentPosition < heroSectionHeight - headerSectionHeight
    ) {
      headerSection.classList.add('is-fixed');
      headerSection.classList.remove('show');
      headerSection.classList.remove('hide');
    } else if (
      currentPosition >= heroSectionHeight - headerSectionHeight &&
      currentPosition < heroSectionHeight
    ) {
      headerSection.classList.add('is-fixed');
      headerSection.classList.remove('show');
      headerSection.classList.add('hide');
    } else if (currentPosition >= heroSectionHeight) {
      headerSection.classList.add('is-fixed');
      headerSection.classList.add('show');
      headerSection.classList.remove('hide');
    }
  }

  // === For Menu start ===
  const menuBtn = document.querySelector('[data-menu-button]');
  const mobileMenu = document.querySelector('[data-menu]');
  const menuLinks = document.querySelectorAll('.menu__link');
  const body = document.querySelector('body');

  for (const element of menuLinks) {
    element.addEventListener('click', toggleMenu);
  }
  menuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    mobileMenu.classList.toggle('is-open');
    menuBtn.classList.toggle('is-open');
    body.classList.toggle('scroll-off');
  }
  // --- For Menu end ---
})();
