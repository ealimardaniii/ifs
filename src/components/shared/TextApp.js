import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {FONTS} from 'global/fonts';

const TextApp = (props) => {
  return <Text style={[props.style, styles.text]}>{props.children}</Text>;
};
export default TextApp;

const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.Robot,
    fontSize: 16,
  },
});
