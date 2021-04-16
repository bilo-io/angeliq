import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import Contacts from './Contacts';
import Thread from './Thread';

export const ChatStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat-Contacts" component={Contacts} />
      <Stack.Screen name="Chat-Thread" component={Thread} />
    </Stack.Navigator>
  );
};

export default ChatStack;
