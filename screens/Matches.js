import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Matches = ({route}) => {
  const {imageSource} = route.params;

  const navigation = useNavigation();

  const [responseData, setResponseData] = useState();
  const [loading, setLoading] = useState(false);

  console.log(imageSource);

  const data = [
    {key: '1', backgroundColor: '#207747', name: 'Pizza'},
    {key: '2', backgroundColor: '#207747', name: 'Fries'},
    {key: '3', backgroundColor: '#207747', name: 'Fruit Salad'},
    {key: '4', backgroundColor: '#207747', name: 'Burger'},
    {key: '5', backgroundColor: '#207747', name: 'Steak'},
    {key: '6', backgroundColor: '#207747', name: 'Eggs'},
  ];

  let fries = 'fries';

  const [foodName, setFoodName] = useState('');

  const UseImage = name => {
    console.log('Using');
    setLoading(true);
    axios
      .get(
        'https://api.edamam.com/api/food-database/v2/parser?ingr=' +
          name +
          '&app_id=a39268e3&app_key=cf58286a939f09ad9438b5f10088665e',
        // `https://api.edamam.com/api/food-database/v2/parser?ingr=pizza&app_id=${APP_ID}&app_key=${API_KEY}`,
      )
      .then(response => {
        // Handle the recipe data here
        console.log('API Response', response.data.hints[0].food);
        // setResponseData(response);
        setLoading(false);
        if (!loading) {
          navigation.navigate('Match', {
            data: response.data.hints[0].food,
            img: imageSource,
            name: name,
          });
        }
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  };

  const renderItem = ({item}) => (
    <View
      style={{
        width: 414,
        height: 80,
      }}>
      <TouchableOpacity
        style={{
          width: '85%',
          height: '100%',
          backgroundColor: item.backgroundColor,
          // backgroundColor: 'rgba(60, 60, 60, 0.4)',
          borderRadius: 20,
          padding: 20,
          alignSelf: 'center',
          // marginRight: 20,
          // marginLeft: 30,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          // borderBottomWidth: 0.3,
          // borderBottomColor: 'white',
          // borderStyle: 'solid',
        }}
        onPress={() => UseImage(item.name)}>
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
    </View>
  );

  // console.log(type);
  return (
    <>
      {!loading ? (
        <View
          style={{
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            backgroundColor: '#1C1C1C',
          }}>
          <>
            <TouchableOpacity
              style={{
                width: '95%',
                height: 90,
                // backgroundColor: 'blue',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                flexDirection: 'row',
                position: 'absolute',
                zIndex: 1,
                // top: 50,
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <Image
                source={require('../assets/return.png')}
                style={{width: 30, height: 30, position: 'absolute', left: 0}}
              />
              <Text
                style={{
                  // position: 'absolute',
                  // alignSelf: 'center',
                  // textAlign: 'center',
                  // backgroundColor: 'red',
                  fontSize: 23,
                  fontWeight: '600',
                  color: 'white',
                }}>
                Matches
              </Text>
            </TouchableOpacity>
            <View style={{width: '100%', height: '100%'}}>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#207747',
                  alignSelf: 'center',
                  marginTop: 10,
                  marginBottom: 10,
                  borderRadius: 30,
                  // padding: 5,
                }}>
                <Image
                  source={{uri: imageSource}}
                  style={{width: '100%', height: '100%', borderRadius: 25}}
                />
              </View>
              <View
                style={{
                  width: '100%',
                  // height: '40%',
                  // backgroundColor: 'red',
                  position: 'absolute',
                  zIndex: 2,
                  bottom: 53,
                }}>
                <FlatList
                  horizontal
                  pagingEnabled={true}
                  style={{
                    width: '100%',
                    // height: '65%',
                    // backgroundColor: 'red',
                  }}
                  data={data}
                  renderItem={renderItem}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
          </>
        </View>
      ) : (
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#2FA05E',
            flexDirection: 'column',
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 22,
              marginBottom: 10,
            }}>
            Loading
          </Text>
          <ActivityIndicator
            animating={loading}
            size={'large'}
            color={'white'}
          />
        </View>
      )}
    </>
  );
};

export default Matches;

const styles = StyleSheet.create({});
