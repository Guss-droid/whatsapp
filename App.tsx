import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}

