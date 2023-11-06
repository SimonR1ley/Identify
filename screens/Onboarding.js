import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Onboarding = () => {
  const [num, setNum] = useState(1);
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* ONBOARDING ONE  */}
      {num === 1 ? (
        <View
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../assets/burger.png')}
            style={{width: 300, height: 300}}
          />
          <Text
            style={{
              width: '80%',
              textAlign: 'center',
              fontWeight: '600',
              fontSize: 18,
              marginBottom: 20,
            }}>
            This app helps Identify different food items and get their
            nutritional information.
          </Text>
          <Text style={{width: '80%', textAlign: 'center', marginBottom: 30}}>
            This app will open up in the camera screen. All you need to do is
            take a picture of the item you want to identify, say "Use" and we'll
            do the rest. Wait for the app to analyse, click on the match and
            we'll tell you what the food item is. For more information on the
            item click the banner at the bottom with the food item.
          </Text>

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
            onPress={() => {
              setNum(2);
            }}>
            <Text style={{color: 'white', fontWeight: '700', fontSize: 17}}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
      {/* ONBOARDING TWO  */}
      {num === 2 ? (
        <View
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../assets/fries.png')}
            style={{width: 300, height: 300}}
          />
          <Text
            style={{
              width: '80%',
              textAlign: 'center',
              fontWeight: '600',
              fontSize: 18,
              marginBottom: 20,
            }}>
            There is a dedicated chat forum for you to ask questions about all
            food related topics. Feel free to Share.
          </Text>
          <Text style={{width: '80%', textAlign: 'center', marginBottom: 30}}>
            To get to the chat, all you need to do is click the top left icon on
            the Camera screen. Once you click that, there will be a drop down
            with an additional two buttons. click the one with the chat icon.
          </Text>

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
            onPress={() => {
              setNum(3);
            }}>
            <Text style={{color: 'white', fontWeight: '700', fontSize: 17}}>
              Next
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 180,
              height: 50,
              // backgroundColor: '#2FA05E',
              borderRadius: 10,
              alignSelf: 'center',
              marginBottom: 20,
            }}
            onPress={() => {
              setNum(1);
            }}>
            <Text style={{color: 'black', fontWeight: '700', fontSize: 17}}>
              Previous
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
      {/* ONBOARDING THREE  */}
      {num === 3 ? (
        <View
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../assets/doughnut.png')}
            style={{width: 300, height: 300}}
          />
          <Text
            style={{
              width: '80%',
              textAlign: 'center',
              fontWeight: '600',
              fontSize: 18,
              marginBottom: 20,
            }}>
            You are able to update your profile picture and view your account
            details in your Profile screen.
          </Text>
          <Text style={{width: '80%', textAlign: 'center', marginBottom: 30}}>
            To get to the profile screen, all you need to do is click the top
            left icon on the Camera screen. Once you click that, there will be a
            drop down with an additional two buttons. click the one with the
            profile icon.
          </Text>

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
            onPress={() => {
              setNum(4);
            }}>
            <Text style={{color: 'white', fontWeight: '700', fontSize: 17}}>
              Next
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 180,
              height: 50,
              // backgroundColor: '#2FA05E',
              borderRadius: 10,
              alignSelf: 'center',
              marginBottom: 20,
            }}
            onPress={() => {
              setNum(2);
            }}>
            <Text style={{color: 'black', fontWeight: '700', fontSize: 17}}>
              Previous
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}

      {/* WELCOME  */}
      {num === 4 ? (
        <View
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../assets/background.png')}
            style={{width: '100%', height: '100%', position: 'absolute'}}
          />
          <Text
            style={{
              width: '80%',
              textAlign: 'center',
              fontWeight: '800',
              fontSize: 30,
              marginBottom: 20,
              color: 'white',
            }}>
            Welcome to Identify
          </Text>

          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 180,
              height: 50,
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: 20,
              marginBottom: 20,
              position: 'absolute',
              bottom: 50,
            }}
            onPress={() => {
              navigation.navigate('CameraScreen');
            }}>
            <Text style={{color: 'white', fontWeight: '700', fontSize: 22}}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
      {/* PAGINATION */}
      {num !== 4 ? (
        <View
          style={{
            width: '60%',
            height: 50,
            // backgroundColor: 'red',
            position: 'absolute',
            bottom: 50,
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            alignSelf: 'center',
            flexDirection: 'row',
          }}>
          {/* FIRST DOT  */}
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: '#2FA05E',
              borderRadius: 100,
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            {num === 1 ? (
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: 'white',
                  borderRadius: 100,
                }}></View>
            ) : null}
          </View>
          {/* SECOND DOT  */}
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: '#2FA05E',
              borderRadius: 100,
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            {num === 2 ? (
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: 'white',
                  borderRadius: 100,
                }}></View>
            ) : null}
          </View>
          {/* THIRD DOT  */}
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: '#2FA05E',
              borderRadius: 100,
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            {num === 3 ? (
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: 'white',
                  borderRadius: 100,
                }}></View>
            ) : null}
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
