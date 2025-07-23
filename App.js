import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigation/MainNavigation';
import { SnackbarProvider } from './src/contexts/SnackbarContext';

function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <SnackbarProvider>
          <NavigationContainer>
            <MainNavigation />
          </NavigationContainer>
        </SnackbarProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
