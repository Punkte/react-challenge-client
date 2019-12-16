import React from 'react';
import styled from 'styled-components';

interface Props {
  flow?: string;
  gap?: number;
  align?: string;
  children: any;
  style?: any;
  forwardRef?: any;
  onClick?: any;
}

const StyledWrapper = styled.div<Props>`
  height: 100%;
  width: 100%;
  display: grid;
  grid-auto-flow: ${props => props.flow || 'row'};
  gap: ${props => props.gap || 4}px;
  align-items: ${props => props.align || 'inherit'};
`;

export const Grid: React.FC<Props> = ({ children, forwardRef, ...props }) => {
  return (
    <StyledWrapper {...props} ref={forwardRef}>
      {children}
    </StyledWrapper>
  );
};
