import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {StickyHeader} from '../components';
import SVGIcon from '../libs/SVGicon';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SIZE, COLOR} from '../constants/Theme';
import {resizeImgUri500} from '../../utils/resizeImg';
import getChallengeMetaInformation from '../../utils/getChallengeMetaInformation';

const WIDTH = Dimensions.get('window').width;

const TAB_TITLE = [
  {id: 1, text: '후기'},
  {id: 2, text: '역대결과'},
  {id: 3, text: '인증방법'},
  {id: 4, text: '설명'},
];
const DEFAULT_SCROLLTOP = 500;
const SECTION_HEIGHT = 400;
const HEADER_HEIGHT = 30;

function ChallengeDetail({challenge}) {
  const scrollRef = useRef();
  const [scrollOffset, setScrollOffset] = useState(0);
  const {whenToStart, period, frequency} = getChallengeMetaInformation(
    challenge,
  );

  useEffect(() => {}, []);

  // 위치값 가져와서 보내기
  const onMoveSection = id => {
    if (id === 1) {
      scrollRef.current.scrollTo({
        y: DEFAULT_SCROLLTOP * id,
        animated: true,
      });
    } else if (id === 2) {
      scrollRef.current.scrollTo({
        y: DEFAULT_SCROLLTOP * id,
        animated: true,
      });
    } else if (id === 3) {
      scrollRef.current.scrollTo({
        y: DEFAULT_SCROLLTOP * id,
        animated: true,
      });
    } else if (id === 4) {
      scrollRef.current.scrollTo({
        y: DEFAULT_SCROLLTOP * id,
        animated: true,
      });
    }
  };

  // const onLayout = useCallback(event => {
  //   console.log(
  //     event.nativeEvent.layout.width,
  //     event.nativeEvent.layout.height,
  //     event.nativeEvent.layout.x,
  //     event.nativeEvent.layout.y,
  //   );
  // }, []);

  const onScroll = event => {
    const scrollOffset = event.nativeEvent.contentOffset.y;
    setScrollOffset(scrollOffset);
  };

  return (
    <ScrollView
      styles={styles.container}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      onScroll={onScroll}
      ref={scrollRef}>
      <Image
        source={{uri: resizeImgUri500(challenge?.thumbnailImageUrls?.f)}}
        style={styles.mainImage}
      />
      <View style={styles.mainInformation}>
        <View style={styles.official}>
          <SVGIcon icon="official_challenge_mark" size="15" />
          <Text style={styles.officialText}>공식 챌린지</Text>
        </View>
        <Text style={styles.title}>{challenge.title}</Text>
        <Text style={styles.start}>{whenToStart}</Text>
        <View style={styles.badgeContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{period}</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{frequency}</Text>
          </View>
          <Text>
            {challenge.startDate.split(' ')[0]}
            {challenge.endDate.split(' ')[0]}
          </Text>
        </View>
        <View style={styles.alert}>
          <Text style={styles.alertText}>
            {frequency} {period}동안, 하루에 인증샷을 {'2'}번 찍어야해요!
          </Text>
        </View>
      </View>
      <View style={styles.paybackInfomation}>
        <View style={styles.participant}>
          <Ionicons name="person" size={10} color={COLOR.grey600} />
          <Text style={styles.paybackText}>참가인원</Text>
          <TouchableOpacity style={styles.count}>
            <Text style={styles.resultText}>
              {challenge.registerInfo?.registerCount}명
            </Text>
            <Ionicons
              name="arrow-forward"
              size={10}
              color={COLOR.grey600}
              style={{paddingLeft: 6}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.total}>
          <Icon name="won" size={10} color={COLOR.grey600} />
          <Text style={styles.paybackText}>참가금액</Text>
          <View style={styles.average}>
            <Text style={styles.resultText}>
              총 {challenge.id.toLocaleString()} 원
            </Text>
            <Text style={styles.averageText}>
              {`평균적으로 ${Math.floor(
                challenge.id / challenge.registerInfo?.registerCount,
              )}원을 걸었어요.`}
            </Text>
          </View>
        </View>
      </View>
      <StickyHeader
        TAB_TITLE={TAB_TITLE}
        onMoveSection={onMoveSection}
        scrollOffset={scrollOffset}
      />
      <ScrollView style={styles.sectionContainer}>
        <View style={styles.section1}>
          <TouchableOpacity>
            <Text>section1</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section2}>
          <Text>section2</Text>
        </View>
        <View style={styles.section3}>
          <Text>section3</Text>
        </View>
        <View style={styles.section4}>
          <Text>section4</Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    width: WIDTH,
    height: '100%',
    flexDirection: 'column',
  },
  mainImage: {
    width: WIDTH,
    height: 300,
  },
  mainInformation: {
    margin: 20,
    paddingBottom: 20,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
  },
  official: {
    flexDirection: 'row',
    paddingVertical: 7,
  },
  officialText: {
    paddingLeft: 5,
    color: COLOR.grey600,
    fontWeight: 'bold',
    fontSize: 11,
  },
  title: {fontSize: SIZE.h3, fontWeight: 'bold', paddingVertical: 2},
  start: {
    fontSize: 10,
    color: COLOR.primary500,
    fontWeight: 'bold',
    paddingVertical: 2,
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  badge: {backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: 5, marginRight: 2},
  badgeText: {
    color: COLOR.black,
    fontSize: SIZE.radius,
    borderRadius: 2,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 7,
    paddingRight: 7,
  },
  alert: {
    width: WIDTH * 0.8,
    backgroundColor: COLOR.grey700,
    borderRadius: 4,
  },
  alertText: {
    color: COLOR.white,
    padding: 5,
    fontWeight: 'bold',
  },
  paybackText: {
    fontSize: 15,
    paddingLeft: 6,
    color: COLOR.grey700,
  },
  participant: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  total: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {paddingLeft: 20, flexDirection: 'row'},
  average: {paddingLeft: 20},
  paybackInfomation: {
    paddingLeft: 15,
  },
  resultText: {fontWeight: 'bold'},
  averageText: {color: COLOR.grey600, fontSize: 12, fontWeight: 'bold'},
  paybackDetail: {
    backgroundColor: COLOR.grey600,
    height: 200,
  },
  sectionContainer: {width: WIDTH, paddingVertical: 10},
  section1: {
    paddingVertical: 20,
    height: SECTION_HEIGHT,
  },
  section2: {height: SECTION_HEIGHT},
  section3: {height: SECTION_HEIGHT},
  section4: {height: SECTION_HEIGHT},
});

export default ChallengeDetail;
