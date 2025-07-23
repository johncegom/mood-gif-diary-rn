import { StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MoodEntry from '../../components/MoodEntry/MoodEntry';
import MiniCalendar from '../../components/MiniCalendar';
import { verticalScale } from '../../../assets/styles/scaling';
import globalStyle from '../../../assets/styles/globalStyle';

const Home = () => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        globalStyle.primaryBackground,
        globalStyle.flex,
      ]}
    >
      <FlatList
        data={[]}
        renderItem={null}
        keyExtractor={() => null}
        ListHeaderComponent={
          <>
            <MoodEntry />
            <MiniCalendar />
          </>
        }
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: verticalScale(25),
  },
});
