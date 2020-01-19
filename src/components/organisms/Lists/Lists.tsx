import React, { useState } from 'react';
import { ListComponent } from './ListsComponent';
import { Button } from 'components/atoms/Button/Button';
import { Grid } from 'components/atoms/Grid/Grid';
import styled from 'styled-components';
import { IStudent } from 'models/Student.model';

interface Props {}

const StyledListButton = styled(Button)`
  padding: 8px 16px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  width: min-content;
`;

export const List: React.FC<Props> = () => {
  const [listType, setListType] = useState('students');

  const students: IStudent[] | any = [
    { first_name: 'Jean', last_name: 'File', skills: ['Design'] },
    { first_name: 'Simon', last_name: 'Tesquieu', skills: ['UX', 'UI'] },
    {
      first_name: 'Albert',
      last_name: 'Line',
      skills: ['UI / UX', 'Design', 'JS'],
    },
    {
      first_name: 'Sara',
      last_name: 'Croche',
      skills: ['ExpressJS', 'Docker', 'NestJS'],
    },
    {
      first_name: 'Tony',
      last_name: 'Truand',
      skills: ['PHP', 'Docker', 'Laravel'],
    },
  ].map(dataItem => ({
    firstName: dataItem.first_name,
    lastName: dataItem.last_name,
    skills: dataItem.skills,
  }));

  const speakers: any = [
    { first_name: 'Eric', last_name: 'Priou', skills: ['Dev'] },
    { first_name: 'Namiko', last_name: 'Konami', skills: ['Yoga 🧘‍♀️'] },
    { first_name: 'Gabriel', last_name: 'ADC', skills: ['UIX 🎨'] },
  ].map(dataItem => ({
    firstName: dataItem.first_name,
    lastName: dataItem.last_name,
    skills: dataItem.skills,
  }));

  return (
    <Grid gap={24}>
      <Grid
        flow="column"
        style={{ gridAutoColumns: 'max-content', gridTemplateColumns: '1fr' }}
      >
        <Grid flow="column" style={{ gridAutoColumns: 'min-content' }}>
          <StyledListButton
            onClick={() => setListType('students')}
            variant={listType === 'students' ? 'outlined' : 'filled'}
          >
            Étudiant
          </StyledListButton>
          <StyledListButton
            onClick={() => setListType('speakers')}
            variant={listType !== 'students' ? 'outlined' : 'filled'}
          >
            Intervenant
          </StyledListButton>
        </Grid>
        <StyledListButton style={{ fontWeight: 'bold' }}>
          Filters
        </StyledListButton>
      </Grid>
      {listType === 'students' ? (
        <>
          <ListComponent
            listTitle="Dev Front"
            array={students}
            listType={listType}
            onChangeListType={(type: string) => setListType(type)}
          />
          <ListComponent
            listTitle="Dev Back"
            array={students}
            listType={listType}
            onChangeListType={(type: string) => setListType(type)}
          />
          <ListComponent
            listTitle="Ux / Ui"
            array={students}
            listType={listType}
            onChangeListType={(type: string) => setListType(type)}
          />
        </>
      ) : (
        <ListComponent
          listTitle="Intervenant"
          array={speakers}
          listType={listType}
          onChangeListType={(type: string) => setListType(type)}
        />
      )}
    </Grid>
  );
};
