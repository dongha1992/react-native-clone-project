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
import {COLOR} from '../constants/Theme';

const WIDTH = Dimensions.get('window').width;

function CategoryType({onPress, data, selectedType}) {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onPress(item.text)}
        style={[
          styles.box,
          selectedType === item.text ? styles.activeBox : null,
        ]}>
        <Text
          style={[
            styles.text,
            selectedType === item.text ? styles.active : null,
          ]}>
          {item.text}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={renderItem}
        data={data}
        keyExtractor={item => String(item.id)}
        horizontal
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    marginBottom: 30,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    width: WIDTH / 6.5,
    borderRadius: 20,
  },
  activeBox: {
    backgroundColor: COLOR.primary500,
  },
  text: {
    color: COLOR.grey500,
    fontWeight: 'bold',
  },
  active: {
    color: 'white',
    padding: 4,
  },
});
export default CategoryType;
