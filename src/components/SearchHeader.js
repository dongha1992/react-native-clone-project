import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {SIZE, COLOR} from '../constants/Theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
const WIDTH = Dimensions.get('window').width;

function SearchHeader({
  onChangeHandler,
  text,
  onPressSearchLists,
  goBack,
  goCancel,
  onKeyPressHandler,
}) {
  return (
    <SafeAreaView style={{height: 80}}>
      <TouchableOpacity style={styles.container}>
        <AntDesign name="left" size={20} color="black" onPress={goBack} />
        <View style={styles.inputWrap}>
          <TextInput
            style={styles.input}
            placeholder="검색"
            onChangeText={onChangeHandler}
            onPressIn={onPressSearchLists}
            spellCheck="false"
            autoCapitalize="none"
            keyboardType="default"
            returnKeyType="done"
            onSubmitEditing={onKeyPressHandler}
            value={text}
            multiline={false}
          />
        </View>
        <View>
          <Text onPress={goCancel}>취소</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
  },
  inputWrap: {
    width: WIDTH * 0.7,
    height: 40,
    justifyContent: 'center',
    backgroundColor: COLOR.grey300,
    borderRadius: 10,
  },
  input: {
    paddingLeft: 10,
  },
});

export default SearchHeader;
