import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper'
import AppNavigator from './src/navigation'

export default function App() {
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
