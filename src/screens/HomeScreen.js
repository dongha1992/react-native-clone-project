import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import {
  Header,
  Banner,
  PopularChallenge,
  SectionHeader,
  CategoryType,
} from '../components';
import {useSelector, useDispatch} from 'react-redux';
import {_setChallenge, _setSelectedChallenge} from '../../actions/action';
import {COLOR} from '../constants/Theme';
import styled from 'styled-components/native';
import {Mixin} from '../../styles/Mixin';

const {WIDTH, HEIGHT} = Dimensions.get('window');

// slide 직접 구현 flatlist
// 스크롤 이동 flat list
// ---
// 챌린지 디테일 sticky (View onlayout x, y좌표 -> )

// 검색, 조회 -> 최근 남게 2 -> 스크린 안 보내고 컴포넌트
// 탭별로 리덕스 디테일 갔다가 다른 탭에서 불러오기, 삭제도
// 인증하기? + 개수
// 장바구니 카운트

const CATEGORY_TYPE = [
  {id: 1, text: '건강'},
  {id: 2, text: '역량'},
  {id: 3, text: '관계'},
  {id: 4, text: '자산'},
  {id: 5, text: '생활'},
  {id: 6, text: '취미'},
];

function HomeScreen({navigation}) {
  const [slideImage, setSliderImage] = useState([]);
  const [challenge, setChallenge] = useState([]);
  const [selectedType, setSelectedType] = useState('건강');
  const dispatch = useDispatch();

  useEffect(() => {
    getSlideImage();
    getChallenges();
  }, []);

  const getSlideImage = async () => {
    await fetch(
      'https://gist.githubusercontent.com/dongha1992/27f050e19855da7a14c725eb39cb1c72/raw/1b950f1c947beca190729badbfa36b4b932c8307/slideImage.json',
    )
      .then(res => res.json())
      .then(res => setSliderImage(res));
  };

  const getChallenges = async () => {
    await fetch(
      'https://gist.githubusercontent.com/dongha1992/77fa71590c3d3ad4423498a67ffa76c6/raw/55cb76c5e1c405752ea4cc7ba4b293a154f5e375/challengeCards.json',
    )
      .then(res => res.json())
      .then(res => {
        setChallenge(res);
        dispatch(_setChallenge(res));
      });
  };
  const onPressNavigationHandler = () => {};

  const onPressChallengeHandler = challenge => {
    const {id} = challenge;
    navigation.navigate('challengeDetailScreen', {id});
    dispatch(_setSelectedChallenge(challenge));
  };
  const onPressCategoryType = type => {
    setSelectedType(type);
  };

  const goToSerach = () => {
    navigation.navigate('searchScreen');
  };

  return (
    <Container>
      <Header onPress={goToSerach} />
      <ScrollViewContainer>
        <Banner data={slideImage} />
        <SectionContainer>
          <SectionHeader
            title={'인기 챌린지'}
            onPress={onPressNavigationHandler}
          />
          <CategoryType
            onPress={onPressCategoryType}
            data={CATEGORY_TYPE}
            selectedType={selectedType}
          />
          <PopularChallenge
            onPress={onPressChallengeHandler}
            challenge={challenge}
            selectedType={selectedType}
          />
        </SectionContainer>
      </ScrollViewContainer>
    </Container>
  );
}
const Container = styled(SafeAreaView)`
  background-color: ${COLOR.white};
  width: ${WIDTH};
  height: 100%;
  ${Mixin.flexSet('center', 'center', 'column')};
`;

const ScrollViewContainer = styled(ScrollView)`
  height: 100%;
  width: ${WIDTH};
`;

const SectionContainer = styled(View)`
  width: ${WIDTH};
  height: 100%;
`;
export default HomeScreen;
