import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
  SimpleTextField,
  SelectField,
  SelectItemField,
} from '../../../configs/fields/fields';

interface Props {
  onChange: (value: SelectItemField) => void;
  defaultValue?: string;
}

const StyledInput = styled(motion.input)`
  background: #ffffff;
  border: none;
  box-sizing: border-box;
  border-radius: 40px;
  padding: 18px;
  width: 100%;
`;

const StyledInputContainer = styled.div`
  background: #ffffff;
  border: 1px solid rgba(39, 172, 139, 0.5);
  box-sizing: border-box;
  border-radius: 40px;
  // max-width: 330px;
  width: 100%;
`;

export const Input: React.FC<Props & SimpleTextField | Props & SelectField> = ({
  placeholder,
  children,
  key,
  title,
  type,
  onChange,
  defaultValue
}) => {
  return (
    <StyledInputContainer>
      <StyledInput
        type={type}
        placeholder={placeholder}
        onBlur={e => onChange({ label: key, value: e.target.value })}
        defaultValue={defaultValue}
      />
    </StyledInputContainer>
  );
};
