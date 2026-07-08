// Reveal-on-scroll
const revealEls = document.querySelectorAll('.reveal');
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReduced) {
  revealEls.forEach(el => el.classList.add('in'));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
}

// KPI count-up
function animateCount(el) {
  const target = parseFloat(el.dataset.count);
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const isDecimal = String(target).includes('.') || target % 1 !== 0;
  const duration = 1400;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = target * eased;
    const display = isDecimal ? current.toFixed(2) : Math.round(current).toLocaleString('en-IN');
    el.textContent = prefix + display + suffix;
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = prefix + (isDecimal ? target.toFixed(2) : target.toLocaleString('en-IN')) + suffix;
  }
  requestAnimationFrame(tick);
}

const kpiEls = document.querySelectorAll('.kpi .num');
if (prefersReduced) {
  kpiEls.forEach(el => {
    const target = parseFloat(el.dataset.count);
    const isDecimal = String(target).includes('.');
    el.textContent = (el.dataset.prefix || '') + (isDecimal ? target.toFixed(2) : target.toLocaleString('en-IN')) + (el.dataset.suffix || '');
  });
} else {
  const kpiIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        kpiIo.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  kpiEls.forEach(el => kpiIo.observe(el));
}
