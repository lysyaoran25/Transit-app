import React, {useCallback} from 'react';

import {View, Text, StyleSheet, FlatList, ListItem} from 'react-native';
import {
  Item,
  Input,
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Left,
  Body,
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

import {HeaderBar} from '../../components/index';

const renderItem = ({item}) => (
  <Card>
    <CardItem>
      <Left>
        <Thumbnail source={{uri: 'Image URL'}} />
        <Body>
          <Text>NativeBase</Text>
          <Text note>April 15, 2016</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem>
      <Body>
        <Text>//Your text here</Text>
      </Body>
    </CardItem>
    <CardItem>
      <Left>
        <Button transparent textStyle={{color: '#87838B'}}>
          <Icon name="logo-github" />
          <Text>1,926 stars</Text>
        </Button>
      </Left>
    </CardItem>
  </Card>
);

export const Home = ({navigation}) => {
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
      name: 'Item 1',
    },
    {
      id: 6,
      name: 'Item 1',
    },
    {
      id: 7,
      name: 'Item 1',
    },
    {
      id: 8,
      name: 'Item 1',
    },
    {
      id: 9,
      name: 'Item 1',
    },
    {
      id: 10,
      name: 'Item 1',
    },
    {
      id: 11,
      name: 'Item 1',
    },
    {
      id: 12,
      name: 'Item 1',
    },
    {
      id: 13,
      name: 'Item 1',
    },
    {
      id: 14,
      name: 'Item 1',
    },
    {
      id: 15,
      name: 'Item 1',
    },
    {
      id: 16,
      name: 'Item 1',
    },
    {
      id: 17,
      name: 'Item 1',
    },
    {
      id: 18,
      name: 'Item 1',
    },
    {
      id: 19,
      name: 'Item 1',
    },
    {
      id: 20,
      name: 'Item 1',
    },
    {
      id: 21,
      name: 'Item 1',
    },
    {
      id: 22,
      name: 'Item 1',
    },
    {
      id: 23,
      name: 'Item 1',
    },
    {
      id: 24,
      name: 'Item 1',
    },
    {
      id: 25,
      name: 'Item 1',
    },
    {
      id: 26,
      name: 'Item 1',
    },
    {
      id: 27,
      name: 'Item 1',
    },
    {
      id: 28,
      name: 'Item 1',
    },
    {
      id: 29,
      name: 'Item 1',
    },
    {
      id: 30,
      name: 'Item 1',
    },
    {
      id: 31,
      name: 'Item 1',
    },
    {
      id: 32,
      name: 'Item 1',
    },
    {
      id: 33,
      name: 'Item 1',
    },
    {
      id: 34,
      name: 'Item 1',
    },
    {
      id: 35,
      name: 'Item 1',
    },
    {
      id: 36,
      name: 'Item 1',
    },
    {
      id: 37,
      name: 'Item 1',
    },
    {
      id: 38,
      name: 'Item 1',
    },
    {
      id: 39,
      name: 'Item 1',
    },
    {
      id: 40,
      name: 'Item 1',
    },
  ];
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
      <FlatList data={data} renderItem={renderItem} />
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
