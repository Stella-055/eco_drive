import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SplashScreen from './SplashScreen';
import MainScreen from './MainScreen';
import LoginScreen from './LoginScreen'; // Create this component
import SignUpScreen from './SignUpScreen'; // Create this component
import Home from './home';

import Settings from './settings';
import AboutUsScreen from './aboutus';
import HelpSupportScreen from './helpsupport';
import DeleteAccountScreen from './deleteaccount';
import ContactUsScreen from './contactus';
import PrivacyPolicyScreen from './privacypolicy';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Drawer Screen
function DrawerScreen() {
  return (
    <Drawer.Navigator defaultStatus="closed" initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Account" component={MainScreen} />
      <Drawer.Screen name="AboutUs" component={AboutUsScreen} />
      <Drawer.Screen name="Help&Support" component={HelpSupportScreen} />
      <Drawer.Screen name="Privacy&Policy" component={PrivacyPolicyScreen} />
      <Drawer.Screen name="ContactUs" component={ContactUsScreen} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen 
          name="HomeDrawer" 
          component={DrawerScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen 
          name="HelpSupports" 
          component={HelpSupportScreen} 
          options={({ navigation }) => ({
            title: 'Help and Support',
            headerLeft: () => (
              <BackButton navigation={navigation} />
            ),
          })}
        />
        <Stack.Screen 
          name="DeleteAccountScreen" 
          component={DeleteAccountScreen} 
          options={({ navigation }) => ({
            title: 'Delete Account',
            headerLeft: () => (
              <BackButton navigation={navigation} />
            ),
          })}
        />
        <Stack.Screen 
          name="PrivacyPolicyScreen" 
          component={PrivacyPolicyScreen} 
          options={({ navigation }) => ({
            title: 'Privacy and Policy',
            headerLeft: () => (
              <BackButton navigation={navigation} />
            ),
          })}
        />
        <Stack.Screen 
          name="AboutUsScreen" 
          component={AboutUsScreen} 
          options={({ navigation }) => ({
            title: 'About Us',
            headerLeft: () => (
              <BackButton navigation={navigation} />
            ),
          })}
        />
        <Stack.Screen 
          name="ContactUs" 
          component={ContactUsScreen} 
          options={({ navigation }) => ({
            title: 'Contact Us',
            headerLeft: () => (
              <BackButton navigation={navigation} />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;