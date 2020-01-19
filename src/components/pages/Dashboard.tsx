import React, { useState } from 'react';

import { Grid } from 'components/atoms/Grid/Grid';
import { Title } from 'components/atoms/Title/Title';
import { Toggle } from 'components/atoms/Toggle/Toggle';
import { List } from 'components/organisms/Lists/Lists';
import { ProjectsList } from 'components/organisms/ProjectsList/ProjectsList';
import { ProfilSvg } from 'components/assets/ProfilSvg';
import { HeaderFormsSvg } from 'components/assets/HeaderFormsSvg';

interface Props {}

const Dashboard: React.FC<Props> = () => {
  const [listView, setListView] = useState('list');
  const toggleOptions = [
    { label: 'Liste', value: 'list' },
    { label: 'Projets', value: 'projects' },
  ];
  return (
    <Grid gap={24} style={{ padding: '28px 36px', height: 'auto' }}>
      <HeaderFormsSvg
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: -1,
        }}
      />
      <Grid>
        <ProfilSvg />
      </Grid>
      <Toggle
        options={toggleOptions}
        onChange={e => setListView(e)}
        defaultSelectedValue={listView}
        style={{ marginBottom: 48 }}
      />
      <Title textAlign={'left'}>
        {listView === 'list' ? 'Liste' : 'Projets'}
      </Title>
      {listView === 'list' ? <List /> : <ProjectsList />}
    </Grid>
  );
};

export default Dashboard;
