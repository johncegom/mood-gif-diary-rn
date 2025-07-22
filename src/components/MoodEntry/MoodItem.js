import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableRipple } from 'react-native-paper';
import globalStyle from '../../../assets/styles/globalStyle';
import AppText from '../AppText';
import { horizontalScale } from '../../../assets/styles/scaling';

const MoodItem = ({ mood, isSelected, onPress, style }) => {
  return (
    <TouchableRipple
      rippleColor={isSelected ? '#3399ff33' : '#ccc'}
      borderless={false}
      onPress={onPress}
    >
      <View
        style={[
          styles.moodItem,
          globalStyle.flex,
          isSelected && styles.selectedMoodItem,
          style,
        ]}
      >
        <AppText>{mood}</AppText>
      </View>
    </TouchableRipple>
  );
};

export default MoodItem;

const styles = StyleSheet.create({
  moodItem: {
    backgroundColor: '#fff',
    borderRadius: horizontalScale(12),
    padding: horizontalScale(8),
    margin: horizontalScale(5),
  },
  selectedMoodItem: {
    backgroundColor: '#cce5ff',
    borderWidth: 2,
    borderColor: '#3399ff',
  },
});
