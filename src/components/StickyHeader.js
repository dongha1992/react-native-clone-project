import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {COLOR} from '../constants/Theme';
const WIDTH = Dimensions.get('window').width;

const StickyHeader = props => {
  const [detectedScroll, setDetectedScroll] = useState('');
  const [stickyY, setStickyY] = useState(0);
  // 550

  useEffect(() => {
    if (props.scrollOffset > 550) {
      stickyView.scrollTo({x: 0, y: stickyY});
    }
  }, [props.scrollOffset]);

  useEffect(() => {
    if (props.scrollOffset < 800) {
      setDetectedScroll(1);
    } else if (props.scrollOffset < 1300) {
      setDetectedScroll(2);
    } else if (props.scrollOffset > 1300) {
      setDetectedScroll(3);
    }
  }, [props.scrollOffset]);
  const onLayout = event => {
    const {x, y} = event.nativeEvent.layout;
    setStickyY(y);
  };
  console.log(stickyY, 'stikcy');
  return (
    <ScrollView
      style={{
        marginTop: 30,
        width: '100%',
        height: 30,
        flex: 1,
      }}
      ref={ref => {
        stickyView = ref;
      }}
      collapsable
      onLayout={onLayout}>
      <View style={styles.header}>
        {props.TAB_TITLE.map(title => (
          <TouchableOpacity
            onPress={() => {
              props.onMoveSection(title.id);
            }}
            style={[
              styles.tab,
              title.id === detectedScroll ? styles.activeBottomLine : null,
            ]}>
            <Text
              style={[
                styles.title,
                title.id === detectedScroll ? styles.activeText : null,
              ]}>
              {title.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sticky: {},
  container: {
    paddingVertical: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderStyle: 'solid',
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
    width: '100%',
  },
  tab: {
    borderStyle: 'solid',
    paddingBottom: 10,
  },
  title: {
    color: COLOR.grey600,
    fontWeight: 'bold',
  },
  activeBottomLine: {borderBottomColor: COLOR.primary500, borderBottomWidth: 2},
  activeText: {
    color: COLOR.primary500,
  },
});
export default StickyHeader;
