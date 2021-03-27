import React from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {COLOR} from '../constants/Theme';
function SwitchingTab({onPress}) {
  return (
    <View style={{top: '45%'}}>
      <TouchableOpacity
        style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View onPress={onPress}>
          <Text>챌린지</Text>
        </View>
        <View onPress={onPress}>
          <Text>사람</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default SwitchingTab;
