import {View, Text} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import TabNavigators from './src/navigators/TabNavigators';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigators />
    </NavigationContainer>
  );
}
