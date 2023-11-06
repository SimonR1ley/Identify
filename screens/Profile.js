/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  getCurrentUser,
  signoutUser,
  updateImageProfile,
} from '../firebase/firebaseAuth';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import {updateUserInDb} from '../firebase/firebaseDb';

const Profile = () => {
  const navigation = useNavigation();
  const user = getCurrentUser();

  console.log(user);

  const [imageSource, setImageSource] = useState(user.photoURL);

  const useImgLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImageSource(image.sourceURL);
    });
  };

  const UpdateInformation = async () => {
    await updateUserInDb(user.uid, imageSource);
    await updateImageProfile(imageSource);
  };

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
          width: '100%',
          height: 120,
          // borderBottomWidth: 1,
          // borderBottomColor: '#E0E0E0',
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '100%',
            // height: 110,
            // backgroundColor: '#2D2E31',
            position: 'absolute',
            // bottom: 5,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 5,
            // paddingTop: 35,
          }}>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              // backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
              // marginRight: 10,
              position: 'absolute',
              zIndex: 2,
              top: 10,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../assets/return.png')}
            />
          </TouchableOpacity>
          <View
            style={{
              width: '100%',
              height: 70,
              // backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
              // paddingLeft: 30,
            }}>
            <Text style={{fontSize: 26, fontWeight: '700', color: 'black'}}>
              {/* {users.friends.name} */}
              Profile
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#207747',
          borderRadius: 100,
          marginBottom: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        onPress={() => useImgLibrary()}>
        <Image
          source={{uri: imageSource}}
          style={{width: '100%', height: '100%', borderRadius: 100}}
        />

        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(50, 50, 50, 0.4)',
            borderRadius: 100,
          }}>
          <Image
            source={require('../assets/camera.png')}
            style={{width: 50, height: 50}}
          />
        </View>
      </TouchableOpacity>
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
            color: 'black',
            fontSize: 20,
            marginBottom: 50,
            fontWeight: '500',
          }}>
          My Account Details
        </Text>
        <View
          style={{
            width: '90%',
            backgroundColor: '#2A2D2E',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
            padding: 10,
            marginBottom: 20,
            borderRadius: 20,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
            }}>
            Username
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 23,
            }}>
            {user.displayName}
          </Text>
        </View>
        {/* <TextInput
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
        /> */}
        <View
          style={{
            width: '90%',
            backgroundColor: '#2A2D2E',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
            padding: 10,
            borderRadius: 20,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
            }}>
            Email
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 22,
            }}>
            {user.email}
          </Text>
        </View>

        {/* <TextInput
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
        /> */}

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
          onPress={() => {
            UpdateInformation();
          }}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: 18}}>
            Update
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            // backgroundColor: '#207747',
            width: '48%',
            height: 35,
            borderRadius: 10,
            marginTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            signoutUser().then(() => {
              navigation.navigate('Login');
            });
          }}>
          <Text style={{color: 'black', fontWeight: '600', fontSize: 18}}>
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
