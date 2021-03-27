import dayjs from 'dayjs';

const FREQUENCIES = [
  {id: 1, text: '매일'},
  {id: 2, text: '평일매일'},
  {id: 3, text: '주말매일'},
  {id: 4, text: '주1회'},
  {id: 5, text: '주2회'},
  {id: 6, text: '주3회'},
  {id: 7, text: '주4회'},
  {id: 8, text: '주5회'},
  {id: 9, text: '주6회'},
  {id: 10, text: '기타'},
];

const PERIODS = [
  {id: 1, text: '2주동안', value: 14},
  {id: 2, text: '4주동안', value: 28},
  {id: 3, text: '기타', value: 0},
];

export default function getChallengeMetaInformation(challenge) {
  const frequency = FREQUENCIES.find(f => f.id === challenge.goal.frequency)
    ?.text;
  const period = PERIODS.find(p => p.id === challenge.goal.period)?.text;

  let whenToStart;
  const startDiff = Math.floor(
    dayjs(challenge.startDate).diff(dayjs(), 'second'),
  );

  const registerEndDiff = Math.floor(
    dayjs(challenge.registerEndDate).diff(dayjs(), 'seconds'),
  );

  if (registerEndDiff < 0) {
    whenToStart = '이미 시작';
  } else if (
    startDiff < 0 ||
    dayjs(challenge.startDate).format('YYYY-MM-DD') ===
      dayjs().format('YYYY-MM-DD')
  ) {
    whenToStart = '오늘부터 시작';
  } else if (startDiff < 24 * 60 * 60) {
    whenToStart = '내일부터 시작';
  } else if (startDiff < 24 * 60 * 60 * 2) {
    whenToStart = '모레부터 시작';
  } else if (startDiff > 0) {
    whenToStart = `${Math.ceil(startDiff / 24 / 60 / 60)}일 뒤 시작`;
  }

  if (challenge.maxRegisterCount !== 99999) {
    const remainRegisterAvailableCount =
      challenge.maxRegisterCount - challenge.registerInfo.registerCount;

    if (remainRegisterAvailableCount > 0) {
      whenToStart += ` · 선착순 ${remainRegisterAvailableCount}명 남음`;
    } else {
      whenToStart += ' · 모집 마감';
    }
  }

  return {whenToStart, period, frequency};
}
