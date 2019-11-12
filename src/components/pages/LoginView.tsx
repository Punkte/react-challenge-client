import React from 'react';
import styled from 'styled-components';

import { Grid } from 'components/atoms/Grid/Grid';
import { HeaderSvg } from 'components/assets/HeaderSvg';
import { LogoHeticSvg } from 'components/assets/LogoHeticSvg';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { Text } from 'components/atoms/Text/Text';
import { StudentList } from 'components/atoms/StudentList/StudentList';
import { InputSwitcher } from 'components/atoms/InputSwitcher/InputSwitcher';

import { fields, SelectField } from '../../configs/fields/fields';

const StyledHeaderSvg = styled(HeaderSvg)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items start;
`;

const StyledContent = styled(Grid)`
  max-width: 960px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 74px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  padding: 46px;
  grid-template-columns: 1fr 1fr;
`;

const StyledLoginViewContainer = styled(Grid)`
  align-items: center;
  justify-content: center;
  grid-auto-columns: 100%;
  grid-auto-rows: 250px min-content;
  height: 100vh;
  padding: 70px 100px;
`;

interface Props {}

const LoginView: React.FC<Props> = () => {
  let renderFields = (() => {
    if (window.location.pathname === '/inscription') {
      return fields.inscription.fields.map(
        (field: SelectField, index: number) => {
          return <InputSwitcher field={field} />;
        },
      );
    } else {
      return fields.login.fields.map((field: SelectField, index: number) => {
        return <InputSwitcher field={field} />;
      });
    }
  })();

  return (
    <StyledLoginViewContainer>
      <StyledHeaderSvg />
      <LogoHeticSvg />
      <form>
        <StyledContent flow="column">
          <Grid
            style={{
              gridAutoFlow: 'row',
              gridAutoRows: 'min-content',
              textAlign: 'left',
            }}
            gap={24}
          >
            <Title>Bonjour !</Title>
            <Text variant="default">
              Etudiant à Hetic ? C’est ici que vous formerez vos groupes !{' '}
            </Text>
          </Grid>
          <Grid gap={20} style={{ justifyContent: 'center', paddingTop: 75 }}>
            {renderFields}
            <Button variant="filled" type="submit">
              Se connecter
            </Button>
            <Grid>
              <Text variant="default">Pas encore inscrit ? </Text>
              <Text variant="success">S’inscrire</Text>
            </Grid>
          </Grid>
        </StyledContent>
      </form>
    </StyledLoginViewContainer>
  );
};

export default LoginView;
