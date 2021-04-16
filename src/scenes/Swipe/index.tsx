import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import Explore from './Explore';

export const SwipeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Explore" component={Explore} />
    </Stack.Navigator>
  );
};

export default SwipeStack;
