import { StatusBar } from 'expo-status-bar';
import { 
  Dimensions,
  StyleSheet,
  Text,
  View, 
  SafeAreaView,
  Platform
 } from 'react-native';
 
import React from 'react';
// import WelcomeScreen from './app/screens/WelcomeScreen';
// import ViewImageScreen from './app/screens/ViewImageScreen';
// import Button from './app/Components/Button';
// import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
// import MessagesScreen from './app/screens/MessagesScreen';
// import Screen from './app/Components/Screen';
// import Icon from './app/Components/Icon';
// import ListItem from './app/Components/ListItem';
// import AccountScreen from './app/screens/AccountScreen';
// import ListingsScreen from './app/screens/ListingsScreen';
// import AppTextInputs from './app/Components/AppTextInputs';
// import AppPicker from './app/Components/AppPicker';
// import LoginScreen from './app/screens/LoginScreen';
// import ListingEditScreen from './app/screens/ListingEditScreen';
// import RegisterScreen from './app/screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
// import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  )

}


