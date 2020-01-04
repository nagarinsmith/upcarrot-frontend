import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {observer, inject} from 'mobx-react';

const Test = ({
  store: {
    auth: {login, isLoggedIn},
  },
  navigation: {navigate},
}) => {
  useEffect(() => {
    if (isLoggedIn) {
      navigate('App');
    }
  }, [isLoggedIn]);
  return (
    <TouchableOpacity onPress={() => login('oare', 'merge')}>
      <Text>login</Text>
    </TouchableOpacity>
  );
};
export default inject('store')(observer(Test));
