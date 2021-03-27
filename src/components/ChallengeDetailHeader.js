import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLOR} from '../constants/Theme';
const WIDTH = Dimensions.get('window').width;

function ChallengeDetailHeader({goBack}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{paddingLeft: 15}}>
        <Icon name="left" size={20} onPress={goBack} />
      </TouchableOpacity>
      <TouchableOpacity style={{paddingRight: 15}}>
        <Icon name="sharealt" size={20} onPress={goBack} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderBottomColor: COLOR.grey400,
    borderBottomWidth: 1,
  },
});

export default ChallengeDetailHeader;
