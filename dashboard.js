document.addEventListener('DOMContentLoaded', function() {
    // Counter animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // smaller = faster

    counters.forEach(counter => {
      const animate = () => {
        const value = +counter.getAttribute('data-target');
        const suffix = counter.getAttribute('data-suffix') || '';
        const current = Number(counter.dataset.current || 0);
        const formatValue = number => number.toLocaleString('en-US');

        const increment = Math.ceil(value / speed);

        if (current < value) {
          const next = Math.min(current + increment, value);
          counter.dataset.current = next;
          counter.innerText = formatValue(next) + suffix;
          setTimeout(animate, 20);
        } else {
          counter.innerText = formatValue(value) + suffix;
        }
      };

      // Start when visible (basic way)
      window.addEventListener('load', animate);
    });
  });

  // Chart initialization (using Chart.js if available, otherwise simple placeholder)
  function initCharts() {
    const dailySalesCanvas = document.getElementById('dailySalesChart');
    const weeklyTrendsCanvas = document.getElementById('weeklyTrendsChart');
    
    if (dailySalesCanvas && typeof Chart !== 'undefined') {
      new Chart(dailySalesCanvas, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            label: 'Sales (₦)',
            data: [65, 59, 80, 81, 55, 40, 60],
            borderColor: '#2e7d32',
            backgroundColor: 'rgba(46, 125, 50, 0.2)',
            tension: 0.1,
            fill: true
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            tooltip: { enabled: true }
          },
          scales: {
            y: { beginAtZero: true, color: '#6b7280' }
          }
        }
      });
    }
    
    if (weeklyTrendsCanvas && typeof Chart !== 'undefined') {
      new Chart(weeklyTrendsCanvas, {
        type: 'bar',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [{
            label: 'Revenue (₦)',
            data: [150000, 120000, 180000, 160000],
            backgroundColor: ['#2e7d32', '#388e3c', '#2e7d32', '#388e3c']
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            tooltip: { enabled: true }
          },
          scales: {
            y: { beginAtZero: true, color: '#6b7280' }
          }
        }
      });
    }
  }

  // Initialize charts when DOM is loaded
  document.addEventListener('DOMContentLoaded', initCharts);

  // Sidebar navigation toggle
  const navItems = document.querySelectorAll('.sidebar-nav li a');
  
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      // Remove active class from all items
      navItems.forEach(i => i.classList.remove('active'));
      // Add active class to clicked item
      this.classList.add('active');
    });
  });

  // Stat counter animation on scroll
  function animateCounters() {
    const counters = document.querySelectorAll('.stat-value[data-target]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = +counter.getAttribute('data-target');
          const suffix = counter.getAttribute('data-suffix') || '';
          let current = 0;
          const increment = target / 100;
          const duration = 2000;
          const step = duration / 100;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.innerText = current.toLocaleString('en-US') + suffix;
              clearInterval(timer);
            } else {
              counter.innerText = current.toLocaleString('en-US') + suffix;
            }
          }, step);
          
          observer.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
  }

  // Run animateCounters on load
  document.addEventListener('DOMContentLoaded', animateCounters);