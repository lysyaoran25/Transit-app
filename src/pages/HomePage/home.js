import React, {useCallback, useState} from 'react';

import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import {Input, Item} from 'native-base';
import {connect} from 'react-redux';

import FronAwesome from 'react-native-vector-icons/FontAwesome';
import {HeaderBar} from '../../components/index';
import ListItem from '../../components/ListItem';
import {ListAction} from '../../actions/list_action';

const window = Dimensions.get('window');
var temp = [
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
];
export const Home = (props, {navigation}) => {
  var [data, UpdateData] = useState(props.listreducer.data);
  let renderItem = useCallback(({item}) => <ListItem item={item} />, []);

  let getItemLayout = (data, index) => ({
    length: window.width / 3,
    offset: (window.width / 3) * index,
    index,
  });

  let loadmore = () => {
    var length = data.length;
    if (length < 50) {
      let add = {id: length + 1, name: 'item41'};
      UpdateData([...data, add]);
    }
  };
  let KeyExtractor = useCallback((item) => item.id.toString(), []);
  return (
    <View style={styles.home_view}>
      <HeaderBar Title="Home" />
      <Item rounded style={styles.home_item}>
        <FronAwesome
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
        keyExtractor={KeyExtractor}
        initialNumToRender={9}
        getItemLayout={getItemLayout}
        removeClippedSubviews
        maxToRenderPerBatch={9}
        windowSize={3}
        onEndReached={loadmore}
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

const mapStateToProps = (state) => {
  return {
    listreducer: state.listreducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    GetData: (data) => dispatch(ListAction.GetData(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
