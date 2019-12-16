import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useSpring } from 'framer-motion';

import { Grid } from 'components/atoms/Grid/Grid';
import { HeaderSvg } from 'components/assets/HeaderSvg';
import { LogoHeticSvg } from 'components/assets/LogoHeticSvg';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { Text } from 'components/atoms/Text/Text';
import { StudentList } from 'components/molecules/StudentList/StudentList';
import { InputSwitcher } from 'components/atoms/InputSwitcher/InputSwitcher';

import {
  fields,
  SelectField,
  SelectItemField,
} from '../../configs/fields/fields';
import { withLoginContext } from 'components/context/Login/LoginContext';

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
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 74px rgba(0, 0, 0, 0.06);
  border-radius: 0px;
  padding: 46px;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 34px rgba(0, 0, 0, 0.15);
`;

const StyledLoginViewContainer = styled(motion.div)`
  display: grid;
  gap: 200px;
  height: 100%;
  width: 100%;
  grid-template-columns: 100%;
`;

interface Props {}

const LoginView: React.FC<Props> = props => {
  const onChange = (value: SelectItemField) => {
    console.log(value);
  };

  const y = useSpring(0, { stiffness: 100, damping: 150 });

  return (
    <>
      <div>
        <motion.div
        // style={{
        //   y,
        // }}
        >
          <StyledHeaderSvg />
        </motion.div>
      </div>
      <StyledLoginViewContainer
        style={{
          y,
        }}
      >
        <Grid gap={100} style={{ maxWidth: 1100, margin: '0 auto' }}>
          <LogoHeticSvg />
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
              <hr
                style={{
                  background: '#70E3B9',
                  width: 35,
                  height: 5,
                  border: 'none',
                  margin: 0,
                }}
              />
              <Text
                variant="default"
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  color: '#969696',
                }}
              >
                Etudiant à Hetic ? C’est ici que vous formerez vos groupes !
              </Text>
              <img
                style={{ margin: '0 auto', maxWidth: 200 }}
                src="/assets/images/illu_group.svg"
                alt="illustration groupe d'étudiant"
              />
            </Grid>
            <form>
              <Grid
                gap={20}
                style={{
                  justifyContent: 'center',
                  gridTemplateColumns: '100%',
                }}
              >
                <Text
                  variant="default"
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    margin: 0,
                    textAlign: 'left',
                    color: '#4E4E56',
                  }}
                >
                  Je me connecte
                </Text>
                {fields.login.fields.map(
                  (field: SelectField, index: number) => {
                    return (
                      <InputSwitcher
                        field={field}
                        key={'inputSwitcher_' + field.key}
                        onChange={onChange}
                      />
                    );
                  },
                )}
                <Button variant="filled" type="submit">
                  Se connecter
                </Button>
                <Grid>
                  <Text variant="default">Pas encore inscrit ? </Text>
                  <Text variant="success" onClick={() => y.set(-800)}>
                    S’inscrire
                  </Text>
                </Grid>
              </Grid>
            </form>
          </StyledContent>
        </Grid>

        <Grid
          style={{ height: 'calc(100vh - 200px)', gridTemplateColumns: '100%' }}
        >
          <Grid
            gap={100}
            style={{ gridAutoRows: 'min-content', gridTemplateColumns: '100%' }}
          >
            <Title>Inscription</Title>
            <Grid
              flow="column"
              gap={26}
              style={{
                gridAutoRows: 'min-content',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: 'auto auto auto',
                maxWidth: 700,
                margin: '0 auto',
              }}
            >
              {fields.inscription.fields.map(
                (field: SelectField, index: number) => {
                  return (
                    <InputSwitcher
                      field={field}
                      key={'inputSwitcher_' + field.key}
                      onChange={onChange}
                    />
                  );
                },
              )}
            </Grid>
            <Grid
              gap={24}
              style={{
                margin: '0 auto',
                gridTemplateColumns: 330,
                justifyContent: 'center',
              }}
            >
              <Button variant="filled" type="submit">
                S'inscrire
              </Button>
              <Button variant="outlined" onClick={() => y.set(0)}>
                Annuler
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </StyledLoginViewContainer>
    </>
  );
};

export default withLoginContext(LoginView);
