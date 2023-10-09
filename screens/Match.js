import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';

const Match = () => {
  return (
    <SafeAreaView style={{display: 'flex', alignItems: 'center'}}>
      <View
        style={{
          width: '100%',
          height: '100%',
          // backgroundColor: 'green',
          display: 'flex',
          alignItems: 'center',
        }}>
        <ScrollView style={{width: '100%'}}>
          <View
            style={{
              width: '95%',
              height: 350,
              backgroundColor: 'red',
              borderRadius: 30,
              alignSelf: 'center',
            }}>
            <Image
              source={require('../assets/test.png')}
              style={{width: '100%', height: '100%', borderRadius: 30}}
            />
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              marginTop: 20,
              alignSelf: 'flex-start',
              marginLeft: '5%',
            }}>
            Matches
          </Text>

          {/* Search Results  */}
          <View
            style={{
              width: '95%',
              height: 110,
              // backgroundColor: 'green',
              alignSelf: 'center',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 30,
            }}>
            <View
              style={{
                width: '30%',
                height: '100%',
                backgroundColor: 'red',
                borderRadius: 20,
                // shadowColor: '#000000',
                // shadowOffset: {
                //   width: 2,
                //   height: 2,
                // },
                // shadowOpacity: 1,
                // shadowRadius: 3,
                // elevation: 2,
              }}>
              <Image
                source={require('../assets/test.png')}
                style={{width: '100%', height: '100%', borderRadius: 20}}
              />
            </View>
            <View
              style={{
                width: '68%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                // backgroundColor: 'blue',
                padding: 5,
              }}>
              <Text style={{fontWeight: '500', fontSize: 18, marginBottom: 5}}>
                Oak Tree
              </Text>
              <Text style={{fontWeight: '500', fontSize: 15}}>
                There are approximately 600 different species of oak trees found
                around the world. Some of the most common oak species...
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Match;

const styles = StyleSheet.create({});
