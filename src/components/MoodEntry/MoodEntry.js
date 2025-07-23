import { FlatList, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import AppText from '../AppText';
import { Button, Searchbar } from 'react-native-paper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../assets/styles/scaling';
import globalStyle from '../../../assets/styles/globalStyle';
import MoodItem from './MoodItem';
import { useSnackbar } from '../../hooks/useSnackbar';

const DATA = [
  { id: '1', mood: '😊 Happy' },
  { id: '2', mood: '😢 Sad' },
  { id: '3', mood: '😡 Angry' },
  { id: '4', mood: '😱 Surprised' },
  { id: '5', mood: '😴 Tired' },
  { id: '6', mood: '🤩 Excited' },
  { id: '7', mood: '😐 Neutral' },
  { id: '8', mood: '😔 Disappointed' },
  { id: '9', mood: '😆 Amused' },
  { id: '10', mood: '😳 Embarrassed' },
  { id: '11', mood: '🥰 Loved' },
  { id: '12', mood: '😤 Frustrated' },
];

export default function MoodEntry() {
  const [selectedId, setSelectedId] = useState(null);
  const { showSnackbar } = useSnackbar();

  const handleSelectMood = id =>
    setSelectedId(prevId => (prevId === id ? null : id));

  const handleSaveMood = () => {
    showSnackbar('Mood saved successfully!');
  };

  return (
    <View style={[styles.container, globalStyle.flex]}>
      <AppText style={styles.title}>How are you feeling today?</AppText>
      <View
        style={{
          marginBottom: verticalScale(8),
        }}
      >
        <Searchbar
          mode="bar"
          placeholder="Search a GIF to express your mood..."
        />
      </View>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        numColumns={3}
        style={{ marginBottom: horizontalScale(15) }}
        renderItem={({ item }) => {
          const isSelected = item.id === selectedId;
          return (
            <MoodItem
              mood={item.mood}
              isSelected={isSelected}
              onPress={() => handleSelectMood(item.id)}
            />
          );
        }}
      />
      <Button
        disabled={selectedId === null}
        mode="contained"
        onPress={() => handleSaveMood()}
        buttonColor="#6C63FF"
      >
        Save Mood
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: verticalScale(8),
    paddingHorizontal: horizontalScale(25),
  },
  title: {
    textAlign: 'center',
    marginBottom: verticalScale(10),
    fontSize: scaleFontSize(28),
  },
});
