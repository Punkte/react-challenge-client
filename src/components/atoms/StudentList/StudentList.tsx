import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { StudentCard } from '../StudentCard/StudentCard';

interface Student {
  firstName: string;
  lastName: string;
  specialties: string[];
}

interface Props {
  students: Student[];
}

const StyledWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const StyledBorder = styled.div`
  background: linear-gradient(129.33deg, #79DCBC -17%, #2FB992 95.97%);
  height: 11px;
`;

export const StudentList: React.FC<Props> = (props) => {
  return (
    <StyledWrapper>
      <StyledBorder />
      {props.students.map((student, index) => (
        <StudentCard
          key={index}
          backgroundColor={index % 2 === 0 ? '#F3F3F3' : ''}
          firstName={student.firstName}
          lastName={student.lastName}
          specialties={student.specialties}
        ></StudentCard>
      ))}
      <StyledBorder />
    </StyledWrapper>
  );
};
