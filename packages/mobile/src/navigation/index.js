import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {LoginScreen, DashboardScreen} from './screens';
import AnalyticsScreen from './screens/main/Analytics';
import EventsScreen from './screens/main/Events';
import BorrowedScreen from './screens/main/Borrowed';
import ExpensesScreen from './screens/main/Expenses';
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const TabBarComponent = props => <BottomTabBar {...props} />;

const AppStack = createBottomTabNavigator(
  {
    Expenses: ExpensesScreen,
    Analytics: AnalyticsScreen,
    Events: EventsScreen,
    Borrowed: BorrowedScreen,
  },
  {
    tabBarIcon: props => (
      <View>
        <Text>salut</Text>
      </View>
    ),
    tabBarOptions: {
      labelStyle: {
        fontSize: 12,
      },
      activeTintColor: '#44f804',
      inactiveTintColor: '#f8a814',
      style: {
        backgroundColor: 'blue',
      },
    },
    tabBarComponent: props => (
      <TabBarComponent
        {...props}
        style={{
          color: '#f8a814',
          backgroundColor: '#151523',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,

          elevation: 7,
          borderTopColor: 'transparent',
        }}
      />
    ),
  },
);
const AuthStack = createStackNavigator(
  {Login: LoginScreen},
  {defaultNavigationOptions: {header: null}},
);

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);
