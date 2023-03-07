import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Order from '../screens/Order';
import React from 'react';
import Home from '../assets/menu/home.svg';
import Menu from '../assets/menu/menu.svg';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
function OrderNav() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Order"
        component={Order}
        options={{
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate('Home', {screen: 'Home'})}>
              <Home width={19} height={20} />
            </Pressable>
          ),
          headerRight: () => <Menu width={19} height={20} />,
          headerTitle: '',
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default OrderNav;
