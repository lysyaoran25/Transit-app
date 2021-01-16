/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Home from './src/pages/HomePage/home';
import Test from './src/pages/test';
import Login from './src/pages/LoginPage/login';

import MyTabBar from './src/components/tabbar';
import {connect} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Map" component={Test} />
    </Tab.Navigator>
  );
}
const Stack = createStackNavigator();

const App: () => React$Node = (props) => {
  const initRoute = props.loginreducer.userid == 0  ? 'Login' : 'Tab';
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName={initRoute}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    loginreducer: state.loginreducer,
  };
};
export default connect(mapStateToProps)(App);
