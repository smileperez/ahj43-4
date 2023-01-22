import checkPaymentSystem from '../checkPaymentSystem';

test.each([
  ['4539560534518423', 'visa'],
  ['4024007128836688091', 'visa'],
  ['5505351452673599', 'mastercard'],
  ['5455574925312731', 'mastercard'],
  ['342515173221866', 'american-express'],
  ['377042610739960', 'american-express'],
  ['6011831555874405', 'discover'],
  ['6011723919916119918', 'discover'],
  ['2200700140172643', 'mir'],
  ['2200700147242167', 'mir'],
  ['7200700147242167', 'inexplicable'],
  ['8200700147242167', 'inexplicable'],
  ['2233', 12],
  ['223322332233223322332233223322332233', 20],
])(('Проверка функции checkPaymentSystem'), (value, exp) => {
  expect(checkPaymentSystem(value)).toBe(exp);
});