import { ReactNode, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { centerContentCSS } from "lib/ui/utils/centerContentCSS";

import { roundedCSS } from "lib/ui/utils/roundedCSS";
import {
  InvisibleHTMLRadio,
  InvisibleHTMLRadioProps,
} from "../inputs/InvisibleHTMLRadio";
import { defaultTransitionCSS } from "../animations/transitions";

const Container = styled.label<{ isSelected: boolean }>`
  cursor: pointer;
  ${roundedCSS}
  padding: 0 16px;
  text-decoration: none;
  ${centerContentCSS};
  font-weight: 500;
  height: 48px;

  user-select: none;

  color: ${({ theme, isSelected }) =>
    (isSelected
      ? theme.colors.text
      : theme.colors.textSupporting
    ).toCssValue()};

  ${defaultTransitionCSS}

  :hover {
    background: ${({ theme }) => theme.colors.backgroundGlass.toCssValue()};
  }

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      background: ${theme.colors.backgroundGlass2.toCssValue()};
    `};
`;

interface Props extends InvisibleHTMLRadioProps {
  children: ReactNode;
  className?: string;
}

export const TabNavigationItem = ({
  isSelected,
  children,
  className,
  ...rest
}: Props) => {
  const ref = useRef<HTMLLabelElement>(null);
  useEffect(() => {
    if (isSelected) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [isSelected]);

  return (
    <Container
      ref={ref}
      className={className}
      tabIndex={-1}
      isSelected={isSelected}
    >
      {children}
      <InvisibleHTMLRadio isSelected={isSelected} {...rest} />
    </Container>
  );
};
