import React from "react";
import { StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native ";

import { AuthProvider } from "./contexts/auth";
import commonStyles from "./src/commonStyles";

import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor={commonStyles.colors.statusBar}
        />
        <PaperProvider>
          <Routes />
        </PaperProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
