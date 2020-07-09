import React, {useState } from "react";
import { StatusBar } from "react-native";
import 'react-native-gesture-handler';
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from 'expo-font';
import { AppLoading } from 'expo'

import { AuthProvider } from "./src/contexts/auth";
import { LocationProvider } from './src/contexts/location'

import Routes from "./src/routes/index";
const fetchFonts = () => {
  return Font.loadAsync({
    'Roboto-Regular':require('./src/assets/fonts/Roboto_Slab_Regular.ttf')
  });
};
export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false)
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    )
  }
  return (
    <>
      <NavigationContainer>
        <AuthProvider>
          <LocationProvider>
            <StatusBar
              barStyle="light-content"
              backgroundColor='#f4511e'
            />
            <PaperProvider>
              <Routes />
            </PaperProvider>
          </LocationProvider>
        </AuthProvider>
      </NavigationContainer>
    </>
  );
}
