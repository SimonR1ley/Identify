import {StyleSheet, Text, SafeAreaView, View, ScrollView} from 'react-native';
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
              height: 450,
              backgroundColor: 'red',
              borderRadius: 30,
              alignSelf: 'center',
            }}></View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              marginTop: 20,
              alignSelf: 'center',
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
                shadowColor: '#000000',
                shadowOffset: {
                  width: 2,
                  height: 2,
                },
                shadowOpacity: 1,
                shadowRadius: 3,
                elevation: 2,
              }}></View>
            <View
              style={{
                width: '68%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                // backgroundColor: 'blue',
                padding: 10,
              }}>
              <Text style={{fontWeight: '500', fontSize: 18}}>Hello</Text>
              <Text style={{fontWeight: '500', fontSize: 15}}>Description</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Match;

const styles = StyleSheet.create({});
