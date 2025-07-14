import * as React from 'react';
import {
  Provider as PaperProvider,
  Button,
  Card,
  Text,
} from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <SafeAreaView
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Card style={{ padding: 20, margin: 20 }}>
            <Card.Content>
              <Text variant="titleLarge">Mood GIF Diary</Text>
              <Text variant="bodyMedium" style={{ marginVertical: 10 }}>
                Welcome! Start logging your mood with a GIF each day.
              </Text>
              <Button mode="contained" onPress={() => {}}>
                Get Started
              </Button>
            </Card.Content>
          </Card>
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
