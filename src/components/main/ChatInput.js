import {COLORS} from 'global/colors';
import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {setMessage} from 'redux/Actions';
import {useDispatch} from 'react-redux';
import {FONTS} from 'global/fonts';

const ChatInput = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const set_message = (message) => {
    let hasWhite = hasWhiteSpace(message);
    if (!hasWhite) {
      dispatch(setMessage(message));
      setInput('');
    }
  };
  const hasWhiteSpace = (string) => {
    if (!string.replace(/\s/g, '').length) {
      return true;
    }
    return false;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setInput}
        value={input}
        placeholder="Type something ..."
        multiline
      />
      <TouchableOpacity
        onPress={() => set_message(input)}
        style={styles.send_btn}>
        <Icon style={styles.send_icon} name="paper-plane" />
      </TouchableOpacity>
    </View>
  );
};
export default ChatInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 4,
    shadowColor: COLORS.DARK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  input: {
    fontSize: 16,
    minHeight: 50,
    maxHeight: 100,
    paddingHorizontal: 10,
    flex: 1,
    fontFamily: FONTS.Robot,
  },
  send_btn: {
    width: 50,
    alignItems: 'center',
  },
  send_icon: {
    color: COLORS.BLUE,
    fontSize: 24,
  },
});
