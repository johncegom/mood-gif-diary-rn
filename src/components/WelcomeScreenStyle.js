import { StyleSheet } from 'react-native';

export const WelcomeScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9FB',
  },
  logo: { marginBottom: 8 },
  title: { fontWeight: 'bold', marginBottom: 8, fontSize: 28 },
  description: { marginVertical: 10, textAlign: 'center' },
  button: { marginTop: 25 },
});
