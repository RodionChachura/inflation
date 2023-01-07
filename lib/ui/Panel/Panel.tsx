import styled, { css } from "styled-components";
import { defaultBorderRadiusCSS } from "../borderRadius";
import { getCSSUnit } from "../utils/getCSSUnit";

export interface PanelProps {
  width?: React.CSSProperties["width"];
  padding?: React.CSSProperties["padding"];
  withSections?: boolean;
}

export const panelBackgroundCSS = css`
  background: ${({ theme: { name, colors } }) =>
    (name === "light"
      ? colors.background
      : colors.backgroundGlass
    ).toCssValue()};
`;

const panelPaddingCSS = css<{ padding?: React.CSSProperties["padding"] }>`
  padding: ${({ padding }) => getCSSUnit(padding || 20)};
`;

export const Panel = styled.div<PanelProps>`
  ${defaultBorderRadiusCSS};
  width: ${({ width }) => (width ? getCSSUnit(width) : undefined)};
  box-shadow: ${({ theme }) => theme.shadows.small};
  overflow: hidden;

  ${({ withSections }) =>
    withSections
      ? css`
          display: flex;
          flex-direction: column;
          gap: 1px;

          background: ${({ theme }) =>
            theme.name === "light"
              ? theme.colors.backgroundGlass2.toCssValue()
              : undefined};

          > * {
            ${panelPaddingCSS}
            ${panelBackgroundCSS}
          }
        `
      : css`
          ${panelPaddingCSS}
          ${panelBackgroundCSS}
        `}
`;
