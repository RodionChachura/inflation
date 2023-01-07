import { InflationReport } from "components/InflationReport";
import { TextInput } from "lib/ui/inputs/TextInput";
import { VStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";
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
  const [amount, setAmount] = useState("100000");
  const [inflation, setInflation] = useState("8");

  const amountNumber = Number(amount);
  const inflationNumber = Number(inflation) / 100;

  return (
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
          <TextInput
            label="My savings"
            value={amount}
            onValueChange={setAmount}
            type="number"
          />
          <TextInput
            label="Expected inflation"
            value={inflation}
            onValueChange={setInflation}
            type="number"
          />
        </VStack>
        {!isNaN(amountNumber) && !isNaN(inflationNumber) && (
          <InflationReport savings={amountNumber} inflation={inflationNumber} />
        )}
      </VStack>
    </Container>
  );
}
