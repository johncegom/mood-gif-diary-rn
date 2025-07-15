/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  Provider as PaperProvider,
  Button,
  Card,
  Text,
} from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Style from './Style';

function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <SafeAreaView style={AppStyle.container}>
          <Text style={AppStyle.logo}>😊</Text> {/* Illustration/Icon */}
          <Text variant="titleLarge" style={AppStyle.title}>
            Welcome to Mood GIF Diary
          </Text>
          <Text variant="bodyMedium" style={AppStyle.description}>
            Log your daily mood with a GIF. No account required. Your entries
            stay on this device.
          </Text>
          <Button
            mode="elevated"
            buttonColor="#6C63FF"
            textColor="#fff"
            onPress={() => {}}
          >
            Continue
          </Button>
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

import { StyleSheet } from 'react-native';

const AppStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9FB',
  },
  logo: { fontSize: 96, marginBottom: 8 },
  title: { fontWeight: 'bold', marginBottom: 8 },
  description: { marginVertical: 10, textAlign: 'center' },
});

export default App;
