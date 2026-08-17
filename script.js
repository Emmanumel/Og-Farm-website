let slides = document.querySelectorAll(".slide");
let i = 0;
let autoSlideInterval;

function showSlide(n) {
  slides.forEach(s => s.classList.remove("active"));
  slides[n].classList.add("active");
}

function nextSlide() {
  i = (i + 1) % slides.length;
  showSlide(i);
}

function prevSlide() {
  i = (i - 1 + slides.length) % slides.length;
  showSlide(i);
}

// Auto-switch slides every 5 seconds
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000);
}

// Reset timer when user manually navigates
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// Start auto-slide on page load
window.addEventListener('load', startAutoSlide);

// Hamburger menu toggle for index.html
function toggleNavMenu() {
  const navMenu = document.getElementById('navMenu');
  const navHamburger = document.getElementById('navHamburger');
  navMenu.classList.toggle('active');
  navHamburger.classList.toggle('active');
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    const navMenu = document.getElementById('navMenu');
    const navHamburger = document.getElementById('navHamburger');
    navMenu.classList.remove('active');
    navHamburger.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  const navMenu = document.getElementById('navMenu');
  const navHamburger = document.getElementById('navHamburger');
  if (navMenu && navHamburger) {
    const isClickInsideNav = navMenu.contains(e.target);
    const isClickOnHamburger = navHamburger.contains(e.target);
    if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      navHamburger.classList.remove('active');
    }
  }
});

    // Counter animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // smaller = faster

    counters.forEach(counter => {
      const animate = () => {
        const value = +counter.getAttribute('data-target');
        const current = +counter.innerText;

        const increment = Math.ceil(value / speed);

        if (current < value) {
          counter.innerText = current + increment;
          setTimeout(animate, 20);
        } else {
          counter.innerText = value;
        }
      };

      // Start when visible (basic way)
      window.addEventListener('load', animate);
    });


    
