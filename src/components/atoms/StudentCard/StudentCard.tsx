import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  specialties?: string[] | null;
  backgroundColor?: string | null;
}

const StyledWrapper = styled.div<Props>`
  min-height: 50px;
  width: 100%;
  background-color: ${props => { console.log(props.specialties); return props.backgroundColor || 'white' }};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4px 10px;
`;

const StyledName = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const StyledFirstName = styled.div`
  text-align: left;
  color: #4E4E56;
  font-size: 12px;
  font-weight: 500;
`;

const StyledLastName = styled.div`
  text-transform: uppercase;
  text-align: left;
  color: #4E4E56;
  font-size: 12px;
  font-weight: 500;
`;

const StyledSpecialties = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  align-self: center;
`;

const StyledSpecialty = styled.div`
  color: #4E4E56;
  font-size: 12px;
  font-weight: 500;
`;

export const StudentCard: React.FC<Props> = (props) => {
  return (
    <StyledWrapper backgroundColor={props.backgroundColor}>
      <StyledName>
        <StyledFirstName>Prénom</StyledFirstName>
        <StyledLastName>Nom</StyledLastName>
      </StyledName>
      <StyledSpecialties>
        {props.specialties && props.specialties.slice(0, 2).map((specialty, index) => <StyledSpecialty key={index}>{specialty}</StyledSpecialty>)}
      </StyledSpecialties>
    </StyledWrapper>
  );
};
