import React from 'react';
import styled from 'styled-components';

interface Props {}

const StyledTitle = styled.span`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 49px;
  letter-spacing: 0.03em;
  color: #4e4e56;
`;

export const Title: React.FC<Props> = ({ children, ...props }) => {
  return <StyledTitle {...props}>{children}</StyledTitle>;
};
