document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // モバイルメニューはBootstrapのCollapseで開閉するが、リンククリック時は自動で閉じないため補完する
  const mainNav = document.querySelector('.main-nav');
  if (mainNav && window.bootstrap) {
    const collapse = window.bootstrap.Collapse.getOrCreateInstance(mainNav, { toggle: false });
    mainNav.querySelectorAll('.nav-link, .nav-button').forEach((link) => {
      link.addEventListener('click', () => {
        if (mainNav.classList.contains('show')) {
          collapse.hide();
        }
      });
    });
  }

  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const button = form.querySelector('button[type="submit"]');
      const originalText = button.textContent;
      button.textContent = '送信しました';
      button.disabled = true;

      window.setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        form.reset();
      }, 1800);
    });
  }
});
