import React, { createContext, useState } from 'react';

export const LoginContext: any = createContext(null);

export const withLoginContext = (Component: any) => {
  function WrapperComponent(props: any) {
    const { forwardedRef, ...rest } = props;
    return (
      <LoginContext.Consumer>
        {(contextProps: any) => (
          <Component ref={forwardedRef} {...contextProps} {...rest} />
        )}
      </LoginContext.Consumer>
    );
  }

  return React.forwardRef((props, ref): any => {
    return <WrapperComponent {...props} forwardedRef={ref} />;
  });
};
