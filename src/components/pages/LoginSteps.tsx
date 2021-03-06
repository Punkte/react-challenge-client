import React, { useState } from 'react';
import styled from 'styled-components';

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
import LoginView from './LoginView';

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
  align-items: start;
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
//   grid-auto-rows: 250px 1fr;
  height: 100vh;
  padding: 70px 100px;
`;

interface Props {}

const LoginSteps: React.FC<Props> = props => {
  const [step, setStep] = useState('login');

  const onChange = (value: SelectItemField) => {
    console.log(value);
  };

  let renderFields = (() => {
    if (window.location.pathname === '/inscription') {
      return fields.inscription.fields.map(
        (field: SelectField, index: number) => {
          return (
            <InputSwitcher
              field={field}
              key={'inputSwitcher_' + field.key}
              onChange={onChange}
            />
          );
        },
      );
    } else {
      return fields.login.fields.map((field: SelectField, index: number) => {
        return (
          <InputSwitcher
            field={field}
            key={'inputSwitcher_' + field.key}
            onChange={onChange}
          />
        );
      });
    }
  })();

  const renderStep = (() => {
    switch (step) {
      case 'inscription':
        return <p>mdr inscriptuon</p>;
      default:
        return <LoginView />;
    }
  })();

  return (
    <StyledLoginViewContainer>
      {renderStep}
    </StyledLoginViewContainer>
  );
};

export default withLoginContext(LoginSteps);
