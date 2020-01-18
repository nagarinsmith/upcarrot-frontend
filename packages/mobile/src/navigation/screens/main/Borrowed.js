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
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgb(13,13,23)',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: 'white'}}>{example}</Text>
      <TouchableOpacity onPress={logout}>
        <Text style={{color: 'white'}}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};

export default inject('store')(observer(DashboardScreen));
