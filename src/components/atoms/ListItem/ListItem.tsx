import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  id?: string;
  firstName?: string;
  lastName?: string;
  skills?: string[];
  backgroundColor?: string;
  img?: string;
}

const StyledLink = styled(Link)`
text-decoration: none;
`

const StyledWrapper = styled.div<Props>`
  cursor: pointer;
  min-height: 50px;
  width: 100%;
  background-color: ${props => props.backgroundColor || 'white'};
  display: flex;
  flex-direction: row;
  padding: 4px 10px;

  a {
    text-decoration: none;
  }

  img {
    width: 40px;
    height: 40px;
    margin-right: 8px;
    
    object-fit: cover;
    border-radius: 40px;
  }
`;

const StyledName = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
`;

const StyledFirstName = styled.div`
  text-align: left;
  color: #4e4e56;
  font-size: 12px;
  font-weight: 500;
`;

const StyledLastName = styled.div`
  text-transform: uppercase;
  text-align: left;
  color: #4e4e56;
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
  color: #4e4e56;
  font-size: 12px;
  font-weight: 500;
`;

export const ListItem: React.FC<Props> = props => {
  return (
    <StyledLink to={`/profile/${props.id}`}>
      <StyledWrapper backgroundColor={props.backgroundColor}>
          <img src={props.img} />
          <StyledName>
            <StyledFirstName>{props.firstName}</StyledFirstName>
            <StyledLastName>{props.lastName}</StyledLastName>
          </StyledName>
      </StyledWrapper>
    </StyledLink>
  );
};
