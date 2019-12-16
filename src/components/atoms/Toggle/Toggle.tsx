import React from 'react';
import styled, { css } from 'styled-components';
import { Grid } from '../Grid/Grid';

interface Props {
  onChange: (state: any) => void;
  options?: { label: string; value: string }[];
  defaultSelectedValue: string;
  style?: any;
}

const StyledToggle = styled(Grid)`
  background: #f8f8f8;
  border-radius: 27px;
  grid-auto-rows: min-content;
  height: max-content;
  grid-auto-columns: max-content;
  width: fit-content;
  margin: 0 auto;
  color: #e0e0e0;
`;

const StyledToggleOption = styled.div<any>`
  background: #f8f8f8;
  border-radius: 27px;
  padding: 8px 12px;
  ${props =>
    props.isSelected &&
    css`
      color: white;
      background: linear-gradient(92.99deg, #79dcbc -17%, #2fb992 95.97%);
    `}
`;

export const Toggle: React.FC<Props> = ({
  options,
  onChange,
  defaultSelectedValue,
  style,
}) => {
  return (
    <StyledToggle flow="column" style={style}>
      {options &&
        options.map(({ label, value }) => {
          return (
            <StyledToggleOption
              key={label + '_' + value}
              onClick={() => onChange(value)}
              isSelected={defaultSelectedValue === value}
            >
              {label}
            </StyledToggleOption>
          );
        })}
    </StyledToggle>
  );
};
