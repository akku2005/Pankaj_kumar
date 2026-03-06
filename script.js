// ─── CUSTOM CURSOR ───
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');

document.addEventListener('mousemove', e => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
  ring.style.transform   = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
});

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform += ' scale(1.6)';
    ring.style.opacity = '1';
  });
  el.addEventListener('mouseleave', () => {
    ring.style.opacity = '0.6';
  });
});

// ─── SCROLL REVEAL ───
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = (i * 0.08) + 's';
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ─── LANGUAGE BARS (animate after page load) ───
window.addEventListener('load', () => {
  document.querySelectorAll('.lang-fill').forEach(bar => {
    bar.style.width = bar.dataset.width + '%';
  });
});

// ─── NAV SHADOW ON SCROLL ───
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// ─── CONTACT FORM ───
function sendMessage() {
  const name  = document.getElementById('fname').value.trim();
  const email = document.getElementById('femail').value.trim();
  const msg   = document.getElementById('fmsg').value.trim();

  if (!name || !email || !msg) {
    alert('Please fill in all fields.');
    return;
  }

  // Show success message
  const successEl = document.getElementById('form-success');
  successEl.style.display = 'block';

  // Clear fields
  document.getElementById('fname').value  = '';
  document.getElementById('femail').value = '';
  document.getElementById('fmsg').value   = '';

  // Hide after 4 seconds
  setTimeout(() => {
    successEl.style.display = 'none';
  }, 4000);
}
