import React, { useState } from 'react';
import styled from 'styled-components';
import { PageTitle } from '../atoms/PageTitle/PageTitle'
import { StudentList } from 'components/molecules/StudentList/StudentList';
import {StudentListItem } from '../../models/StudentListItem';
import { IStudent } from 'models/Student.model';
import { FiltersModel } from 'models/Filters.model';
import Filter from 'components/atoms/Filter/Filter';


interface Props {
  students?: StudentListItem[];
}

interface State {
  students: StudentListItem[]
}

const StyledWrapper = styled.div`
  padding: 50px 10vw;
`;

const StyledStudentListWrapper = styled.div``;

const students: IStudent[] | any = [
  { first_name: 'Jean', last_name: 'File', skills: [ 'Design' ] },
  { first_name: 'Simon', last_name: 'Tesquieu', skills: [ 'UX', 'UI' ] },
  { first_name: 'Albert', last_name: 'Line', skills: [ 'UI / UX', 'Design', 'JS' ] },
  { first_name: 'Sara', last_name: 'Croche', skills: [ 'ExpressJS', 'Docker', 'NestJS' ] },
  { first_name: 'Tony', last_name: 'Truand', skills: [ 'PHP', 'Docker', 'Laravel' ] }
].map(dataItem => ({
  firstName: dataItem.first_name,
  lastName: dataItem.last_name,
  skills: dataItem.skills
}))
const filters: FiltersModel = {
  roles: {
    ['Etudiant']: true,
    ['Intervenant']: false
  }
}

const StudentListView: React.FC = () => {
  const [state, setState] = useState({ students, filters })

  const handleOnChange = ({ filterKey, criteria }: { filterKey: string, criteria: string }) => {
    let stateCopy = JSON.parse(JSON.stringify(state))
    stateCopy.filters[filterKey][criteria] = !stateCopy.filters[filterKey][criteria]
    setState(stateCopy)
  }

  const resetFilters = (filterKey: string) => {
    let stateCopy = JSON.parse(JSON.stringify(state))
    Object.keys(stateCopy.filters[filterKey]).forEach(criteria => stateCopy.filters[filterKey][criteria] = false)
    setState(stateCopy)
  }

  return (
    <StyledWrapper>
      {/* <PageTitle value={'Liste'} /> */}
      <StyledStudentListWrapper>
        <StudentList students={state.students} />
      </StyledStudentListWrapper>
      {
        Object.keys(state.filters).map((filterKey, index) => (
          <Filter
            key={index}
            title={filterKey}
            filter={state.filters[filterKey]}
            handleOnChange={criteria => handleOnChange({ filterKey, criteria })}
            resetFilters={() => resetFilters(filterKey)}
          />
        ))
      }
    </StyledWrapper>
  )
}

export default StudentListView
