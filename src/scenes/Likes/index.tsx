import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import LikesSent from './LikesSent';
import LikesReceived from './LikesReceived';
import Recommended from './Recommended';

export const LikesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LikesReceived" component={LikesReceived} />
      <Stack.Screen name="LikesSent" component={LikesSent} />
      <Stack.Screen name="Recommended" component={Recommended} />
    </Stack.Navigator>
  );
};

export default LikesStack;
