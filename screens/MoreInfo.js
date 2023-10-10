import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';

const MoreInfo = ({route}) => {
  const {type} = route.params;

  console.log(type);
  return (
    <SafeAreaView
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#207747',
      }}>
      <View
        style={{
          width: '100%',
          height: '100%',
          //   backgroundColor: 'green',
          display: 'flex',
          alignItems: 'center',
        }}>
        {/* <Text>{type}</Text> */}
        <ScrollView style={{width: '100%'}}>
          <View
            style={{
              width: '100%',
              height: 450,
              //   backgroundColor: 'red',
              alignSelf: 'center',
              bottom: -35,
              zIndex: 2,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Image
              source={require('../assets/flower.png')}
              style={{
                width: '90%',
                height: '100%',
                left: -130,
                borderRadius: 30,
                position: 'absolute',
                bottom: 0,
              }}
            />
            <View
              style={{
                width: '50%',
                height: '100%',
                // backgroundColor: 'red',
                position: 'absolute',
                right: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 50,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  textAlign: 'center',
                  color: 'white',
                }}>
                Size: Large
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  textAlign: 'center',
                  color: 'white',
                }}>
                Location: Everywhere
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  textAlign: 'center',
                  color: 'white',
                }}>
                Oak Tree
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                height: 50,
                // backgroundColor: 'red',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 28,
                  fontWeight: '700',
                  textAlign: 'center',
                  color: 'white',
                }}>
                Oak Tree
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '95%',
              height: 'auto',
              backgroundColor: 'white',
              alignSelf: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 40,
              padding: 20,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                // marginTop: 20,
                alignSelf: 'center',
              }}>
              About
            </Text>

            <Text
              style={{
                fontSize: 16,
                // fontWeight: '600',
                marginTop: 20,
                alignSelf: 'center',
              }}>
              There are approximately 600 different species of oak trees found
              around the world. Some of the most common oak species...
            </Text>

            <Image
              source={require('../assets/test.png')}
              style={{
                width: '100%',
                height: 350,
                borderRadius: 20,
                marginTop: 20,
              }}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MoreInfo;

const styles = StyleSheet.create({});
