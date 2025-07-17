import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WelcomeScreenStyle } from './WelcomeScreenStyle';
import { Button } from 'react-native-paper';
import AppText from './AppText';
import Logo from '../../assets/Logo';
import { View } from 'react-native';

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={WelcomeScreenStyle.container}>
      <View style={WelcomeScreenStyle.logo}>
        <Logo size={96} />
      </View>
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
        style={WelcomeScreenStyle.button}
      >
        Continue
      </Button>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
