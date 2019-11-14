import React, { useState, useEffect } from 'react';
import { LoginContext } from './LoginContext';
import { IStudent } from 'models/Student';

const LoginProvider = ({ children }: any) => {
  const [isLogged, setLogin] = useState(false);
  const [userPayload, setUserPayload] = useState<IStudent | undefined>({
    first_name: '',
    last_name: '',
    gender: '',
    desc: '',
    email: '',
    skills: [],
    experience: [],
    pic: '',
    status: '',
    group_id: '',
  });

  return (
    <LoginContext.Provider
      value={{ isLogged, setLogin, userPayload, setUserPayload }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
