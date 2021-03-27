import React from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  SearchHeader,
  ChallengeCard,
  SwitchingTab,
  FilterButton,
} from '../components';
import {useSelector} from 'react-redux';

function FilterScreen({navigation}) {
  const filteredChallenge = useSelector(
    state => state.challengeReducer.filteredChallenge,
  );

  const goToChallenge = id => {
    navigation.navigate('challengeDetailScreen', {id});
  };

  const goBack = () => {
    navigation.goBack();
  };

  const renderItem = ({item, index}) => {
    return <ChallengeCard challenge={item} onPress={goToChallenge} />;
  };
  const onSwitchingHandler = () => {};

  const onFilterHandler = () => {};

  return (
    <ScrollView>
      <SearchHeader goBack={goBack} />
      <SwitchingTab onPress={onSwitchingHandler} />
      <FilterButton onPress={onFilterHandler} />
      {filteredChallenge.length < 0 ? (
        <Text style={{top: '30%'}}>검색 결과가 없습니다.</Text>
      ) : (
        <View style={{top: '20%'}}>
          <FlatList
            data={filteredChallenge}
            renderItem={renderItem}
            keyExtractor={item => String(item.id)}
            numColumns={2}
          />
        </View>
      )}
    </ScrollView>
  );
}

export default FilterScreen;
