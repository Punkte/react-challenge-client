import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import StudentListView from 'components/pages/StudentListView';

import { IStudent } from 'models/Student.model';
import { Grid } from 'components/atoms/Grid/Grid';
import { Button } from 'components/atoms/Button/Button';
import { ListItem } from 'components/atoms/ListItem/ListItem';

interface Props {
  listType: string;
  listTitle: string;
  array?: any[];
  onChangeListType: (typr: string) => void;
}

const StyledListHeader = styled(Grid)`
  background: linear-gradient(129.33deg, #79dcbc -17%, #2fb992 95.97%);
  padding: 16px 10px;
  grid-auto-columns: 1fr auto;
  border-radius: 4px 4px 0 0;
  cursor: pointer;
`;

const StyledBorder = styled.div`
  background: linear-gradient(129.33deg, #79dcbc -17%, #2fb992 95.97%);
  height: 11px;
`;

const CircleButton = styled(Button)`
  height: 14px;
  width: 14px;
  color: #27ac8b;
  border-radius: 50%;
  background: #fff;
  padding: 0;
  line-height: 10px;
`;

const StyledEmpty = styled.div`
  padding: 15px;
  text-align: center;
  color: #4e4e56;
  font-size: 12px;
  font-weight: 500;
`;

const StyledListContainer = styled(Grid)`
  box-shadow: 0px 4px 34px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  grid-gap: 0;
`;

export const ListComponent: React.FC<Props> = ({
  listType,
  listTitle,
  array,
}) => {
  const [isCollapsed, setCollapsed] = useState(true);
  const count = array ? array.length : 0;
  const itemsContainerRef = useRef();

  return (
    <StyledListContainer>
      <StyledListHeader
        flow="column"
        align="center"
        onClick={() => setCollapsed(!isCollapsed)}
      >
        <CircleButton onClick={() => setCollapsed(!isCollapsed)}>
          {isCollapsed ? '+' : '-'}
        </CircleButton>
        <Grid flow="column" gap={16}>
          <span
            style={{
              color: '#fff',
              textTransform: 'capitalize',
              fontWeight: 'bold',
            }}
          >
            {listTitle}
          </span>
          <CircleButton style={{ height: 24, width: 24 }}>{count}</CircleButton>
        </Grid>
      </StyledListHeader>
      <Grid
        forwardRef={itemsContainerRef}
        gap={0}
        style={{
          overflow: 'hidden',
          height: isCollapsed ? '0px' : 'inherit',
        }}
      >
        {array && array.length ? (
          array.map((student: any, index: number) => (
            <ListItem
              key={index}
              backgroundColor={index % 2 === 0 ? '#F3F3F3' : ''}
              firstName={student.firstName}
              lastName={student.lastName}
              skills={student.skills}
            ></ListItem>
          ))
        ) : (
          <StyledEmpty>
            Aucun étudiant ne correspond à la recherche.
          </StyledEmpty>
        )}
      </Grid>
      <StyledBorder style={{ borderRadius: '0 0 4px 4px', marginTop: -5 }} />
    </StyledListContainer>
  );
};
