import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {SIZE, COLOR} from '../constants/Theme';
const WIDTH = Dimensions.get('window').width;

function SearchLists({deleteOneWord, deleteAllWord, searchList}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>최근 검색어</Text>
        <TouchableOpacity onPress={deleteAllWord}>
          <Text style={styles.text}>전체삭제</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listWrap}>
        {searchList.map(el => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 15,
            }}
            key={el.text}>
            <Text style={{fontWeight: 'bold'}}>{el.text}</Text>
            <TouchableOpacity
              onPress={() => {
                deleteOneWord(el.id);
              }}>
              <Text style={{color: COLOR.grey500}}>X</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {width: WIDTH, padding: 20},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {fontWeight: 'bold'},
  text: {color: COLOR.grey500},
  body: {
    backgroundColor: COLOR.grey300,
    height: 100,
    width: WIDTH * 0.9,
    marginTop: 20,
  },
  bodyText: {
    top: '45%',
    alignSelf: 'center',
    color: COLOR.grey700,
  },
  listWrap: {paddingTop: 10},
});

export default SearchLists;
