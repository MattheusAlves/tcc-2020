import React from "react";
import { StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Routes from "./src/navigation/routes";

import commonStyles from './src/commonStyles'

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={commonStyles.colors.statusBar} />

      <PaperProvider>
        <Routes />
      </PaperProvider>
    </>
  );
}
