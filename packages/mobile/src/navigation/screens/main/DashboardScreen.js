import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {observer, inject} from 'mobx-react';

const DashboardScreen = ({
  store: {
    example,
    auth: {logout, isLoggedIn},
  },
  navigation: {navigate},
}) => {
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('Auth');
    }
  }, [isLoggedIn, navigate]);
  return (
    <View>
      <Text>{example}</Text>
      <TouchableOpacity onPress={logout}>
        <Text>login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default inject('store')(observer(DashboardScreen));
