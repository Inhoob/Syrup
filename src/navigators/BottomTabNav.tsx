import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import EarningHistory from '../screens/EarningHistory';
import Earning from '../screens/Earning';
import Home from '../screens/Home';
import Search from '../screens/Search';
import MyPage from '../screens/MyPage';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../styles/colors';
const Tab = createBottomTabNavigator();

function BottomTabNav() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="적립내역"
        component={EarningHistory}
        options={{
          tabBarIcon: () => (
            <Icon
              name="document-text-outline"
              size={20}
              color={colors.pinkishGrey}
            />
          ),
        }}
      />
      <Tab.Screen
        name="적립"
        component={Earning}
        options={{
          tabBarIcon: () => (
            <Icon name="scan-outline" size={20} color={colors.pinkishGrey} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <View
              style={{
                backgroundColor: colors.coralTwo,
                width: 58,
                height: 58,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 58,
                marginBottom: 12,
              }}>
              <Icon name="home-outline" size={22} color={colors.white} />
            </View>
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="검색"
        component={Search}
        options={{
          tabBarIcon: () => (
            <Icon name="search-outline" size={20} color={colors.pinkishGrey} />
          ),
        }}
      />
      <Tab.Screen
        name="MY"
        component={MyPage}
        options={{
          tabBarIcon: () => (
            <Icon name="happy-outline" size={20} color={colors.pinkishGrey} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabNav;
