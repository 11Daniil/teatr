export function ShowMore() {
  const button = document.querySelectorAll('[data-show-btn]');
  if (button.length > 0) {
    button.forEach(btn => {
      btn.addEventListener('click', () => {
        const text = document.querySelector(`[data-show-text="${btn.dataset.showBtn}"]`);
        text.classList.add('visible');
        btn.style.display = "none";
      })

    })
  }

}



const menuBtn = document.querySelector('.burger')

if (menuBtn) {
  const mobMenu = document.querySelector('.mob-menu-overlay');
  const backgroundMenu = document.querySelector('.menu_mobile_overlay');
  menuBtn.addEventListener('click', () => {
    mobMenu.classList.toggle('active');
    backgroundMenu.classList.toggle('active');
    document.body.classList.toggle('_lock');
  })
  const closeBtn = document.querySelector('.mob-menu-close')

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      mobMenu.classList.toggle('active');
      backgroundMenu.classList.toggle('active');
      document.body.classList.toggle('_lock');
    })
  }

}




