import { Ref, forwardRef, ReactNode, useRef } from "react";
import styled from "styled-components";
import { centerContentCSS } from "../utils/centerContentCSS";

import { TextInput, TextInputProps } from "./TextInput";

type AmountTextInputProps = Omit<TextInputProps, "value" | "onValueChange"> & {
  value: number | undefined;
  onValueChange?: (value: number | undefined) => void;
  unit?: ReactNode;
};

const UnitContainer = styled.div`
  border-radius: 8px;
  font-weight: bold;
  position: absolute;
  left: 12px;
  ${centerContentCSS};
`;

const Input = styled(TextInput)`
  padding-left: 40px;
`;

export const AmountTextInput = forwardRef(function AmountInputInner(
  {
    onValueChange,
    onChange,
    max,
    inputOverlay,
    unit,
    value,
    ...props
  }: AmountTextInputProps,
  ref: Ref<HTMLInputElement> | null
) {
  const valueAsString = value?.toString() ?? "";

  const inputValue = useRef<string>(valueAsString);

  return (
    <Input
      {...props}
      value={valueAsString === inputValue.current ? inputValue.current : value}
      ref={ref}
      inputOverlay={unit ? <UnitContainer>{unit}</UnitContainer> : undefined}
      onValueChange={(value) => {
        const valueAsNumber = Number(value);
        if (Number.isNaN(valueAsNumber)) {
          return;
        }

        inputValue.current = value;
        onValueChange?.(value === "" ? undefined : valueAsNumber);
      }}
    />
  );
});
