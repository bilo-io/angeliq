import React from 'react';
import {Text} from 'react-native';
import AppScreen from '../../components/App/Screen';

export const Contacts = () => {
  return (
    // @ts-ignore
    <AppScreen>
      <Text>Contacts!</Text>
      <Text>TODO:</Text>
      <Text> - Tab for chats</Text>
      <Text> - Tab for matches</Text>
    </AppScreen>
  );
};

export default Contacts;
