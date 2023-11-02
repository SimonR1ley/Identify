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
import {useNavigation} from '@react-navigation/native';

const Matches = ({route}) => {
  const {imageSource} = route.params;

  const navigation = useNavigation();

  console.log(imageSource);

  const data = [
    {key: '1', backgroundColor: '#207747', name: 'Pizza'},
    {key: '2', backgroundColor: '#207747', name: 'Fries'},
    {key: '3', backgroundColor: '#207747', name: 'Fruit Salad'},
    {key: '4', backgroundColor: '#207747', name: 'Burger'},
    {key: '5', backgroundColor: '#207747', name: 'Steak'},
    {key: '6', backgroundColor: '#207747', name: 'Eggs'},
    // {key: '7', backgroundColor: '#207747', name: 'Fish'},
    // {key: '8', backgroundColor: '#207747', name: 'Pork Chop'},
    // {key: '9', backgroundColor: '#207747', name: 'Carrot'},
    // {key: '10', backgroundColor: '#207747', name: 'Potato'},
    // {key: '11', backgroundColor: '#207747', name: 'Green Bean'},
    // {key: '12', backgroundColor: '#207747', name: 'Avocardo'},
    // Add more data items as needed
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{
        width: 380,
        height: 60,
        backgroundColor: item.backgroundColor,
        borderRadius: 20,
        padding: 20,
        alignSelf: 'center',
        margin: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        // borderBottomWidth: 0.3,
        // borderBottomColor: 'white',
        // borderStyle: 'solid',
      }}
      onPress={() => navigation.navigate('MoreInfo', {type: item.name})}>
      <Text
        style={{
          // position: 'absolute',
          // bottom: 10,
          // right: 10,
          color: 'white',
          fontWeight: '600',
          fontSize: 16,
        }}>
        {item.name}
      </Text>
      <Text
        style={{
          // position: 'absolute',
          // bottom: 10,
          // right: 10,
          color: 'white',
          fontWeight: '600',
          fontSize: 16,
        }}>
        0.7%
      </Text>
    </TouchableOpacity>
  );

  // console.log(type);
  return (
    <SafeAreaView
      style={{
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#1C1C1C',
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
          marginBottom: 10,
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
            fontSize: 23,
            fontWeight: '600',
            color: 'white',
          }}>
          Matches
        </Text>
      </View>
      <View style={{width: '100%', height: '100%'}}>
        <View
          style={{
            width: 380,
            height: 380,
            backgroundColor: '#207747',
            alignSelf: 'center',
            marginTop: 10,
            marginBottom: 10,
            borderRadius: 30,
            padding: 5,
          }}>
          <Image
            source={{uri: imageSource}}
            style={{width: '100%', height: '100%', borderRadius: 25}}
          />
        </View>
        {/* <View
          style={{
            marginTop: 20,
            marginBottom: 20,
            fontWeight: '700',
            color: 'white',
            height: 60,
            width: '90%',
            borderBottomWidth: 1,
            borderBottomColor: 'white',
            borderStyle: 'solid',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              fontWeight: '700',
              color: 'white',
              // backgroundColor: 'pink',
              borderBottomWidth: 3,
              borderBottomColor: 'white',
              borderStyle: 'solid',
            }}>
            Identified Items
          </Text>
        </View> */}
        <View
          style={{
            width: '100%',
            height: '40%',
            // backgroundColor: 'red',
          }}>
          <FlatList
            style={{
              width: '100%',
              height: '65%',
              // backgroundColor: 'red',
            }}
            data={data}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Matches;

const styles = StyleSheet.create({});
