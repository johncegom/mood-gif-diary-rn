import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import WelcomeScreen from './src/components/WelcomeScreen';

function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <WelcomeScreen />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
