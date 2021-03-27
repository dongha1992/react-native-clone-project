import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
import {
  SearchHeader,
  NewChallenge,
  RecentSearchChallenge,
  PopularSearchWord,
  SearchLists,
  PopularChallengeListsAndSearchResult,
} from '../components';
import {useSelector, useDispatch} from 'react-redux';
import debounce from '../../utils/debounce';
import {_setFilteredChallenge} from '../../actions/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {WIDTH, HEIGHT} = Dimensions.get('window');

function SearchScreen({navigation}) {
  const [text, setText] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [challenge, setChallenge] = useState([]);
  const [filteredChallenge, setFilteredChallenge] = useState([]);

  const dispatch = useDispatch();
  const _challenge = useSelector(state => state.challengeReducer.challenge);

  useEffect(() => {
    setChallenge(_challenge);
    initData();
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  const onPressSearchLists = () => {
    setIsSearch(true);
  };

  const onChangeHandler = text => {
    setText(text);
    getFilteredChallenge(text);
  };

  const getFilteredChallenge = text => {
    const filtered = challenge.filter(c => {
      return c.title.replace(/ /g, '').indexOf(text) > -1;
    });
    setFilteredChallenge(filtered);
    dispatch(_setFilteredChallenge(filtered));
  };

  const goCancel = () => {
    if (text.length > 0) {
      setIsSearch(false);
      setText('');
    } else {
      navigation.goBack();
    }
  };

  const onKeyPressHandler = () => {
    navigation.navigate('filterScreen');
    const newWord = {
      id: new Date().getTime(),
      text: text,
    };
    const newList = [...searchList, newWord];
    setSearchList(newList);
    storeData(newList);
  };

  const goToChallenge = id => {
    navigation.navigate('challengeDetailScreen', {id});
  };

  const deleteOneWord = id => {
    const filtered = searchList.filter(word => word.id !== id);
    setSearchList(filtered);
    storeData(filtered);
  };

  const deleteAllWord = () => {
    setSearchList([]);
    storeData([]);
  };

  const storeData = async value => {
    try {
      const list = JSON.stringify(value);
      await AsyncStorage.setItem('recentKeyword', list);
    } catch (e) {
      console.log(e);
      // saving error
    }
  };

  const initData = async () => {
    try {
      const list = await AsyncStorage.getItem('recentKeyword');
      return list !== null ? setSearchList(JSON.parse(list)) : null;
    } catch (e) {
      console.log(e);
      // error reading value
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchHeader
        goBack={goBack}
        onPressSearchLists={onPressSearchLists}
        goCancel={goCancel}
        onChangeHandler={onChangeHandler}
        onKeyPressHandler={onKeyPressHandler}
        text={text}
      />
      {text && filteredChallenge.length > 0 ? (
        <PopularChallengeListsAndSearchResult
          filteredChallenge={filteredChallenge}
          onPress={goToChallenge}
        />
      ) : (
        <>
          {isSearch ? (
            <>
              <SearchLists
                searchList={searchList}
                deleteOneWord={deleteOneWord}
                deleteAllWord={deleteAllWord}
              />
            </>
          ) : (
            <View style={styles.wrap}>
              <PopularSearchWord />
              <NewChallenge />
              <RecentSearchChallenge />
            </View>
          )}
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {width: WIDTH},
  wrap: {padding: 20},
});

export default SearchScreen;
