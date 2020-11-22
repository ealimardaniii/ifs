import {COLORS} from 'global/colors';
import {IMAGES} from 'global/images';
import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const ChatItem = (props) => {
  const {isBoy} = props;
  return (
    <View style={isBoy ? styles.container : styles.container_girl}>
      <View style={[styles.corner, !isBoy && styles.corner_girl]} />
      <Image
        source={isBoy ? IMAGES.BOY_AVATAR : IMAGES.GIRL_AVATAR}
        style={[styles.image, !isBoy && styles.image_girl]}
      />
      <View style={[styles.content, !isBoy && styles.content_girl]}>
        <Text style={[styles.content_text, !isBoy && styles.content_text_girl]}>
          {props.content}
        </Text>
      </View>
    </View>
  );
};
export default ChatItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  container_girl: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  image_girl: {
    marginLeft: 10,
    marginRight: 0,
  },
  content: {
    flexShrink: 1,
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 7.5,
    elevation: 2,
    shadowColor: COLORS.DARK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  content_girl: {
    backgroundColor: COLORS.BLUE,
  },
  content_text: {
    textAlignVertical: 'center',
    color: COLORS.BLACK,
  },
  content_text_girl: {
    color: COLORS.GRAY,
  },
  corner: {
    backgroundColor: COLORS.WHITE,
    width: 15,
    height: 15,
    position: 'absolute',
    left: 55,
    bottom: 15,
    transform: [{rotateZ: '45deg'}],
    elevation: 2,
    shadowColor: COLORS.DARK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  corner_girl: {
    backgroundColor: COLORS.BLUE,
  },
});
