// App.js
import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { ItemsProvider } from './context/ItemsContext';

export default function App() {
  return (
    <ItemsProvider>
      <AppNavigator />
    </ItemsProvider>
  );
}
