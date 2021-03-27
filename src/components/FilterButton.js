import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {COLOR} from '../constants/Theme';
function FilterButton({onPress}) {
  return (
    <TouchableOpacity
      style={{
        top: '55%',
        marginRight: 15,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignSelf: 'flex-end',
      }}
      onPress={onPress}>
      <View>
        <Text style={{padding: 10, color: COLOR.grey900}}>필터</Text>
      </View>
    </TouchableOpacity>
  );
}

export default FilterButton;
