import React from 'react';
import {View, Image, TouchableOpacity, Text, SafeAreaView} from 'react-native';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {FONT, COLOR} from '../constants/Theme';
const {width, height} = Dimensions.get('window');

function Header({onPress}) {
  return (
    <SafeAreaView style={{height: 80, width}}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
        onPress={onPress}>
        <View
          style={{
            position: 'absolute',
            left: '0',
            top: '0',
            zIndex: 1,
            paddingLeft: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Icon name="search" size={25} color={COLOR.grey700} />
          <Text style={{color: COLOR.grey600, paddingLeft: 10}}>
            어떤 습관을 가지고 싶은신가요?
          </Text>
        </View>
        <View
          style={{
            width: width * 0.73,
            height: 40,
            backgroundColor: COLOR.grey200,
          }}
        />
        <Icon name="bookmark-outline" size={25} color={COLOR.grey600} />
        <Icon name="cart-outline" size={25} color={COLOR.grey600} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Header;
