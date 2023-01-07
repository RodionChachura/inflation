import { VStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";

interface InflationReportProps {
  savings: number;
  inflation: number;
}

export const InflationReport = ({
  savings,
  inflation,
}: InflationReportProps) => {
  const yearlyLoss = savings * inflation;
  return (
    <VStack gap={8}>
      <Text as="h2">You will lose</Text>
      <Text>
        After one year:{" "}
        <Text weight="bold" as="span" color="alert">
          {savings * inflation}$
        </Text>
      </Text>
      <Text>
        Monthly:{" "}
        <Text weight="bold" as="span" color="alert">
          {yearlyLoss / 12}$
        </Text>
      </Text>
      <Text>
        Daily:{" "}
        <Text weight="bold" as="span" color="alert">
          {Math.round(yearlyLoss / 365)}$
        </Text>
      </Text>
    </VStack>
  );
};
