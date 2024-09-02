export const luhnChecksum = (value: number[]): boolean => {
  const sum = value
    .reverse()
    .map((digit, index) => {
      if (index % 2 === 1) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      return digit;
    })
    .reduce((acc, curr) => acc + curr, 0);

  return sum % 10 === 0;
};
