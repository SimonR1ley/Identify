import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {signinUser} from '../firebase/firebaseAuth';
import {useState} from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const logOn = async () => {
    setLoading(true);

    if (!email || !password) {
      Alert.alert('Try Again', 'please fill in your email and password', [
        {
          text: 'Try Again',
          onPress: () => {
            setLoading(false);
          },
        },
      ]);
    } else {
      await signinUser(email, password).then(() => {
        setLoading(false);
      });
      navigation.navigate('CameraScreen');
      console.log('Successfully signed in!!!');
    }
  };

  // const LoginUser = async () => {
  //   await AsyncStorage.setItem('profileSetupStatus', 'completed').then(
  //     async () => {
  //       navigation.navigate('CameraScreen');
  //     },
  //   );
  // };

  return (
    <>
      {!loading ? (
        <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
          <>
            <View
              style={{
                width: '100%',
                height: '25%',
                marginBottom: 20,
                backgroundColor: '#FFFFFF',
              }}>
              <View
                style={{
                  width: 200,
                  height: 200,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  marginTop: 30,
                  // backgroundColor: '#161616',
                }}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    // backgroundColor: 'FFFFFF',
                  }}
                  source={require('../assets/logo.png')}
                />
              </View>
            </View>

            <View
              style={{
                width: '98%',
                height: '60%',
                alignSelf: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 20,
                backgroundColor: '#FFFFFF',
                marginTop: 35,
              }}>
              <TextInput
                style={{
                  width: '90%',
                  height: 50,
                  backgroundColor: '#2A2D2E',
                  borderRadius: 10,
                  textAlign: 'center',
                  color: 'white',
                }}
                placeholder="Email"
                placeholderTextColor="white"
                onChangeText={newText => setEmail(newText)}
              />

              <TextInput
                style={{
                  width: '90%',
                  height: 50,
                  backgroundColor: '#2A2D2E',
                  borderRadius: 10,
                  textAlign: 'center',
                  color: 'white',
                }}
                placeholder="Password"
                placeholderTextColor="white"
                onChangeText={newText => setPassword(newText)}
              />

              <Button
                title="Forgot Password?"
                color="#979797"
                style={{
                  width: 100,
                  height: 50,
                }}
                onPress={() => {
                  // navigation.navigate('Login');
                }}
              />

              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 180,
                  height: 50,
                  backgroundColor: '#2FA05E',
                  borderRadius: 10,
                  alignSelf: 'center',
                  marginTop: 20,
                  marginBottom: 10,
                }}
                onPress={() => {
                  // navigation.navigate('CameraScreen');
                  logOn();
                }}>
                <Text style={{color: 'white', fontWeight: '700', fontSize: 17}}>
                  Login
                </Text>
              </TouchableOpacity>

              <Button
                title="Need an account?"
                color="black"
                style={{
                  width: 100,
                  height: 50,
                }}
                onPress={() => navigation.navigate('Signup')}
              />
            </View>
          </>
        </SafeAreaView>
      ) : (
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#2FA05E',
            flexDirection: 'column',
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 22,
              marginBottom: 10,
            }}>
            Loading
          </Text>
          <ActivityIndicator
            animating={loading}
            size={'large'}
            color={'white'}
          />
        </View>
      )}
    </>
  );
};

export default Login;
