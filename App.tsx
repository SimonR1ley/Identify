import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Match from './screens/Match';
import CameraScreen from './screens/CameraScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        animation: 'none',
      }}>
      {/* <Stack.Screen name="CameraScreen" component={CameraScreen} /> */}
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="Match" component={Match} /> */}
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

const AppScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="CameraScreen" component={CameraScreen} />
      <Tab.Screen name="Match" component={Match} />
    </Tab.Navigator>
  );
};

const App = () => {
  const [profileSetupCompleted, setProfileSetupCompleted] = useState(true);

  return (
    <NavigationContainer>
      {!profileSetupCompleted ? <AuthScreen /> : <AppScreen />}
    </NavigationContainer>
  );
};

export default App;
