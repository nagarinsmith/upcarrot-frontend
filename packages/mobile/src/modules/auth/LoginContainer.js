import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {observer, inject} from 'mobx-react';
import {Login} from '../../components';

const LoginContainer = ({
  store: {
    auth, //: {login, isLoggedIn},
  },
  redirect,
}) => {
  useEffect(() => {
    console.log(auth);
    if (auth.isLoggedIn) {
      redirect();
    }
  }, [auth, auth.isLoggedIn, redirect]);
  return <Login login={auth.login} />;
};
export default inject('store')(observer(LoginContainer));
