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
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#FFFFFF"
      inactiveColor="#50C594">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#50C594',
          tabBarIcon: ({color}) => (
            <Icon name="home" size={24} color="#FFF" />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Test}
        options={{
          tabBarLabel: 'Map',
          tabBarColor: '#50C594',
          tabBarIcon: ({color}) => (
            <Icon name="map" size={24} color="#FFF" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const Stack = createStackNavigator();

const App: () => React$Node = (props) => {
  const initRoute = props.loginreducer.userid != 0 ? 'Login' : 'Tab';
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
