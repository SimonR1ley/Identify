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
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Matches = ({route}) => {
  const {imageSource, apiResponse} = route.params;

  const navigation = useNavigation();

  const [responseData, setResponseData] = useState();
  const [loading, setLoading] = useState(false);

  console.log('Matches API Response', apiResponse);

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
        `https://api.edamam.com/api/food-database/v2/parser?ingr=${apiResponse}&app_id=a39268e3&app_key=cf58286a939f09ad9438b5f10088665e`,

        // 'https://api.edamam.com/api/food-database/v2/parser?ingr=breakfastburrito&app_id=a39268e3&app_key=cf58286a939f09ad9438b5f10088665e',
      )
      .then(response => {
        // Handle the recipe data here
        // console.log('API Response', response.data.hints[0].food);
        console.log('API Response', response.data);
        // setResponseData(response);
        setLoading(false);
        if (!loading && response != undefined) {
          navigation.navigate('Match', {
            data: response.data.hints[0].food,
            img: imageSource,
            name: name,
          });
        }
        if (response === 'undefined') {
        }
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
        setLoading(false);
        Alert.alert(
          'No Data 🍔',
          'There is no data matching this food type.',
          [
            {
              text: 'OK',
              onPress: () => console.log('OK button pressed'),
            },
          ],
          {
            cancelable: true, // Whether the alert can be dismissed by tapping outside it
            onDismiss: () => console.log('Alert was dismissed'),
            type: 'info', // You can use 'info', 'error', or 'warning' for different alert types
            style: 'default', // You can customize the style of the alert
          },
        );
      });
  };

  // const renderItem = ({item}) => (
  //   <View
  //     style={{
  //       width: 414,
  //       height: 80,
  //     }}>
  //     <TouchableOpacity
  //       style={{
  //         width: '85%',
  //         height: '100%',
  //         backgroundColor: item.backgroundColor,
  //         // backgroundColor: 'rgba(60, 60, 60, 0.4)',
  //         borderRadius: 20,
  //         padding: 20,
  //         alignSelf: 'center',
  //         // marginRight: 20,
  //         // marginLeft: 30,
  //         display: 'flex',
  //         alignItems: 'center',
  //         justifyContent: 'center',
  //         flexDirection: 'row',
  //         // borderBottomWidth: 0.3,
  //         // borderBottomColor: 'white',
  //         // borderStyle: 'solid',
  //       }}
  //       onPress={() => UseImage(item.name)}>
  //       <Text
  //         style={{
  //           // position: 'absolute',
  //           // bottom: 10,
  //           // right: 10,
  //           color: 'white',
  //           fontWeight: '600',
  //           fontSize: 22,
  //         }}>
  //         {item.name}
  //       </Text>
  //       {/* <Text
  //         style={{
  //           // position: 'absolute',
  //           // bottom: 10,
  //           // right: 10,
  //           color: 'white',
  //           fontWeight: '600',
  //           fontSize: 16,
  //         }}>
  //         0.7%
  //       </Text> */}
  //     </TouchableOpacity>
  //   </View>
  // );

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
                <View
                  style={{
                    width: 414,
                    height: 80,
                  }}>
                  <TouchableOpacity
                    style={{
                      width: '85%',
                      height: '100%',
                      backgroundColor: '#207747',
                      // backgroundColor: 'rgba(60, 60, 60, 0.4)',
                      borderRadius: 20,
                      padding: 20,
                      alignSelf: 'center',
                      // marginRight: 20,
                      // marginLeft: 30,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'row',
                      // borderBottomWidth: 0.3,
                      // borderBottomColor: 'white',
                      // borderStyle: 'solid',
                    }}
                    onPress={() => UseImage(apiResponse)}>
                    <Text
                      style={{
                        // position: 'absolute',
                        // bottom: 10,
                        // right: 10,
                        color: 'white',
                        fontWeight: '600',
                        fontSize: 22,
                      }}>
                      {apiResponse}
                    </Text>
                    {/* <Text
                      style={{
                        // position: 'absolute',
                        // bottom: 10,
                        // right: 10,
                        color: 'white',
                        fontWeight: '600',
                        fontSize: 16,
                      }}>
                      0.7%
                    </Text> */}
                  </TouchableOpacity>
                </View>
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
          }}>
          <Image
            source={require('../assets/background.png')}
            style={{width: '100%', height: '100%', position: 'absolute'}}
          />
          <Text style={{color: 'white', textAlign: 'center', fontSize: 23}}>
            Loading
          </Text>
          <ActivityIndicator animating={loading} size={40} color={'white'} />
        </View>
      )}
    </>
  );
};

export default Matches;

const styles = StyleSheet.create({});
