import checkPaymentSystem from './checkPaymentSystem';

const vendors = Array.from(document.querySelectorAll('.card'));
const btn = document.querySelector('.submit-button');
const input = document.querySelector('.card-input');
const notValid = document.querySelector('.not-valid');
const valid = document.querySelector('.valid');
// console.log(vendors);

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const vendor = checkPaymentSystem(input.value);

  if (input.value) {
    // Возвращаем значения в default
    for (const prop in vendors) {
      if (Object.prototype.hasOwnProperty.call(vendors, prop)) {
        vendors[prop].classList.remove('card-disabled');
      }
    }
    notValid.classList.add('hidden');
    notValid.innerText = ('');
    valid.classList.add('hidden');
    valid.innerText = ('');

    // Запуская проверку
    if (vendor === 12) {
      notValid.classList.remove('hidden');
      notValid.innerText = 'Неверно введены данные: число цифр меньше 13-ти.';
      return;
    } if (vendor === 20) {
      notValid.classList.remove('hidden');
      notValid.innerText = 'Неверно введены данные: число цифр больше 19-ти.';
      return;
    } if (vendor === 'error') {
      notValid.classList.remove('hidden');
      notValid.innerText = 'Неизвестная ошибка';
      return;
    }

    valid.classList.remove('hidden');
    valid.innerText = `Карта валидна - это ${vendor}!`;
    input.value = '';

    // Добавляем opacity
    vendors.filter((item) => !item.classList.contains(vendor)).forEach((item) => item.classList.add('card-disabled'));
  }
});
