import React from 'react';
import ChatItem from 'components/main/ChatItem';
const CHAT_TEXT =
  "Good! I'm just reading this tutorial on a really cool chat SDK.\nHave you ever heard of\nCometChat?";
const Main = () => {
  return (
    <>
      <ChatItem isBoy content={'Hey!'} />
      <ChatItem content={'Hi! How are you?'} />
      <ChatItem isBoy content={CHAT_TEXT} />
      <ChatItem isBoy content={CHAT_TEXT} />
      <ChatItem isBoy content={CHAT_TEXT} />
      <ChatItem isBoy content={CHAT_TEXT} />
      <ChatItem isBoy content={CHAT_TEXT} />
      <ChatItem isBoy content={CHAT_TEXT} />
    </>
  );
};
export default Main;
