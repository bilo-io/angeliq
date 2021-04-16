import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import ProfileEdit from './ProfileEdit';
import ProfilePreview from './ProfilePreview';

export const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile-Edit" component={ProfileEdit} />
      <Stack.Screen name="Profile-Preview" component={ProfilePreview} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
