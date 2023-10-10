import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Match from './screens/Match';
import CameraScreen from './screens/CameraScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Discover from './screens/Discover';
import Profile from './screens/Profile';
import MoreInfo from './screens/MoreInfo';

const AuthStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthScreen = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        animation: 'none',
      }}>
      {/* <Stack.Screen name="CameraScreen" component={CameraScreen} /> */}
      <AuthStack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="Match" component={Match} /> */}
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
};

const StackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        animation: 'none',
      }}>
      {/* <Stack.Screen name="CameraScreen" component={CameraScreen} /> */}
      <Stack.Screen name="MoreInfo" component={MoreInfo} />
    </Stack.Navigator>
  );
};

const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#207747',
        },
        tabBarActiveTintColor: 'red',
        headerShown: false,
        tabBarInactiveTintColor: 'green',
      }}>
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarLabel: 'Discover',
          tabBarShowLabel: false,
          // showLabel: false,
          tabBarIcon: () => (
            <Image
              source={require('./assets/discover.png')}
              style={{width: 30, height: 30, marginTop: 15}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
          // showLabel: false,
          tabBarIcon: () => (
            <Image
              source={require('./assets/camera.png')}
              style={{width: 40, height: 40, marginTop: 15}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
          // showLabel: false,
          tabBarIcon: () => (
            <Image
              source={require('./assets/profile.png')}
              style={{width: 28, height: 28, marginTop: 15}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MoreInfo"
        component={MoreInfo}
        options={{
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
          // showLabel: false,
          tabBarIcon: () => (
            <Image
              source={require('./assets/profile.png')}
              style={{width: 28, height: 28, marginTop: 15}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const [profileSetupCompleted, setProfileSetupCompleted] = useState(true);

  // useEffect(() => {
  //   checkUser();
  // }, []);

  // const checkUser = async () => {
  //   try {
  //     console.log('Profile Status', profileSetupCompleted);

  //     const profileSetupStatus = await AsyncStorage.getItem(
  //       'profileSetupStatus',
  //     );
  //     if (profileSetupStatus === 'completed') {
  //       setProfileSetupCompleted(true);
  //     } else {
  //       setProfileSetupCompleted(false);
  //       // Navigate to ProfileSetup screen if the profile setup is not completed
  //     }
  //   } catch (error) {
  //     console.error('Error retrieving profile setup status:', error);
  //   }
  // };

  return (
    <NavigationContainer>
      {!profileSetupCompleted ? <AuthScreen /> : <TabScreen />}
      <Stack.Screen name="MoreInfo" component={MoreInfo} />
    </NavigationContainer>
  );
};

export default App;
