// Import React and React Native components
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

// Import third-party UI components
import { Button } from 'react-native-paper';

// Import local assets and custom components
import Logo from '../../../assets/Logo';
import AppText from '../../components/AppText';
import style from './style';
import { Routes } from '../../navigation/Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeFirstLaunchData = async value => {
  try {
    await AsyncStorage.setItem('firstLaunch', value);
  } catch (e) {
    // saving error
  }
};

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.logo}>
        <Logo size={96} />
      </View>
      <AppText style={style.title}>Welcome to Mood GIF Diary</AppText>
      <AppText style={style.description}>
        Log your daily mood with a GIF. No account required. Your entries stay
        on this device.
      </AppText>
      <Button
        mode="elevated"
        buttonColor="#6C63FF"
        textColor="#fff"
        onPress={() => {
          storeFirstLaunchData('false');
          navigation.navigate(Routes.Home);
        }}
        style={style.button}
      >
        Continue
      </Button>
    </SafeAreaView>
  );
};

export default Welcome;
