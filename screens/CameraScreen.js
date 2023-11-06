/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
  Linking,
  Image,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraDevices,
} from 'react-native-vision-camera';

import ImagePicker from 'react-native-image-crop-picker';

import axios from 'axios';
import {addImageToCollection} from '../firebase/firebaseDb';
// import dotenv

function CameraScreen() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [presentedFood, setPresentedFood] = useState('');

  const navigation = useNavigation();

  const camera = useRef(null);
  const device = useCameraDevice('back');

  const [analysing, setAnalysing] = useState(true);

  const [showCamera, setShowCamera] = useState(true);
  const [imageSource, setImageSource] = useState('');

  const [usePicture, setUsePicture] = useState(false);

  const [navigatIcon, setNavigateIcon] = useState(false);

  const toggleNavigation = () => {
    setNavigateIcon(!navigatIcon);
  };

  useEffect(() => {
    async function getPermission() {
      const permission = await Camera.requestCameraPermission();
      console.log('Camera permission status: ', permission);
      if (permission === 'denied') {
        await Linking.openSettings();
      }
    }
    getPermission();
  }, []);

  const capturePhoto = async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({});
      setImageSource(photo.path);
      setShowCamera(false);
      console.log(photo.path);
    }
  };

  const useImgLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImageSource(image.sourceURL);
      setShowCamera(false);
    });
  };

  const [apiResponse, setApiResponse] = useState();

  const sendImageToFastAPI = async imageUri => {
    console.log('Sending Request');

    console.log('From send Image', imageUri);
    const PAT = '5946ff3c2eb24f90b4b3cc1bc020cdcc';
    const USER_ID = 'clarifai';
    const APP_ID = 'main';
    const MODEL_ID = 'food-item-recognition';
    const MODEL_VERSION_ID = '1d5fd481e0cf4826aa72ec3ff049e044';
    const IMAGE_URL = imageUri;
    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: 'Key ' + PAT,
      },
      body: raw,
    };
    fetch(
      'https://api.clarifai.com/v2/models/' +
        MODEL_ID +
        '/versions/' +
        MODEL_VERSION_ID +
        '/outputs',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        console.log('pre-passed data :)', result);
        let theData = JSON.parse(result);
        console.log('The Data', theData.outputs[0].data.concepts[0].name);
        setApiResponse(theData.outputs[0].data.concepts[0].name);
        setAnalysing(false);
      })
      .catch(error => console.log('error', error));
  };

  const UseImage = async () => {
    console.log('Using');
    setAnalysing(true);

    const imageURL = await addImageToCollection(imageSource);

    if (imageURL) {
      sendImageToFastAPI(imageURL);
    } else {
      console.error('Failed to add the image to the collection');
    }

    // sendImageToFastAPI(imageSource);
  };

  if (device == null) {
    return (
      <SafeAreaView
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontWeight: '600'}}>
          Camera not available. Check app permissions.
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      {showCamera ? (
        <>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={showCamera}
            photo={true}
          />

          <View
            style={{
              width: '100%',
              // height: 100,
              // backgroundColor: 'red',
              top: 35,
              position: 'absolute',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'top',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                justifyContent: 'space-between',
                gap: 10,
              }}>
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#207747',
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={toggleNavigation}>
                <Image
                  source={require('../assets/navigate.png')}
                  style={{width: 25, height: 25}}
                />
              </TouchableOpacity>

              {navigatIcon ? (
                <>
                  <TouchableOpacity
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: '#207747',
                      borderRadius: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={() => {
                      navigation.navigate('Profile');
                    }}>
                    <Image
                      source={require('../assets/profile.png')}
                      style={{width: 25, height: 25}}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: '#207747',
                      borderRadius: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={() => {
                      navigation.navigate('Chat');
                    }}>
                    <Image
                      source={require('../assets/message.png')}
                      style={{width: 25, height: 25}}
                    />
                  </TouchableOpacity>
                </>
              ) : null}
            </View>

            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                backgroundColor: '#207747',
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                useImgLibrary();
              }}>
              <Image
                source={require('../assets/gallery.png')}
                style={{width: 25, height: 25}}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.camButton}
              onPress={() => capturePhoto()}>
              <View
                style={{
                  width: 80,
                  height: 80,
                  backgroundColor: '#207747',
                  borderRadius: 100,
                }}
              />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={{width: '100%', height: '100%', flex: 1}}>
          {imageSource !== '' ? (
            <Image
              style={styles.image}
              source={{
                uri: `file://'${imageSource}`,
              }}
            />
          ) : null}

          <View style={styles.backButton}>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(0,0,0,0.2)',
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#fff',
                width: 100,
                marginTop: 30,
              }}
              onPress={() => {
                setShowCamera(true);
                setUsePicture(false);
                setAnalysing(false);
              }}>
              <Text style={{color: 'white', fontWeight: '500'}}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              // backgroundColor: 'red',
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              bottom: 25,
              padding: 30,
              flexDirection: 'row',
            }}>
            {usePicture ? (
              !analysing ? (
                <TouchableOpacity
                  style={{
                    width: '100%',
                    height: 80,
                    backgroundColor: '#207747',
                    borderRadius: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    padding: 10,
                  }}
                  onPress={() => {
                    navigation.navigate('Matches', {imageSource, apiResponse});
                  }}>
                  <Image
                    source={require('../assets/analyse.png')}
                    style={{width: 45, height: 45}}
                  />
                  <View
                    style={{
                      width: '80%',
                      height: '100%',
                      // backgroundColor: 'red',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{color: 'white', fontSize: 18, fontWeight: '600'}}>
                      Match Found
                    </Text>
                    <Image
                      source={require('../assets/proceed.png')}
                      style={{width: 35, height: 35}}
                    />
                  </View>
                </TouchableOpacity>
              ) : (
                <View
                  style={{
                    width: '100%',
                    height: 80,
                    backgroundColor: '#207747',
                    borderRadius: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    padding: 10,
                  }}>
                  <View
                    style={{
                      width: '100%',
                      height: '100%',
                      // backgroundColor: 'red',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'row',
                      gap: 20,
                    }}>
                    <Text
                      style={{color: 'white', fontSize: 18, fontWeight: '600'}}>
                      Analysing Image
                    </Text>
                    <ActivityIndicator color="white" />
                  </View>
                </View>
              )
            ) : (
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#fff',
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: '#207747',
                  }}
                  onPress={() => setShowCamera(true)}>
                  <Text style={{color: '#207747', fontWeight: '500'}}>
                    Retake
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#207747',
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: 'white',
                  }}
                  onPress={() => {
                    // setShowCamera(true);
                    setUsePicture(true);
                    UseImage();
                  }}>
                  <Text style={{color: 'white', fontWeight: '500'}}>
                    Use Photo
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'gray',
  },
  backButton: {
    backgroundColor: 'rgba(0,0,0,0.0)',
    position: 'absolute',
    justifyContent: 'center',
    width: '100%',
    top: 0,
    padding: 20,
  },
  buttonContainer: {
    // backgroundColor: 'rgba(0,0,0,0.2)',
    // backgroundColor: 'red',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    padding: 30,
    flexDirection: 'row',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  camButton: {
    height: 100,
    width: 100,
    borderRadius: 100,
    borderColor: '#207747',
    alignItems: 'center',
    justifyContent: 'center',
    //ADD backgroundColor COLOR GREY
    // backgroundColor: '#207747',

    alignSelf: 'center',
    borderWidth: 4,
    // borderColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 9 / 16,
  },
});

export default CameraScreen;
