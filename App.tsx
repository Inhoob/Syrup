import BottomTabNav from './src/navigators/BottomTabNav';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import React from 'react';

//기본배경화면 white
const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

function App(): JSX.Element {
  return (
    <NavigationContainer theme={Theme}>
      <BottomTabNav />
    </NavigationContainer>
  );
}

export default App;
