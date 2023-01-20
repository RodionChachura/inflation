import { ExternalLink } from "lib/navigation/Link/ExternalLink";
import { defaultTransitionCSS } from "lib/ui/animations/transitions";
import { YouTubeIcon } from "lib/ui/icons/YouTubeIcon";
import { Panel } from "lib/ui/Panel/Panel";
import { HStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";
import styled from "styled-components";

const inflationResourceUrl = "https://youtu.be/_w5wrE_eN4o";

const Container = styled(Panel)`
  background: ${({ theme }) =>
    theme.colors.success.getVariant({ a: () => 0.1 }).toCssValue()};
  color: ${({ theme }) => theme.colors.success.toCssValue()};
  font-weight: 600;

  svg {
    font-size: 24px;
  }

  ${defaultTransitionCSS}

  :hover {
    transform: scale(1.02);
    background: ${({ theme }) =>
      theme.colors.success.getVariant({ a: () => 0.12 }).toCssValue()};
  }
`;

export const InflationResourcePromotion = () => {
  return (
    <ExternalLink to={inflationResourceUrl}>
      <Container>
        <HStack alignItems="center" justifyContent="space-between">
          <HStack alignItems="center" gap={12}>
            <Text size={20}>🤑</Text>
            <Text>Learn how to beat inflation</Text>
          </HStack>
          <YouTubeIcon />
        </HStack>
      </Container>
    </ExternalLink>
  );
};
