import React from 'react';
import styled from 'styled-components';
import { PageTitle } from '../atoms/PageTitle/PageTitle'
import { StudentList } from 'components/atoms/StudentList/StudentList';
import { Student } from '../../models/Student';


interface Props {
  students?: Student[];
}

interface State {
  students: Student[]
}

const StyledWrapper = styled.div`
  padding: 50px 10vw;
`;

const StyledStudentListWrapper = styled.div``;

export default class StudentListView extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props);
    this.state = {
      students: props.students || []
    };
  };

  async componentDidMount () {
    const data: any[] = [
      { first_name: 'Jean', last_name: 'File', skills: [ 'Design' ] },
      { first_name: 'Simon', last_name: 'Tesquieu', skills: [ 'UX', 'UI' ] },
      { first_name: 'Albert', last_name: 'Line', skills: [ 'UI / UX', 'Design', 'JS' ] },
      { first_name: 'Sara', last_name: 'Croche', skills: [ 'ExpressJS', 'Docker', 'NestJS' ] },
      { first_name: 'Tony', last_name: 'Truand', skills: [ 'PHP', 'Docker', 'Laravel' ] }
    ];
    this.setState({
      students: data.map(dataItem => ({
        firstName: dataItem.first_name,
        lastName: dataItem.last_name,
        skills: dataItem.skills
      }))
    })
  }

  render () {
    return (
      <StyledWrapper>
        <PageTitle value={'Liste'} />
        <StyledStudentListWrapper>
          <StudentList students={this.state.students} />
        </StyledStudentListWrapper>
      </StyledWrapper>
    )
  }
}
