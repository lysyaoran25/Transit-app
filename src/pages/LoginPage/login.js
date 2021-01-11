import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Button, Item, Input} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {LoginAction} from '../../actions/login_action';
import {color} from 'react-native-reanimated';
import {center, px20} from '../../assets/style/style';
import {State} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Login = (props) => {
  const navigation = useNavigation();
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const LOGIN = () => {
    const data = {
      username: Username,
      password: Password,
    };
    props.Login(data).then((res) => navigation.navigate('Tab'));
  };
  return (
    <View style={styles.LoginView}>
      <Text style={styles.LoginText}>WELCOME TO APP</Text>
      <Item style={styles.LoginField}>
        <Input
          placeholder="Username"
          onChangeText={(val) => setUsername(val)}
        />
      </Item>
      <Item style={styles.LoginField}>
        <Input
          placeholder="Password"
          onChangeText={(val) => setPassword(val)}
        />
      </Item>
      <Button block success style={styles.LoginButton} onPress={() => LOGIN()}>
        <Text style={{color: '#FFF'}}>Warning</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  LoginView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  LoginText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  LoginButton: {
    marginLeft: px20,
    marginRight: px20,
    marginTop: 30,
  },
  LoginField: {
    marginLeft: px20,
    marginRight: px20,
  },
});

const mapStateToProps = (state) => {
  return {
    loginreducer: state.loginreducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    Login: (data) => dispatch(LoginAction.LOGIN(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
