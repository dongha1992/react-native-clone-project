import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {
  ChallengeDetailHeader,
  ChallengeDetailBottom,
  ChallengeDetail,
} from '../components';

function ChallengeDetailScreen({navigation, route}) {
  const [challenge, setChallenge] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {id} = route.params;

  useEffect(() => {
    getChallengeDetail();
  }, []);

  const getChallengeDetail = async () => {
    await fetch(
      'https://gist.githubusercontent.com/dongha1992/77fa71590c3d3ad4423498a67ffa76c6/raw/55cb76c5e1c405752ea4cc7ba4b293a154f5e375/challengeCards.json',
    )
      .then(res => res.json())
      .then(res => {
        const selectedChallenge = res.find(c => c.id === id);
        setChallenge(selectedChallenge);
        setIsLoading(true);
      });
  };

  const goBack = () => {
    navigation.goBack();
  };
  const goToJoinChallenge = () => {};
  if (isLoading) {
    return (
      <View>
        <ChallengeDetailHeader goBack={goBack} />
        <ChallengeDetail challenge={challenge} />
        <ChallengeDetailBottom goToJoinChallenge={goToJoinChallenge} />
      </View>
    );
  } else {
    return <ActivityIndicator />;
  }
}

export default ChallengeDetailScreen;
