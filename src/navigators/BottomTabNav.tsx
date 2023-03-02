import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EarningHistory from '../screens/EarningHistory';
import Earning from '../screens/Earning';
import Home from '../screens/Home';
import Search from '../screens/Search';
import MyPage from '../screens/MyPage';
import React from 'react';
const Tab = createBottomTabNavigator();

function BottomTabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="EarningHistory" component={EarningHistory} />
      <Tab.Screen name="Earning" component={Earning} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="MyPage" component={MyPage} />
    </Tab.Navigator>
  );
}
export default BottomTabNav;
