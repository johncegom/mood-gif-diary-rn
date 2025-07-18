import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './Routes';
import Welcome from '../screens/Welcome/Welcome';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.Welcome} component={Welcome} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
