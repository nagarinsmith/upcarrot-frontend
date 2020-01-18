import React, {useCallback} from 'react';
import {LoginContainer} from '../../../modules';

const LoginScreen = ({navigation: {navigate}}) => {
  const redirect = useCallback(() => navigate('App'), [navigate]);

  return <LoginContainer redirect={redirect} />;
};
export default LoginScreen;
