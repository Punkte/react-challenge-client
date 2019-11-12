import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  value: string
}

const StyledWrapper = styled.div`
  font-weight: bold;
  font-size: 32px;
  color: #4E4E56;
  margin-bottom: 30px;
  letter-spacing: 0.03em;
  text-align: left;
`;

export const PageTitle: React.FC<Props> = (props) => {
  return (
    <StyledWrapper>
      {props.value}
    </StyledWrapper>
  );
};
