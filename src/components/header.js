import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export const Header = (props) => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>{props.Title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    height: 60,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0,
    position: 'relative',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 24,
  },
});
