import React, { } from "react";
import { Text } from 'react-native'
import { StatusBar } from "react-native";
import 'react-native-gesture-handler';
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import { AuthProvider } from "./src/contexts/auth";
import { LocationProvider } from './src/contexts/location'
import commonStyles from "./src/commonStyles";

import Routes from "./src/routes/index";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AuthProvider>
          <LocationProvider>
            <StatusBar
              barStyle="light-content"
              backgroundColor={commonStyles.colors.statusBar}
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
