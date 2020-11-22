import React from 'react';
import {StyleSheet, StatusBar, ScrollView, SafeAreaView} from 'react-native';
import {COLORS} from 'global/colors';
import ChatInput from 'components/main/ChatInput';

const Layout = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.LIGHT} />
      <ScrollView style={styles.content}>{props.children}</ScrollView>
      <ChatInput />
    </SafeAreaView>
  );
};
export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: COLORS.LIGHT,
    paddingHorizontal: 15,
  },
});
