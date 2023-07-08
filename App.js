import React from 'react';
import 'react-native-gesture-handler';

// Screens
import StackNavigator from './src/screens/drawer/stack/StackNavigator';
import FavoriteContactScreen from './src/screens/drawer/FavoriteContactScreen';

// React-Navigation
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="home">
        <Drawer.Screen
          name="home"
          component={StackNavigator}
          options={{title: 'Contacts', headerShown: false}}
        />
        <Drawer.Screen
          name="FavoriteContactScreen"
          component={FavoriteContactScreen}
          options={{title: 'Favorites'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
