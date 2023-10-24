import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const MoreInfo = ({route}) => {
  // const {type} = route.params;

  const data = [
    {key: '1', backgroundColor: 'white', type: 'tree'},
    {key: '2', backgroundColor: 'white', type: 'flower'},
    {key: '3', backgroundColor: 'white', type: 'tree'},
    {key: '4', backgroundColor: 'white', type: 'flower'},
    {key: '5', backgroundColor: 'white', type: 'tree'},
    {key: '6', backgroundColor: 'white', type: 'flower'},
    {key: '7', backgroundColor: 'white', type: 'tree'},
    {key: '8', backgroundColor: 'white', type: 'flower'},
    {key: '9', backgroundColor: 'white', type: 'tree'},
    {key: '10', backgroundColor: 'white', type: 'flower'},
    {key: '11', backgroundColor: 'white', type: 'tree'},
    {key: '12', backgroundColor: 'white', type: 'flower'},
    // Add more data items as needed
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{
        width: '30%', // Set width to 33.33% to fit 3 items in a row
        height: 120,
        backgroundColor: item.backgroundColor,
        margin: '1.7%', // Add spacing between rows
        borderRadius: 20,
        padding: 5,
      }}
      onPress={() => navigation.navigate('MoreInfo', {type: item.type})}>
      <Image
        source={require('../assets/test.png')}
        style={{width: '100%', height: '100%', borderRadius: 15}}
      />
    </TouchableOpacity>
  );

  // console.log(type);
  return (
    <SafeAreaView
      style={{
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          width: '95%',
          height: 50,
          // backgroundColor: 'blue',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Image
          source={require('../assets/return.png')}
          style={{width: 30, height: 30, position: 'absolute', left: 0}}
        />
        <Text
          style={{
            // position: 'absolute',
            alignSelf: 'center',
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '600',
          }}>
          Matches
        </Text>
      </View>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <View
          style={{
            width: '95%',
            height: 400,
            backgroundColor: 'grey',
            alignSelf: 'center',
            marginTop: 10,
            borderRadius: 30,
          }}></View>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            marginTop: 20,
            fontWeight: '700',
          }}>
          Match Name
        </Text>

        <Text
          style={{
            fontSize: 17,
            textAlign: 'left',
            marginTop: 20,
            fontWeight: '500',
            marginLeft: 10,
            color: '#7D7D7D',
          }}>
          Other Images
        </Text>

        <FlatList
          style={{
            width: '100%',
            height: '85%',
            // backgroundColor: 'red',
          }}
          data={data}
          renderItem={renderItem}
          numColumns={3} // Set the number of columns to 3 for the grid
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoreInfo;

const styles = StyleSheet.create({});
