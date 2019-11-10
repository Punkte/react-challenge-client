import React from 'react';
import styled from 'styled-components';

import { Grid } from 'components/atoms/Grid/Grid';
import { HeaderSvg } from 'components/assets/HeaderSvg';
import { LogoHeticSvg } from 'components/assets/LogoHeticSvg';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { Text } from 'components/atoms/Text/Text';
import { Input } from 'components/atoms/Input/Input';

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
  max-wdith: 600px;
  width: 100%;
`;

const StyledHomeContainer = styled(Grid)`
  align-items: center;
  justify-content: center;
`;

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <StyledHomeContainer>
      <StyledHeaderSvg />
      <StyledContent>
        <Title>Title</Title>
        <Text variant="default">Default text</Text>
        <Text variant="error">Error type text</Text>
        <Button>Se connecter</Button>
        <Button type="outlined">Se connecter</Button>
        <Input type={'text'} placeholder={'Placeholder text'} />
        <Input type={'password'} placeholder={'Placeholder password'} />
        <LogoHeticSvg />
      </StyledContent>
    </StyledHomeContainer>
  );
};

export default Home;
