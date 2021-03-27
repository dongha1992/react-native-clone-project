import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../constants/Theme';
const WIDTH = Dimensions.get('window').width;

function ChallengeDetailBottom() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="bookmark-outline" size={25} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="cart-outline" size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: COLOR.primary500,
          paddingHorizontal: 60,
          paddingVertical: 10,
          borderRadius: 5,
        }}>
        <Text style={{color: COLOR.white, fontWeight: 'bold'}}>
          참가하기(오늘 바로 시작)
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 5,
    borderStyle: 'solid',
    borderTopColor: COLOR.grey400,
    borderTopWidth: 1,
    backgroundColor: COLOR.white,
    zIndex: 1,
  },
});

export default ChallengeDetailBottom;
