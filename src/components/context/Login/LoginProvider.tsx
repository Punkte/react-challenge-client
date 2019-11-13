import React, { useState, useEffect } from 'react';
import { LoginContext } from './LoginContext';

const LoginProvider = ({ children }: any) => {
  const [isLogged, setLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ isLogged, setLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
