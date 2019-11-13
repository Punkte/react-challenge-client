import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { ChevronSvg } from 'components/assets/ChevronSvg';
import { Grid } from '../Grid/Grid';

import {
  SimpleTextField,
  SelectField,
  SelectItemField,
} from 'configs/fields/fields';

interface Props {
  isSelectOpen: boolean;
  field: SelectField;
  onToggleState: () => void;
  onChange: (value: SelectItemField) => void;
}

const StyledSelectContainer = styled.div``;

const StyledSelectItem = styled.span`
  background: rgba(226, 226, 226, 0.4);
  padding: 16px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #4e4e56;
  text-align: left;
  &:nth-child(2n) {
    background: white;
  }
`;

const StyledSelectPlaceholder = styled(Grid)`
  background: #ffffff;
  border: 1px solid rgba(39, 172, 139, 0.5);
  box-sizing: border-box;
  border-radius: 40px;
  padding: 16px;
  grid-template-columns: 1fr auto;
  text-align: left;
  span {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: #4e4e56;
  }
`;

const StyledSelectOptions = styled(motion.div)`
  display: grid;
  background: #ffffff;
  border: 1px solid rgba(39, 172, 139, 0.5);
  box-sizing: border-box;
  border-radius: 25px;
  overflow: hidden;
  margin-top: 16px;
`;

const StyledIcon = styled.div<any>`
  transition: all 0.3s ease;
  ${props =>
    props.isSelectOpen &&
    css`
      transform: rotate(180deg);
    `}
`;

export const SelectComponent: React.FC<Props> = ({
  isSelectOpen,
  field,
  onToggleState,
  onChange,
}) => {
  const { options, placeholder } = field;
  return (
    <StyledSelectContainer onClick={onToggleState}>
      <StyledSelectPlaceholder flow="column">
        <span>{placeholder}</span>
        <StyledIcon isSelectOpen={isSelectOpen}>
          <ChevronSvg />
        </StyledIcon>
      </StyledSelectPlaceholder>
      {isSelectOpen && (
        <StyledSelectOptions>
          {options &&
            options.map((option: SelectItemField) => (
              <StyledSelectItem
                // key={'select_item_' + field.key + option.value}
                onClick={() => onChange(option)}
              >
                {option.label}
              </StyledSelectItem>
            ))}
        </StyledSelectOptions>
      )}
    </StyledSelectContainer>
  );
};
