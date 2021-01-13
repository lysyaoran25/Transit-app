import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
export const HeaderBar = (props) => {
  return (
    <View style={styles.header_view}>
      <Image
        source={require('../assets/Image/no-avatar.png')}
        style={styles.header_image}
      />
      <Text style={styles.header_text}>{props.Title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header_view: {
    backgroundColor: '#50C594',
    height: 90,
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
  },
  header_text: {
    textAlign: 'center',
    fontSize: 24,
    color: '#ffffff',
    alignSelf: 'center',
  },
  header_image: {
    alignSelf: 'center',
    position: 'absolute',
    width: 60,
    height: 60,
    left: 20,
  },
});
