import BottomTabNav from './src/navigators/BottomTabNav';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrderNav from './src/navigators/OrderNav';

const Stack = createNativeStackNavigator();

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
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTabNav"
          component={BottomTabNav}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderNav"
          component={OrderNav}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
