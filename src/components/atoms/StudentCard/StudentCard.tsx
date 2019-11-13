import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  firstName?: string;
  lastName?: string;
  skills?: string[];
  backgroundColor?: string;
}

const StyledWrapper = styled.div<Props>`
  min-height: 50px;
  width: 100%;
  background-color: ${props => { console.log(props.skills); return props.backgroundColor || 'white' }};
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

const StyledSkills = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  align-self: center;
`;

const StyledSkill = styled.div`
  color: #4E4E56;
  font-size: 12px;
  font-weight: 500;
`;

export const StudentCard: React.FC<Props> = (props) => {
  return (
    <StyledWrapper backgroundColor={props.backgroundColor}>
      <StyledName>
        <StyledFirstName>{props.firstName}</StyledFirstName>
        <StyledLastName>{props.lastName}</StyledLastName>
      </StyledName>
      <StyledSkills>
        {props.skills && props.skills.slice(0, 2).map((skill, index) => <StyledSkill key={index}>{skill}</StyledSkill>)}
      </StyledSkills>
    </StyledWrapper>
  );
};
