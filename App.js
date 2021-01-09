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

import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const App: () => React$Node = (props) => {
  const Stack = createStackNavigator();
  const initRoute = props.loginreducer.userid != 0 ? 'Home' : 'Login';
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName={initRoute}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Test" component={Test} />
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
