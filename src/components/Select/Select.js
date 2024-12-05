import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

// NOTE: couldn't find how to use styled components with Icon
const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper style={{ "--value-char-count": displayedValue.length }}>
      <SelectElement value={value} onChange={onChange}>
        {children}
      </SelectElement>
      <Icon
        style={{
          position: "absolute",
          top: "25%",
          bottom: "25%",
          right: "16px",
          height: "50%",
          pointerEvents: "none",
        }}
        id="chevron-down"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  width: calc((var(--value-char-count) * 1em) + 16px);

  &:hover {
    color: ${COLORS.black};
  }
`;

const SelectElement = styled.select`
  appearance: none;
  background-color: transparent;
  padding: 16px;
  border: none;
  width: 100%;
`;

export default Select;
