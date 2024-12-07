function formatPhoneNumber(number) {
  // Remove all non-digits
  number = number.replace(/\D/g, '');

  // Check length
  if (number.length !== 10) {
    return 'Invalid phone number';
  }

  // Format number
  const formattedNumber = `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6)}`;

  return formattedNumber;
}