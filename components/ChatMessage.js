/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {getCurrentUser} from '../firebase/firebaseAuth';

const ChatMessage = ({data, viewProfile}) => {
  const user = getCurrentUser();

  console.log(data);

  return (
    <>
      {data.userId !== user.uid ? (
        <View
          style={{
            maxWidth: '60%',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            borderRadius: 20,
            flexDirection: 'row',
            alignSelf: 'flex-start',
            gap: 10,
            margin: 10,
            // backgroundColor: 'blue',
          }}>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
            }}
            onPress={() => {
              viewProfile(data.profileImage);
            }}>
            <Image
              source={{uri: data.profileImage}}
              style={{width: '100%', height: '100%', borderRadius: 20}}
            />
          </TouchableOpacity>
          <View
            style={{
              maxWidth: '80%',
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              padding: 10,
            }}>
            <Text
              style={{
                color: 'black',
                alignSelf: 'flex-start',
                marginBottom: 10,
                fontWeight: '600',
              }}>
              {/* Username */}
              {data.username}
            </Text>
            <Text
              style={{
                color: 'black',
                flexWrap: 'wrap',
                width: '100%',
              }}>
              {data.message}
            </Text>
          </View>
        </View>
      ) : (
        <View
          style={{
            maxWidth: '60%',
            // height: 40,
            // backgroundColor: 'green',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            borderRadius: 20,
            flexDirection: 'row',
            margin: 10,
            alignSelf: 'flex-end',
            gap: 10,
          }}>
          <View
            style={{
              maxWidth: '80%',
              backgroundColor: '#207747',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              padding: 10,
            }}>
            <Text
              style={{
                color: 'white',
                flexWrap: 'wrap',
                // backgroundColor: 'red',
                width: '100%',
              }}>
              {data.message}
            </Text>
          </View>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
            }}>
            <Image
              source={{uri: data.profileImage}}
              style={{width: '100%', height: '100%', borderRadius: 20}}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default ChatMessage;

const styles = StyleSheet.create({});
