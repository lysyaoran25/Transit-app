import React, {useCallback, useState,useEffect} from 'react';

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
      "id": 1,
      "diachi": "yên thế Đường 1 Phường 3 Phường 3  Khu vực 2 ",
      "sdt": null,
      "soghe": 3
  },
  {
      "id": 2,
      "diachi": "yên thế, tân bình  Phường 5  Khu vực 3 ",
      "sdt": "0568370350",
      "soghe": 1
  },
  {
      "id": 16,
      "diachi": "yên th? Đường 1 Phường 3 Phường 5  Khu vực 3 ",
      "sdt": "966662918",
      "soghe": 3
  },
  {
      "id": 17,
      "diachi": "yên th? Đường 1 Phường 3 Phường 5  Khu vực 3 ",
      "sdt": "966662918",
      "soghe": 3
  },
  {
      "id": 18,
      "diachi": "tan binh Đường 1 Phường 3 Phường 5  Khu vực 3 ",
      "sdt": "966662918",
      "soghe": 4
  },
  {
      "id": 19,
      "diachi": "bach dang Đường 1 Phường 3 Phường 5  Khu vực 3 ",
      "sdt": "966662918",
      "soghe": 5
  }
];
export const Home = (props, {navigation}) => {
  var [data, UpdateData] = useState([]);

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
      //UpdateData([...data, add]);
    }
  };

  let KeyExtractor = useCallback((item) => item.id.toString(), []);

  useEffect(()=>{
    console.log(1);
    props.GetData()
    UpdateData(props.listreducer.data);
  },[])

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
