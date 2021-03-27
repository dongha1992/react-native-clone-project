import React, {useRef, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Text,
  Dimensions,
} from 'react-native';

const WIDTH = Dimensions.get('window').width;

const ITEM_HEIGHT = 250;
const ITEM_WIDTH = WIDTH * 0.8;

function Banner({data}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // const timerId = setInterval(() => {
    //   scrollToIndex();
    // }, 2000);
    // return () => {
    //   scrollToIndex();
    //   clearInterval(timerId);
    // };
  }, [currentIndex]);

  const scrollToIndex = () => {
    console.log(currentIndex, data.length);
    if (currentIndex >= data.length && data.length !== 0) {
      setCurrentIndex(0);
      flatListRef.scrollToIndex({
        animated: true,
        index: 0,
      });
    } else {
      setCurrentIndex(currentIndex + 1);
      flatListRef.scrollToIndex({
        animated: true,
        index: currentIndex,
      });
    }
  };

  const renderItem = ({item, index}) => {
    console.log(item, 'render');
    return (
      <View style={styles.box}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.banner}>
      <FlatList
        ref={ref => {
          flatListRef = ref;
        }}
        style={styles.container}
        data={data}
        initialScrollIndex={0}
        pagingEnabled={true}
        renderItem={renderItem}
        bounces={false}
        keyExtractor={item => item.id.toString()}
        horizontal
        getItemLayout={(data, index) => {
          return {
            length: ITEM_HEIGHT,
            index,
            offset: ITEM_WIDTH * currentIndex,
          };
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    paddingRight: 10,
  },
  container: {
    height: ITEM_HEIGHT,
  },
  box: {
    height: ITEM_HEIGHT,
    width: ITEM_WIDTH,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
});

export default Banner;
