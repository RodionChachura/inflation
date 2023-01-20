import { formatCurrencyAmount } from "lib/shared/utils/formatCurrencyAmount";
import { VStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";
import { AmountLoss } from "./AmountLoss";

interface InflationReportProps {
  savings: number;
  inflation: number;
}
const formatPercentage = (percentage: number) => {
  return `${(Number.isInteger(percentage) ? percentage : percentage).toFixed(
    2
  )}%`;
};

export const InflationReport = ({
  savings,
  inflation,
}: InflationReportProps) => {
  const inflationRate = inflation / 100;
  const yearlyLoss = savings * inflationRate;
  return (
    <VStack gap={8}>
      <Text as="h3" weight="bold" color="supporting2">
        With{" "}
        <Text as="span" color="regular">
          {formatPercentage(inflation)}
        </Text>{" "}
        inflation and{" "}
        <Text as="span" color="success">
          {formatCurrencyAmount(savings)}
        </Text>{" "}
        in savings you will lose:
      </Text>
      <AmountLoss value={yearlyLoss} period={"a year"} />
      <AmountLoss value={yearlyLoss / 12} period={"a month"} />
      <AmountLoss value={yearlyLoss / 365} period={"a day"} />
    </VStack>
  );
};
