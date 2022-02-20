/**
 * Lobby.js
 */

 import React from 'react';

 import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

 import {
   modeColor
 } from '../../theme/Colors';
 
//  import Constants from 'expo-constants';
//  import { StatusBar } from "expo-status-bar";

 import LockPin from '../Lockpin';

 const Lobby = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
   // backgroundColor: isDarkMode ? modeColor.dark.background : modeColor.light.background,
  };

   return (
     
    <>
      <StatusBar />  
      <LockPin></LockPin>
      <ScrollView>

      </ScrollView>

    </>
   );
 };

 const styles = StyleSheet.create({
  
});
 

 
 export default Lobby;