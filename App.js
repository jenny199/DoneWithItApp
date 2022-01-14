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
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/Components/AppButton';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/Components/Screen';
import Icon from './app/Components/Icon';
import ListItem from './app/Components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInputs from './app/Components/AppTextInputs';
import AppPicker from './app/Components/AppPicker';


const categories= [
  {label: "Furniture", value:1 },
  {label: "Clothing", value:2 },
  {label: "Cameras", value:3 },
]
export default function App() {
  return (
    <Screen>
      <AppPicker items={categories} icon="apps" placeholder="Category" />
      <AppTextInputs  icon="email" placeholder="Email" />
    </Screen>
  );
}


