import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Discover = () => {
  const data = [
    {key: '1', backgroundColor: 'white'},
    {key: '2', backgroundColor: 'white'},
    {key: '3', backgroundColor: 'white'},
    {key: '4', backgroundColor: 'white'},
    {key: '5', backgroundColor: 'white'},
    {key: '6', backgroundColor: 'white'},
    {key: '7', backgroundColor: 'white'},
    {key: '8', backgroundColor: 'white'},
    {key: '9', backgroundColor: 'white'},
    {key: '10', backgroundColor: 'white'},
    {key: '11', backgroundColor: 'white'},
    {key: '12', backgroundColor: 'white'},
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
      }}>
      <Image
        source={require('../assets/test.png')}
        style={{width: '100%', height: '100%', borderRadius: 15}}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: '#207747',
      }}>
      <Text
        style={{
          fontSize: 28,
          marginBottom: 20,
          fontWeight: '700',
          textAlign: 'center',
          color: 'white',
        }}>
        Discover
      </Text>
      <View
        style={{
          width: '100%',
          height: '100%',
          //   backgroundColor: 'green',
          //   position: 'absolute',
          bottom: 0,
        }}>
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
      </View>
    </SafeAreaView>
  );
};

export default Discover;

const styles = StyleSheet.create({});
