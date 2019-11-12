import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface Props {
  type?: 'filled' | 'outlined';
}

const StyledButton = styled<any>(motion.button)`
  border-radius: 56px;
  border: none;
  padding: 18px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;

  &:hover {
    cursor: pointer;
  }

//   If props.type is not passed give default style
  ${props =>
    !props.type &&
    css`
      background: linear-gradient(
        90deg,
        #27ac8b 0%,
        rgba(0, 255, 151, 0.58) 100%
      );
      color: #ffffff;
    `}

  ${props =>
    props.type === 'filled' &&
    css`
      background: linear-gradient(
        90deg,
        #27ac8b 0%,
        rgba(0, 255, 151, 0.58) 100%
      );
      color: #ffffff;
    `}

  ${props =>
    props.type === 'outlined' &&
    css`
      border-color: #93d5c5;
      background: white;
      color: #4e5980;
    `}
`;

export const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
    <StyledButton
      {...props}
      whileHover={{
        scale: 1.01,
      }}
      whilePress={{ scale: 0.8 }}
    >
      {children}
    </StyledButton>
  );
};
