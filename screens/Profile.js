import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {getCurrentUser, signoutUser} from '../firebase/firebaseAuth';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const user = getCurrentUser();
  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#207747',
          borderRadius: 100,
          marginBottom: 10,
        }}></View>
      <Text>Profile Picture</Text>

      <View
        style={{
          width: '85%',
          height: '55%',
          backgroundColor: '#rgba(52, 52, 52, 0.01)',
          // backgroundColor: "black",
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30,
          borderRadius: 15,
          // shadowOffset: { width: 0, height: 0 },
          // shadowColor: "#171717",
          // shadowOpacity: 0.5,
          // shadowRadius: 5,
        }}>
        <Text
          style={{
            marginBottom: 10,
            color: 'black',
          }}>
          Update Username
        </Text>
        <TextInput
          placeholder={user.displayName}
          style={{
            backgroundColor: '#2A2D2E',
            width: '90%',
            height: 40,
            paddingLeft: 15,
            borderRadius: 10,
            color: 'white',
          }}
          placeholderTextColor="white"
          // onChangeText={newText => setUsername(newText)}
        />

        <Text
          style={{
            marginBottom: 10,
            marginTop: 10,
            color: 'black',
          }}>
          Update Email
        </Text>
        <TextInput
          placeholder={user.email}
          style={{
            backgroundColor: '#2A2D2E',
            width: '90%',
            height: 40,
            paddingLeft: 15,
            borderRadius: 10,
            color: 'white',
          }}
          placeholderTextColor="white"
          // onChangeText={newText => setUsername(newText)}
        />

        <TouchableOpacity
          style={{
            backgroundColor: '#207747',
            width: '48%',
            height: 35,
            borderRadius: 10,
            marginTop: 80,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          // onPress={updateProfileInformation}
        >
          <Text style={{color: 'white', fontWeight: '600', fontSize: 18}}>
            Update
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#207747',
            width: '48%',
            height: 35,
            borderRadius: 10,
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            signoutUser().then(() => {
              navigation.navigate('Login');
            });
          }}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: 18}}>
            Signout
          </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={{
            // backgroundColor: "#CC4949",
            width: '40%',
            height: 35,
            borderRadius: 10,
            marginTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          // onPress={signingOut}
        >
          <Text style={{color: 'white', fontWeight: '600', fontSize: 17}}>
            Sign Out
          </Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
