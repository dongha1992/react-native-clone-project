import React from 'react';
import {View, Image, TouchableOpacity, Text, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {resizeImgUri500} from '../../utils/resizeImg';
import getChallengeMetaInformation from '../../utils/getChallengeMetaInformation';
import SVGIcon from '../libs/SVGicon';
import {SIZE, COLOR} from '../constants/Theme';

const WIDTH = Dimensions.get('window').width;

function ChallengeCard({challenge, onPress}) {
  const {whenToStart, period, frequency} = getChallengeMetaInformation(
    challenge,
  );

  return (
    <Container
      onPress={() => {
        onPress(challenge);
      }}>
      <Thumbnail>
        <Image
          source={{uri: resizeImgUri500(challenge?.thumbnailImageUrls?.f)}}
          style={{width: '100%', height: 150}}
        />
        <ChallengeBadge>
          <SVGIcon icon="icon_person_white" size="10" />
          <View style={{paddingLeft: 10}}>
            <Text style={{fontSize: 10, color: 'white'}}>
              {challenge?.registerInfo?.registerCount} 명
            </Text>
          </View>
        </ChallengeBadge>
        <Type>
          <SVGIcon icon="official_challenge_mark" size="15" />
          <Text
            style={{
              paddingLeft: 5,
              color: COLOR.grey500,
              fontWeight: 'bold',
              fontSize: 11,
            }}>
            공식 챌린지
          </Text>
        </Type>
        <Title>{challenge.title}</Title>
        <WhenToStart>{whenToStart}</WhenToStart>
        <BadgeContainer>
          <Wrap>
            <BadgeText>{period}</BadgeText>
          </Wrap>
          <Wrap>
            <BadgeText>{frequency}</BadgeText>
          </Wrap>
        </BadgeContainer>
      </Thumbnail>
    </Container>
  );
}

const Container = styled(TouchableOpacity)`
  width: ${WIDTH / 2}px;
  height: 285px;
  border-radius: 2px;
  padding-horizontal: 8px;
`;

const Thumbnail = styled(View)`
  border-radius: 2px;
`;

const Type = styled(View)`
  flex-direction: row;
  align-items: center;
  padding-top: 5px;
`;
const Title = styled(Text)`
  font-weight: 600;
  padding-top: 5px;
`;
const WhenToStart = styled(Text)`
  padding: 10px 0px;
  font-size: 12px;
  font-weight: 700;
  color: ${COLOR.grey500};
`;
const ChallengeBadge = styled(View)`
  flex-direction: row;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${COLOR.black};
`;
const BadgeContainer = styled(View)`
  flex-direction: row;
`;
const Wrap = styled(View)`
  background-color: ${COLOR.grey200};
  border-radius: 5px;
`;

const BadgeText = styled(Text)`
  color: ${COLOR.grey600};
  font-size: ${SIZE.radius};
  border-radius: 2px;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 7px;
  padding-right: 7px;
`;

export default ChallengeCard;
