import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { defaultTransitionCSS } from "lib/ui/animations/transitions";
import { centerContentCSS } from "lib/ui/utils/centerContentCSS";

import { defaultInputShapeCSS } from "../config";
import {
  InvisibleHTMLRadio,
  InvisibleHTMLRadioProps,
} from "../InvisibleHTMLRadio";

const Container = styled.label<{ isSelected: boolean }>`
  position: relative;
  cursor: pointer;

  ${centerContentCSS}
  background: ${({ theme }) => theme.colors.backgroundGlass.toCssValue()};

  ${defaultInputShapeCSS};
  ${defaultTransitionCSS};

  font-weight: 500;

  color: ${({ theme }) => theme.colors.textSupporting.toCssValue()};
  :hover {
    background: ${({ theme }) => theme.colors.backgroundGlass2.toCssValue()};
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: ${({ theme }) => theme.colors.backgroundGlass2.toCssValue()};
      color: ${({ theme }) => theme.colors.text.toCssValue()};
    `};
`;

interface Props extends InvisibleHTMLRadioProps {
  children: ReactNode;
  className?: string;
}

export const SelectOption = ({
  isSelected,
  children,
  className,
  ...rest
}: Props) => {
  return (
    <Container className={className} tabIndex={-1} isSelected={isSelected}>
      {children}
      <InvisibleHTMLRadio isSelected={isSelected} {...rest} />
    </Container>
  );
};
