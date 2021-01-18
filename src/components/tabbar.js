import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('screen');
const button = {
  justifyContent: 'center',
  alignItems: 'center',
  width,
  height: 50,
  flex: 1,
  flexDirection: 'column',
};
const MyTabBar = ({state, descriptors, navigation}) => {
  const Lenght = state.routes.length - 1;
  return (
    <View style={styles.tab_view}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              {backgroundColor: isFocused ? '#50C594' : '#ffffff'},
              index == 0
                ? styles.button_start
                : index == Lenght
                ? styles.button_end
                : styles.tab_button,
            ]}>
            <FontAwesome
              name={label.toLowerCase()}
              size={24}
              color={isFocused ? '#ffffff' : '#50C594'}
            />
            <Text style={{color: isFocused ? '#ffffff' : '#50C594'}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tab_view: {
    flexDirection: 'row',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  tab_button: {
    ...button,
  },
  button_end: {
    ...button,
    borderTopRightRadius: 15,
  },
  button_start: {
    ...button,
    borderTopLeftRadius: 15,
  },
});

export default MyTabBar;
