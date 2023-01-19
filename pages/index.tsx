import { InflationReport } from "components/InflationReport";
import { DollarIcon } from "lib/ui/icons/DollarIcon";
import { PercentIcon } from "lib/ui/icons/PercentIcon";
import { AmountTextInput } from "lib/ui/inputs/AmountTextInput";
import { TextInput } from "lib/ui/inputs/TextInput";
import { VStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";
import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 80px 20px 40px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
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
        <VStack gap={20} style={{ maxWidth: 360 }}>
          <Text centered as="h1">
            How much money am I losing to{" "}
            <Text as="span" color="alert">
              inflation
            </Text>
            ?
          </Text>
          <VStack gap={4}>
            <AmountTextInput
              label="My savings"
              value={amount}
              onValueChange={setAmount}
              type="number"
              unit={<DollarIcon />}
            />
            <AmountTextInput
              label="Expected inflation"
              value={inflation}
              onValueChange={setInflation}
              type="number"
              unit={<PercentIcon />}
            />
          </VStack>
          {amount !== undefined && inflation !== undefined && (
            <InflationReport savings={amount} inflation={inflation / 100} />
          )}
        </VStack>
      </Container>
    </>
  );
}
