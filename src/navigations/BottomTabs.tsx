import React from 'react';
// import FAIcon from 'react-native-vector-icons/FontAwesome5';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import SettingsStack from '../scenes/Settings';
import LikesStack from '../scenes/Likes';
import SwipeStack from '../scenes/Swipe';
import ChatStack from '../scenes/Chat';
import ProfileStack from '../scenes/Profile';

const getTabIcon = routeName => {
  switch (routeName) {
    case 'Settings':
      return 'cog';
    case 'Likes':
      return 'heart';
    case 'Swipe':
      return null;
    case 'Profile':
      return 'user';
    case 'Chat':
      return 'comment';
  }
};

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          // return <FAIcon name={getTabIcon(route.name)} />;
          return <Text>{route.name}</Text>;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#ff2244',
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen name="Settings" component={SettingsStack} />
      <Tab.Screen name="Likes" component={LikesStack} />
      <Tab.Screen name="Swipe" component={SwipeStack} />
      <Tab.Screen name="Chat" component={ChatStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};
