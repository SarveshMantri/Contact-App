import {View, TouchableHighlight} from 'react-native';
import React from 'react';

import styles from '../styles/styles';
import {Avatar, Text} from 'react-native-paper';

const CustomListItem = ({item, navigation}) => {
  let imageUri = require('../assets/avatar.png');
  const {imagePath, name} = item;
  try {
    imageUri = JSON.parse(imagePath);
  } catch (error) {
    console.log(error);
  }
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#d2a0f9"
      style={styles.rowFront}
      onPress={() => {
        navigation.navigate('UpdateContact', item);
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Avatar.Image size={50} source={imageUri} />
        <Text variant="headlineSmall" style={styles.phoneTextColor}>
          {name}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default CustomListItem;
