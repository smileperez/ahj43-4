import checkCard from './checkCard';

export default function checkPaymentSystem(cardNumber) {
  const { status, id } = checkCard(cardNumber);

  if (status === 'error') {
    return id;
  }

  switch (cardNumber[0]) {
    case '2': return 'mir';
    case '3': return 'american-express';
    case '4': return 'visa';
    case '5': return 'mastercard';
    case '6': return 'discover';
    default: return 'inexplicable';
  }
}
