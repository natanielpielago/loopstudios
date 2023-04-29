const menuBtn = document.getElementById('menu-btn');
const menuEl = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  menuEl.classList.toggle('flex');
  menuEl.classList.toggle('hidden');
})

// copyright
const now = new Date();
let year = now.getFullYear();
document.getElementById('year').innerText = year;