import React from 'react';
import styled from 'styled-components';

interface Props {
  textAlign?: string;
}

const StyledTitle = styled.span<any>`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 49px;
  letter-spacing: 0.03em;
  color: #4e4e56;
  text-align: ${props => (props.textAlign ? props.textAlign : 'inherit')};
`;

export const Title: React.FC<Props> = ({ children, ...props }) => {
  return <StyledTitle {...props}>{children}</StyledTitle>;
};
