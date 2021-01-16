import React, {useCallback} from 'react';

import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import {Input, Item} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

import {HeaderBar, ListItem} from '../../components/index';

const window = Dimensions.get('window');

const data = [
  {
    id: 1,
    name: 'Item 1',
  },
  {
    id: 2,
    name: 'Item 2',
  },
  {
    id: 3,
    name: 'Item 3',
  },
  {
    id: 4,
    name: 'Item 4',
  },
  {
    id: 5,
    name: 'Item 5',
  },
  {
    id: 6,
    name: 'Item 6',
  },
  {
    id: 7,
    name: 'Item 7',
  },
  {
    id: 8,
    name: 'Item 8',
  },
  {
    id: 9,
    name: 'Item 9',
  },
  {
    id: 10,
    name: 'Item 10',
  },
  {
    id: 11,
    name: 'Item 11',
  },
  {
    id: 12,
    name: 'Item 12',
  },
  {
    id: 13,
    name: 'Item 13',
  },
  {
    id: 14,
    name: 'Item 14',
  },
  {
    id: 15,
    name: 'Item 15',
  },
  {
    id: 16,
    name: 'Item 16',
  },
  {
    id: 17,
    name: 'Item 17',
  },
  {
    id: 18,
    name: 'Item 18',
  },
  {
    id: 19,
    name: 'Item 19',
  },
  {
    id: 20,
    name: 'Item 20',
  },
  {
    id: 21,
    name: 'Item 21',
  },
  {
    id: 22,
    name: 'Item 22',
  },
  {
    id: 23,
    name: 'Item 23',
  },
  {
    id: 24,
    name: 'Item 24',
  },
  {
    id: 25,
    name: 'Item 25',
  },
  {
    id: 26,
    name: 'Item 26',
  },
  {
    id: 27,
    name: 'Item 27',
  },
  {
    id: 28,
    name: 'Item 28',
  },
  {
    id: 29,
    name: 'Item 29',
  },
  {
    id: 30,
    name: 'Item 30',
  },
  {
    id: 31,
    name: 'Item 31',
  },
  {
    id: 32,
    name: 'Item 32',
  },
  {
    id: 33,
    name: 'Item 33',
  },
  {
    id: 34,
    name: 'Item 34',
  },
  {
    id: 35,
    name: 'Item 35',
  },
  {
    id: 36,
    name: 'Item 36',
  },
  {
    id: 37,
    name: 'Item 37',
  },
  {
    id: 38,
    name: 'Item 38',
  },
  {
    id: 39,
    name: 'Item 39',
  },
  {
    id: 40,
    name: 'Item 40',
  },
];

export const Home = ({navigation}) => {
  let renderItem = useCallback(({item}) => <ListItem item={item} />, []);

  let getItemLayout = (data, index) => ({
    length: window.width / 5,
    offset: (window.width / 5) * index,
    index,
  });

  let KeyExtractor = useCallback((item) => item.id.toString(), []);
  return (
    <View style={styles.home_view}>
      <HeaderBar Title="Home" />
      <Item rounded style={styles.home_item}>
        <Icon
          name="search"
          size={24}
          color="#50C594"
          style={{paddingLeft: 10}}
        />
        <Input placeholder="Tìm kiếm" />
      </Item>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        initialNumToRender={10}
        getItemLayout={getItemLayout}
        removeClippedSubviews
        maxToRenderPerBatch={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  home_view: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  home_item: {
    marginTop: 10,
    alignSelf: 'center',
    width: '90%',
  },
});

export default Home;
