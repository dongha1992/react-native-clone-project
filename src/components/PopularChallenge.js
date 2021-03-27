import React from 'react';
import {View, Text, FlatList, Dimensions, StyleSheet} from 'react-native';
import ChallengeCard from './ChallengeCard';

const WIDTH = Dimensions.get('window').width;

function PopularChallenge({challenge, onPress, selectedType}) {
  const renderItem = ({item, index}) => {
    if (index > 3) return;
    return <ChallengeCard challenge={item} onPress={onPress} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={challenge}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
        numColumns={2}
      />
      <View style={styles.more}>
        <Text style={styles.text}>인기 {selectedType} 챌린지 전체보기</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  more: {
    width: WIDTH * 0.9,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 10,
  },
  text: {
    textAlign: 'center',
    fontWeight: '600',
    color: 'rgba(0, 0, 0, 0.7)',
  },
});

export default PopularChallenge;
