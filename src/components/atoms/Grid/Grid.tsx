import React from 'react';
import styled from 'styled-components';

interface Props {
  flow?: string;
  gap?: number;
  align?: string;
  children: any;
  style?: any;
}

const StyledWrapper = styled.div<Props>`
  height: 100%;
  width: 100%;
  display: grid;
  grid-auto-flow: ${props => props.flow || 'row'};
  gap: ${props => props.gap || 4}px;
  align-items: ${props => props.align || 'inherit'};
`;

export const Grid: React.FC<Props> = ({ children, ...props }) => {
  return <StyledWrapper {...props}>{children}</StyledWrapper>;
};
