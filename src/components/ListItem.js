import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, CardItem, Body, Left, Right, Content} from 'native-base';
import FastImage from 'react-native-fast-image';
import {imagecircle} from '../assets/style/style.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default class ListItem extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Content key={this.props.item.id} style={styles.listitem_card}>
        <Card style={styles.listitem_carditem}>
          <CardItem style={styles.listitem_carditem}>
            <Left>
              <FastImage
                style={{...imagecircle}}
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-LFXPLKcW-g-btc4xfVYZxSIQEYAiOh3MOQ&usqp=CAU',
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.stretch}
              />
              <Body>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{width: '80%'}}>
                    <Text style={{color: '#78B4B4'}}>
                      {this.props.item.name}
                    </Text>
                    <Text style={styles.listitem_phone}>966662918</Text>
                  </View>
                  <View
                    style={{
                      width: '20%',
                      justifyContent: 'space-between',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                    }}>
                    <FontAwesome name="map" size={24} color="#50C594" />
                    <MaterialIcons name="gps-fixed" size={24} color="#50C594" />
                  </View>
                </View>
              </Body>
            </Left>
          </CardItem>
          <CardItem footer style={styles.listitem_carditem}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#E0F4F4',
              }}>
              <TouchableOpacity style={styles.listitem_btnleft}>
                <Text style={{color: '#50C594'}}>Chap nhan</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listitem_btnright}>
                <Text style={{color: '#FF4839'}}>Tu choi</Text>
              </TouchableOpacity>
            </View>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

const touch = {
  backgroundColor: '#FFFFFF',
  padding: 10,
  width: 100,
  alignItems: 'center',
};

const styles = StyleSheet.create({
  listitem_card: {
    margin: 15,
  },
  listitem_btnleft: {
    ...touch,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    left: 30,
  },
  listitem_btnright: {
    ...touch,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    right: 30,
  },
  listitem_carditem: {
    backgroundColor: '#E0F4F4',
    borderRadius: 15,
  },
  listitem_phone: {
    color: '#362ade',
    textDecorationLine: 'underline',
    alignItems: 'flex-end',
  },
});
