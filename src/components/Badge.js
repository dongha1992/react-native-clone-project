import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import styled from 'styled-components';
import {SIZE, COLOR} from '../constants/Theme';

function Badge({title, chlidren, type, ...props}) {
  return (
    <View style={styles.container}>
      <Text style={styles.element}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 2,
    borderRadius: 50,
  },
  element: {
    color: COLOR.black,
    backgroundColor: COLOR.gray900,
    fontWeight: SIZE.b,
    fontSize: SIZE.radius,
    borderRadius: 2,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 7,
    paddingRight: 7,
  },
});

export default Badge;
