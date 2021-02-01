import React from "react";
import { StatusBar } from "react-native";
import 'react-native-gesture-handler';
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications


import { AuthProvider } from "./src/contexts/auth";
import { LocationProvider } from './src/contexts/location'
import { CategoryProvider } from './src/contexts/category'

import Routes from "./src/routes/index";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AuthProvider>
          <LocationProvider>
            <CategoryProvider>
              <StatusBar
                barStyle="light-content"
              // backgroundColor='#f4511e'
              />
              <PaperProvider>
                <Routes />
              </PaperProvider>
            </CategoryProvider>
          </LocationProvider>
        </AuthProvider>
      </NavigationContainer>
    </>
  );
}
