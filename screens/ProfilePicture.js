import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {updateUserInDb} from '../firebase/firebaseDb';
import {updateImageProfile} from '../firebase/firebaseAuth';
import {useNavigation} from '@react-navigation/native';

const ProfilePicture = () => {
  const [imageSource, setImageSource] = useState('');
  const navigation = useNavigation();

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
    await updateImageProfile(imageSource).then(() => {
      navigation.navigate('Onbarding');
    });
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
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
        {imageSource ? (
          <Image
            source={{uri: imageSource}}
            style={{width: '100%', height: '100%', borderRadius: 100}}
          />
        ) : null}
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
      <Text>Please add your Profile Picture</Text>

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
          if (imageSource) {
            UpdateInformation();
          }
        }}>
        <Text style={{color: 'white', fontWeight: '600', fontSize: 18}}>
          Update
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({});
