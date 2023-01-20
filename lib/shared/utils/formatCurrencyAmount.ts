const sharedFormatterConfig = {
  style: "currency",
  currency: "USD",
};

const intCurrencyFormatter = new Intl.NumberFormat("en-US", {
  ...sharedFormatterConfig,
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

const floatCurrencyFormatter = new Intl.NumberFormat("en-US", {
  ...sharedFormatterConfig,
  maximumFractionDigits: 2,
});

export const formatCurrencyAmount = (amount: number) => {
  const formatter = Number.isInteger(amount)
    ? intCurrencyFormatter
    : floatCurrencyFormatter;

  return formatter.format(amount);
};
