import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface Props {
  variant?: 'filled' | 'outlined';
  type?: string;
  onClick?: any;
  style?: any;
}

const StyledButton = styled<any>(motion.button)`
  background-origin: border-box !important;
  border-radius: 56px;
  border: 1px solid transparent;
  padding: 18px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  // max-width: 330px;
  // width: 330px;

  &:hover {
    cursor: pointer;
  }

//   If props.type is not passed give default style
  ${props =>
    !props.variant &&
    css`
      background: linear-gradient(90deg, #27ac8b 0%, #64f9bd 100%);
      color: #ffffff;
    `}

  ${props =>
    props.variant === 'filled' &&
    css`
      background: linear-gradient(90deg, #27ac8b 0%, #64f9bd 100%);
      color: #ffffff;
    `}

  ${props =>
    props.variant === 'outlined' &&
    css`
      border-color: #93d5c5;
      background: white;
      color: #32c497;
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
