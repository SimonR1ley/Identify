import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {registerNewUser, updateAuthProfile} from '../firebase/firebaseAuth';

import {useNavigation} from '@react-navigation/native';

import {useState} from 'react';

const Signup = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [passwordConVal, setPasswordConVal] = useState('');

  const registerUser = async () => {
    console.log('Registering');
    if (password != passwordConVal) {
      Alert.alert('Try Again', 'Passwords do not match.', [
        {
          text: 'Try Again',
          onPress: () => {
            setLoading(false);
          },
        },
      ]);
    } else if (
      !name ||
      !surname ||
      !username ||
      !email ||
      !password ||
      !passwordConVal
    ) {
      Alert.alert('Try Again', 'please fill in all your information.', [
        {
          text: 'Try Again',
          onPress: () => {
            setLoading(false);
          },
        },
      ]);
    } else {
      setLoading(true);
      await registerNewUser(email.toLowerCase(), password).then(async () => {
        await updateAuthProfile(username);
        // await AsyncStorage.setItem('profileSetupStatus', 'notCompleted');
        // navigation.navigate('WelcomeScreen', {name, surname});
        console.log('User Registerd!!!');
        setLoading(false);
      });
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      {!loading ? (
        <>
          <View style={{width: '100%', height: '25%', marginBottom: 20}}>
            <View
              style={{
                width: 200,
                height: 200,
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: 30,
                // marginBottom: 30,
              }}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  // backgroundColor: "green",
                }}
                source={require('../assets/logo.png')}
              />
            </View>
          </View>

          <View
            style={{
              width: '98%',
              // height: '50%',
              alignSelf: 'center',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              gap: 15,
              marginTop: 50,
              marginBottom: 20,
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
              placeholder="Name"
              placeholderTextColor="white"
              onChangeText={newText => setName(newText)}
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
              placeholder="Surname"
              placeholderTextColor="white"
              onChangeText={newText => setSurname(newText)}
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
              placeholder="Username"
              placeholderTextColor="white"
              onChangeText={newText => setUsername(newText)}
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
              placeholder="Email Address"
              placeholderTextColor="white"
              onChangeText={newText => setEmail(newText)}
            />

            <TextInput
              // secureTextEntry={true}
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

            <TextInput
              // secureTextEntry={true}
              style={{
                width: '90%',
                height: 50,
                backgroundColor: '#2A2D2E',
                borderRadius: 10,
                textAlign: 'center',
                color: 'white',
              }}
              placeholder="Confirm Password"
              placeholderTextColor="white"
              onChangeText={newText => setPasswordConVal(newText)}
            />
          </View>

          <View style={{width: '100%', height: '20%'}}>
            {/* <ButtonBlue buttonText="Signup" /> */}

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
                marginBottom: 20,
              }}
              onPress={registerUser}>
              <Text style={{color: 'white', fontWeight: '700', fontSize: 17}}>
                Signup
              </Text>
            </TouchableOpacity>

            <Button
              title="Already have an account"
              color="#979797"
              style={{
                width: 100,
                height: 50,
              }}
              onPress={() => navigation.navigate('Onbarding')}
            />
          </View>
        </>
      ) : (
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>Loading</Text>
          <ActivityIndicator animating={loading} size={40} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Signup;
