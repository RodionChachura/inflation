import { InflationReport } from "components/InflationReport";
import { InflationResourcePromotion } from "components/InflationResourcePromotion";
import { DollarIcon } from "lib/ui/icons/DollarIcon";
import { PercentIcon } from "lib/ui/icons/PercentIcon";
import { AmountTextInput } from "lib/ui/inputs/AmountTextInput";
import { VStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";
import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";

const Container = styled(VStack)`
  padding: 80px 20px 40px 20px;

  align-items: center;
`;

const Content = styled(VStack)`
  max-width: 360px;
  gap: 20px;
`;

export default function Home() {
  const [amount, setAmount] = useState<number | undefined>(100000);
  const [inflation, setInflation] = useState<number | undefined>(8);

  return (
    <>
      <Head>
        <title>Inflation Calculator | See how your savings lose value</title>
        <meta
          name="description"
          content="Calculate how much money you lose to inflation every year/month/day"
        />
      </Head>
      <Container>
        <Content>
          <Text
            style={{ textTransform: "uppercase" }}
            weight="semibold"
            as="h1"
          >
            How much do I lose to{" "}
            <Text as="span" color="alert">
              inflation?
            </Text>
          </Text>
          <VStack gap={4}>
            <AmountTextInput
              label="Savings"
              value={amount}
              onValueChange={setAmount}
              shouldBePositive
              shouldBeInteger
              unit={<DollarIcon />}
            />
            <AmountTextInput
              label="Inflation"
              value={inflation}
              onValueChange={setInflation}
              shouldBePositive
              unit={<PercentIcon />}
            />
          </VStack>
          {amount !== undefined && inflation !== undefined && (
            <InflationReport savings={amount} inflation={inflation} />
          )}
          <InflationResourcePromotion />
        </Content>
      </Container>
    </>
  );
}
