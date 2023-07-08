import React from 'react';

// Screens
import ContactListScreen from './ContactListScreen';
import CreateContactScreen from './CreateContactScreen';
import UpdateContactScreen from './UpdateContactScreen';

// React-Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerToggleButton} from '@react-navigation/drawer';

const Stack = createStackNavigator();

const StackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Contacts">
      <Stack.Screen
        name="Contacts"
        component={ContactListScreen}
        options={{headerLeft: props => <DrawerToggleButton />}}
      />
      <Stack.Screen
        name="NewContact"
        component={CreateContactScreen}
        options={{title: 'Add New Contact'}}
      />
      <Stack.Screen
        name="UpdateContact"
        component={UpdateContactScreen}
        options={{title: 'Update Contact'}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
