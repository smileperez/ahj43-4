export default function checkCard(cardNumber) {
  const parity = cardNumber.length % 2;
  let sum = 0;

  // Проверка на длину
  if (cardNumber.length < 12) {
    return { status: 'error', id: 12 };
  } if (cardNumber.length > 20) {
    return { status: 'error', id: 20 };
  }

  // Алгоритм Luhn
  for (let i = cardNumber.length - 1; i >= 0; i -= 1) {
    let d = parseInt(cardNumber.charAt(i), 10);
    if (i % 2 === parity) { d *= 2; }
    if (d > 9) { d -= 9; }
    sum += d;
  }
  if (sum % 10 === 0) {
    return { status: 'succes', id: true };
  }
  return { status: 'error', id: 'inexplicable' };
}
