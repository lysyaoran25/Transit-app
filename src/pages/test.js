import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';

import {connect} from 'react-redux';
import {TestAction} from '../actions/test_action';
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.ADD = this.ADD.bind(this);
    this.SUBSTRACT = this.SUBSTRACT.bind(this);
  }
  ADD() {
    this.props.dispatch(TestAction.ADD());
  }
  SUBSTRACT() {
    this.props.dispatch(TestAction.SUBSTRACT());
  }
  render() {
    const value = this.props.testreducer.count;

    return (
      <SafeAreaView>
        <View>
          <Text>{value}</Text>
          <Button onPress={() => this.ADD()} title="INCREASE"></Button>
          <Button onPress={() => this.SUBSTRACT()} title="DESCREASE"></Button>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    testreducer: state.testreducer,
  };
};

export default connect(mapStateToProps)(Test);
