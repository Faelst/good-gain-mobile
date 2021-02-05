export const convertToCurrency = (value: string | number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumIntegerDigits: 1
  }).format(parseFloat(value.toString()) / 100);
