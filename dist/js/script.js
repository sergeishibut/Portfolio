const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

/* ширина из процентов */

/* const ratingsCounter = document.querySelector('.skills__ratings-counter');
const ratingsLine = document.querySelector('.skills__ratings-line span');

// Извлекаем проценты из элемента ratingsCounter и преобразуем их в число
const percent = parseInt(ratingsCounter.textContent);

// Устанавливаем ширину элемента ratingsLine в процентах
ratingsLine.style.width = percent + '%'; */

const ratingCounters = document.querySelectorAll('.skills__ratings-counter');

for (let i = 0; i < ratingCounters.length; i++) {
  const percent = parseInt(ratingCounters[i].textContent);
  const ratingLine = ratingCounters[i].nextElementSibling.querySelector('span');
  ratingLine.style.width = percent + '%';
}
