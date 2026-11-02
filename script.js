(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#nav');
  if (!toggle || !nav) return;
  const mobile = matchMedia('(max-width: 700px)');
  const setOpen = (open) => {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    const label = toggle.querySelector('.toggle-label');
    if (label) label.textContent = open ? '閉じる' : 'メニュー';
    nav.inert = mobile.matches && !open;
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    setOpen(false);
    const target = document.querySelector(link.getAttribute('href'));
    if (target) { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); }
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('open')) { setOpen(false); toggle.focus(); }
  });
  document.addEventListener('click', event => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) setOpen(false);
  });
  mobile.addEventListener('change', () => {
    if (nav.contains(document.activeElement) && mobile.matches) toggle.focus();
    setOpen(false);
  });
  toggle.hidden = false;
  document.documentElement.classList.add('js');
  setOpen(false);
})();
