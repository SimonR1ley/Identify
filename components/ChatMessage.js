import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getCurrentUser} from '../firebase/firebaseAuth';

const ChatMessage = ({data}) => {
  const user = getCurrentUser();
  return (
    <>
      {data.userId != user.uid ? (
        <View
          style={{
            maxWidth: '60%',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            borderRadius: 20,
            flexDirection: 'row',
            margin: 10,
            alignSelf: 'flex-start',
            gap: 10,
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
            }}></View>
          <View
            style={{
              maxWidth: '80%',
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              padding: 10,
            }}>
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
              borderRadius: 20,
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
            }}></View>
        </View>
      )}
    </>
  );
};

export default ChatMessage;

const styles = StyleSheet.create({});
