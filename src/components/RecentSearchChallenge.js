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

function RecentSearchChallenge() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>최근 조회한 챌린지</Text>
        <TouchableOpacity>
          <Text style={styles.text}>전체삭제</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>최근 조회한 챌린지가 없어요.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {width: WIDTH, paddingTop: 20},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 40,
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
});

export default RecentSearchChallenge;
