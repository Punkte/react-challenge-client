import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { SimpleTextField, SelectField } from '../../configs/fields/fields';

interface Props {}

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
`;

export const Input: React.FC<SimpleTextField | SelectField> = ({
  placeholder,
  children,
  key,
  title,
  type,
}) => {
  return (
    <StyledInputContainer>
      <StyledInput type={type} placeholder={placeholder} />
    </StyledInputContainer>
  );
};
