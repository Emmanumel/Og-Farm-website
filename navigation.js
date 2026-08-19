document.addEventListener('DOMContentLoaded', () => {
  const updateCartCount = () => {
    let cart = [];
    try {
      cart = JSON.parse(localStorage.getItem('cart')) || [];
    } catch {
      cart = [];
    }

    const totalItems = cart.reduce((total, product) =>
      total + (Number(product.quantity) || 0), 0);

    document.querySelectorAll('.cart-count').forEach(counter => {
      counter.textContent = totalItems;
      counter.classList.remove('hidden');
    });
  };

  updateCartCount();
  window.addEventListener('pageshow', updateCartCount);
  window.addEventListener('cart:updated', updateCartCount);
  window.addEventListener('storage', event => {
    if (event.key === 'cart') updateCartCount();
  });

  const toggle = document.querySelector('.nav-toggle');
  const navbar = document.querySelector('.product-header .navbar');
  if (!toggle || !navbar) return;

  const closeMenu = () => {
    navbar.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.querySelector('i')?.classList.replace('fa-xmark', 'fa-bars');
  };

  toggle.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    const icon = toggle.querySelector('i');
    if (icon) icon.className = `fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`;
  });

  navbar.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  window.addEventListener('pagehide', closeMenu);
  document.addEventListener('click', event => {
    if (!navbar.contains(event.target) && !toggle.contains(event.target)) closeMenu();
  });
  window.addEventListener('pageshow', closeMenu);
});
