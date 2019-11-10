import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  variant: 'error' | 'warning' | 'success' | 'default';
}

const StyledTitle = styled.span<Props>`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.03em;
  color: #4e4e56;

  ${props =>
    props.variant === 'error' &&
    css`
      color: #ff9090;
    `}

  ${props =>
    props.variant === 'success' &&
    css`
      color: green;
    `}

  ${props =>
    props.variant === 'warning' &&
    css`
      color: yellow;
    `}
`;

export const Text: React.FC<Props> = ({ children, ...props }) => {
  return <StyledTitle {...props}>{children}</StyledTitle>;
};
