import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { StudentCard } from '../StudentCard/StudentCard';
import { Student } from '../../../models/Student';

interface Props {
  students: Student[];
}

const StyledWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
  background-color: white;
`;

const StyledBorder = styled.div`
  background: linear-gradient(129.33deg, #79DCBC -17%, #2FB992 95.97%);
  height: 11px;
`;

const StyledEmpty = styled.div`
  padding: 15px;
  text-align: center;
  color: #4E4E56;
  font-size: 12px;
  font-weight: 500;
`;

export const StudentList: React.FC<Props> = (props) => {
  return (
    <StyledWrapper>
      <StyledBorder />
      {props.students.length
        ? props.students.map((student, index) => (
          <StudentCard
            key={index}
            backgroundColor={index % 2 === 0 ? '#F3F3F3' : ''}
            firstName={student.firstName}
            lastName={student.lastName}
            specialties={student.specialties}
          ></StudentCard>
        ))
        : <StyledEmpty>Aucun étudiant ne correspond à la recherche.</StyledEmpty>
      }
      <StyledBorder />
    </StyledWrapper>
  );
};
