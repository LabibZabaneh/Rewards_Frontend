import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigationBar from "./navigation/BottomNavigationBar/BottomNavigationBar";


export default function App() {
  return (
      <NavigationContainer>
        <BottomNavigationBar />
      </NavigationContainer>
  );
}
