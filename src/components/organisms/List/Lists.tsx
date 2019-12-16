import React, { useState } from 'react';

import { Button } from 'components/atoms/Button/Button';
import { Grid } from 'components/atoms/Grid/Grid';
import { ListComponent } from './ListsComponent';

import styled from 'styled-components';

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
      <ListComponent
        listTitle="Dev Front"
        listType={listType}
        onChangeListType={(type: string) => setListType(type)}
      />
      <ListComponent
        listTitle="Dev Back"
        listType={listType}
        onChangeListType={(type: string) => setListType(type)}
      />
      <ListComponent
        listTitle="Ux / Ui"
        listType={listType}
        onChangeListType={(type: string) => setListType(type)}
      />
    </Grid>
  );
};
