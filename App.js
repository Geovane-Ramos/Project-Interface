import 'react-native-gesture-handler';

import React from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_500Medium, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import Routes from './src/Routes';

export default function App(){
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}