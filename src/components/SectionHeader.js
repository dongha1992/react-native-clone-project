import React from 'react';
import {View, Text} from 'react-native';
import {SIZE, COLOR} from '../constants/Theme';
import Icon from 'react-native-vector-icons/Ionicons';

function SectionHeader({title, onPress}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginTop: 20,
      }}>
      <Text style={{fontSize: SIZE.h2, fontWeight: 'bold'}}>{title}</Text>
      <Icon name="arrow-forward" size={30} color="black" onPress={onPress} />
    </View>
  );
}

export default SectionHeader;
