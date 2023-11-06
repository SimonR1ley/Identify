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
import MoreInfo from './screens/Matches';
import Chat from './screens/Chat';
import auth from '@react-native-firebase/auth';
import {useRoute} from '@react-navigation/native';
import Onboarding from './screens/Onboarding';
import {ScreenStack} from 'react-native-screens';
import Matches from './screens/Matches';
import ProfilePicture from './screens/ProfilePicture';

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
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
      <Stack.Screen name="Matches" component={Matches} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Match" component={Match} />
      <Stack.Screen name="Onbarding" component={Onboarding} />
      <Stack.Screen name="ProfilePicture" component={ProfilePicture} />
    </Stack.Navigator>
  );
};

// const TabScreen = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarStyle: {
//           backgroundColor: '#207747',
//         },
//         tabBarActiveTintColor: 'red',
//         headerShown: false,
//         tabBarInactiveTintColor: 'green',
//       }}>
//       {/* <Tab.Screen
//         name="Discover"
//         component={Discover}
//         options={{
//           tabBarLabel: 'Discover',
//           tabBarShowLabel: false,
//           // showLabel: false,
//           tabBarIcon: () => (
//             <Image
//               source={require('./assets/discover.png')}
//               style={{width: 30, height: 30, marginTop: 15}}
//             />
//           ),
//         }}
//       /> */}

//       {/* <Tab.Screen
//         name="Match"
//         component={MoreInfo}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarShowLabel: false,
//           // showLabel: false,
//           tabBarIcon: () => (
//             <Image
//               source={require('./assets/discover.png')}
//               style={{width: 28, height: 28, marginTop: 15}}
//             />
//           ),
//         }}
//       /> */}
//       <Tab.Screen
//         name="CameraScreen"
//         component={CameraScreen}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarShowLabel: false,
//           // showLabel: false,
//           tabBarIcon: () => (
//             <Image
//               source={require('./assets/camera.png')}
//               style={{width: 33, height: 33, marginTop: 15}}
//             />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Chat"
//         component={Chat}
//         options={{
//           tabBarLabel: 'Chat',
//           tabBarShowLabel: false,
//           // showLabel: false,
//           tabBarIcon: () => (
//             <Image
//               source={require('./assets/message.png')}
//               style={{width: 28, height: 28, marginTop: 15}}
//             />
//           ),
//           tabBarStyle: {display: 'none'},
//         }}
//       />

//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarShowLabel: false,
//           // showLabel: false,
//           tabBarIcon: () => (
//             <Image
//               source={require('./assets/profile.png')}
//               style={{width: 28, height: 28, marginTop: 15}}
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false); //variable to view screens for auth
  const [routeName, setRouteName] = useState('');

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    auth().onAuthStateChanged(async user => {
      console.log('checking if logged In...');
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  };

  return (
    <NavigationContainer>
      {!loggedIn ? (
        <AuthScreen />
      ) : (
        <StackScreen />
        // <>
        //   {routeName !== 'Chat' && (
        //     // routeName !== 'ProfileUpdate'
        //     <TabScreen />
        //   )}
        // </>
      )}
    </NavigationContainer>
  );
};

export default App;
