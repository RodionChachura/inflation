import { formatCurrencyAmount } from "lib/shared/utils/formatCurrencyAmount";
import { Text } from "lib/ui/Text";

interface AmountLossProps {
  value: number;
  period: string;
}

export const AmountLoss = ({ value, period }: AmountLossProps) => {
  return (
    <Text weight="bold" size={18}>
      <Text as="span" color="alert">
        {formatCurrencyAmount(Math.round(value))}
      </Text>{" "}
      in {period}
    </Text>
  );
};
