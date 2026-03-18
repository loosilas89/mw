// Nav background on scroll
const nav = document.getElementById('nav');
const navLogo = document.getElementById('nav-logo');

function updateNav() {
  if (window.scrollY > 60) {
    nav.style.backgroundColor = '#FAFAF8';
    nav.querySelectorAll('a, span').forEach(el => el.style.color = '#231c21');
    navLogo.src = 'assets/logo.svg';
  } else {
    nav.style.backgroundColor = 'transparent';
    nav.querySelectorAll('a, span').forEach(el => el.style.color = '#FAFAF8');
    navLogo.src = 'assets/logo2.svg';
  }
}

window.addEventListener('scroll', updateNav);
updateNav();

// ── SuperfluidLayout effects ──────────────────────────────────────────────
gsap.registerPlugin(ScrollTrigger);

// 1. Clip-reveal text: split each .text-reveal heading into lines,
//    wrap each line in an overflow-hidden div, then animate lines up.
function initTextReveal() {
  document.querySelectorAll('.text-reveal').forEach(el => {
    if (el.dataset.revealInit === 'true') return;

    const split = new SplitType(el, { types: 'lines' });

    split.lines.forEach(line => {
      const wrapper = document.createElement('div');
      wrapper.className = 'oh';
      line.parentNode.insertBefore(wrapper, line);
      wrapper.appendChild(line);
      line.classList.add('oh__inner');
    });

    gsap.set(split.lines, { y: '120%', rotation: 10, opacity: 0 });

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(split.lines, {
          y: '0%',
          rotation: 0,
          opacity: 1,
          duration: 1.4,
          ease: 'expo.out',
          stagger: 0.12,
        });
      },
    });

    el.dataset.revealInit = 'true';
  });
}

window.addEventListener('load', initTextReveal);
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(initTextReveal);
} else {
  initTextReveal();
}

// 2. Superfluid scattered image panel — flood images in from below on scroll
const panelImgs = document.querySelectorAll('.panel__img');
if (panelImgs.length) {
  gsap.set(panelImgs, { y: '160%' });

  ScrollTrigger.create({
    trigger: '.superfluid-section',
    start: 'top 90%',
    onEnter: () => {
      gsap.to(panelImgs, {
        y: '0%',
        duration: 2.2,
        ease: 'expo.out',
        stagger: 0.025,
      });
    },
  });
}
