import React from 'react';

import {
  ScrollView,
  // SafeAreaView,
  // StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export const AppScreen = ({children, style}: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView
      style={backgroundStyle}
      contentContainerStyle={{
        flexGrow: 1,
        // justifyContent: 'space-between',
        alignItems: 'center',
        ...style,
      }}>
      {children}
    </ScrollView>
  );
};

export default AppScreen;
