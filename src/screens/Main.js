import React, {useRef} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import ChatItem from 'components/main/ChatItem';
const CHAT_TEXT =
  "Good! I'm just reading this tutorial on a really cool chat SDK.\nHave you ever heard of\nCometChat?";
const Main = () => {
  const messages = useSelector((state) => state.messages.message);
  const scrollViewRef = useRef();
  return (
    <FlatList
      ListHeaderComponent={
        <>
          <ChatItem isBoy content={'Hey!'} />
          <ChatItem content={'Hi! How are you?'} />
          <ChatItem isBoy content={CHAT_TEXT} />
        </>
      }
      style={styles.flatList}
      data={messages}
      keyExtractor={(index) => index.toString()}
      renderItem={(item) => <ChatItem isBoy content={item} />}
      removeClippedSubviews
      ref={scrollViewRef}
      onContentSizeChange={() =>
        scrollViewRef.current.scrollToEnd({animated: true})
      }
    />
  );
};
export default Main;
const styles = StyleSheet.create({
  flatList: {
    paddingHorizontal: 15,
  },
});
