import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Navigation from './src/navigation';
import { Provider } from './src/context/provider';
const App = () => {

  return (
   <Provider>
   <Navigation />
   <StatusBar style="auto" />
   </Provider>
  );
}

export default App

