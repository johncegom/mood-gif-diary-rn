import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WelcomeScreenStyle } from './WelcomeScreenStyle';
import { Button } from 'react-native-paper';
import AppText from './AppText';

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={WelcomeScreenStyle.container}>
      <AppText style={WelcomeScreenStyle.logo}>😊</AppText>{' '}
      {/* Illustration/Icon */}
      <AppText style={WelcomeScreenStyle.title}>
        Welcome to Mood GIF Diary
      </AppText>
      <AppText style={WelcomeScreenStyle.description}>
        Log your daily mood with a GIF. No account required. Your entries stay
        on this device.
      </AppText>
      <Button
        mode="elevated"
        buttonColor="#6C63FF"
        textColor="#fff"
        onPress={() => {}}
      >
        Continue
      </Button>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
