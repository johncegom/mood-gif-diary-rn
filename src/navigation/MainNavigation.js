import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './Routes';
import Welcome from '../screens/Welcome/Welcome';
import Home from '../screens/Home/Home';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const FIRST_LAUNCH_KEY = 'firstLaunch';

const getFirstLaunchFlag = async () => {
  try {
    const value = await AsyncStorage.getItem(FIRST_LAUNCH_KEY);
    return value;
  } catch {
    return null;
  }
};

const MainNavigation = () => {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      const flag = await getFirstLaunchFlag();
      setInitialRoute(flag === null ? Routes.Welcome : Routes.Home);
    };
    checkFirstLaunch();
  }, []);

  if (!initialRoute) return null;

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={initialRoute}
    >
      <Stack.Screen name={Routes.Welcome} component={Welcome} />
      <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
