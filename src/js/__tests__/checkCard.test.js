import checkCard from '../checkCard';

test.each([
  ['4539560534518423', 'succes'],
  ['4716263479965676', 'succes'],
  ['5505351452673599', 'succes'],
  ['5455574925312731', 'succes'],
  ['342515173221866', 'succes'],
  ['377042610739960', 'succes'],
  ['6011723919916119918', 'succes'],
  ['6011831555874405', 'succes'],
  ['6368290055961892', 'error'],
  ['22222', 'error'],
  ['1234567891234567891234567', 'error'],
])(('Проверка функции checkCard'), (value, exp) => {
  expect(checkCard(value).status).toBe(exp);
});