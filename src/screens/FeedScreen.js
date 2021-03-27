import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

function FeedScreen() {
  const selectedChallenge = useSelector(
    state => state.challengeReducer.selectedChallenge,
  );

  return (
    <View>
      <Text>feed</Text>
    </View>
  );
}
export default FeedScreen;
