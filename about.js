// Hamburger menu toggle with X close
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
}

// Close menu when a link is clicked (mobile responsive)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// Close menu when clicking outside the nav (mobile responsive)
document.addEventListener('click', (e) => {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  const isClickInsideNav = navLinks.contains(e.target);
  const isClickOnHamburger = hamburger.contains(e.target);

  if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  }
});