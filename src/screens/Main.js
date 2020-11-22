import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import ChatItem from 'components/main/ChatItem';
const CHAT_TEXT =
  "Good! I'm just reading this tutorial on a really cool chat SDK.\nHave you ever heard of\nCometChat?";
const Main = () => {
  //redux
  const messages = useSelector((state) => state.messages.message);
  //main
  return (
    <FlatList
      ListHeaderComponent={
        <>
          <ChatItem isBoy content={'Hey!'} />
          <ChatItem content={'Hi! How are you?'} />
          <ChatItem isBoy content={CHAT_TEXT} />
        </>
      }
      data={messages}
      keyExtractor={(item, index) => index.toString()}
      renderItem={(item) => <ChatItem isBoy content={item} />}
    />
  );
};
export default Main;
