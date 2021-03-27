import React from 'react';

import {
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
const {WIDTH, HEIGHT} = Dimensions.get('window');

const POPULAR_WORD_LIST = [
  '일찍 일어나기',
  '좋은 습관',
  '외국어',
  '아침루틴',
  '전강/운동',
  '미용',
  '자기관리',
  '취미',
  '독서',
  '시험공부',
];

function PopularChallengeListsAndSearchResult({filteredChallenge, onPress}) {
  const isFilteredChallenge = filteredChallenge.length;
  return (
    <ScrollView style={{height: '100%', padding: 10}}>
      {isFilteredChallenge ? (
        filteredChallenge.map(c => (
          <TouchableOpacity
            style={{paddingVertical: 10}}
            onPress={() => {
              onPress(c.id);
            }}
            key={c.id}>
            <Text style={{fontWeight: 'bold'}}>{c.title}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <>
          {POPULAR_WORD_LIST.map((word, index) => (
            <TouchableOpacity
              style={{paddingVertical: POPULAR_WORD_LIST.length}}
              onPress={onPress}
              key={word}>
              <Text>{word}</Text>
            </TouchableOpacity>
          ))}
        </>
      )}
    </ScrollView>
  );
}

export default PopularChallengeListsAndSearchResult;
