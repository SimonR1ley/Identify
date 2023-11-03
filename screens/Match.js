import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Match = ({route}) => {
  const {data, img, name} = route.params;

  console.log('From Match Screen', data.nutrients);

  const navigation = useNavigation();

  console.log(img);

  return (
    <SafeAreaView
      style={{
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#1C1C1C',
      }}>
      <TouchableOpacity
        style={{
          width: '95%',
          height: 50,
          // backgroundColor: 'blue',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          marginBottom: 10,
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
            alignSelf: 'center',
            textAlign: 'center',
            fontSize: 23,
            fontWeight: '600',
            color: 'white',
          }}>
          {name}
        </Text>
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{width: '100%', height: '100%'}}>
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
            source={{uri: img}}
            style={{width: '100%', height: '100%', borderRadius: 25}}
          />
        </View>
        <View
          style={{
            width: 380,
            height: '40%',
            // backgroundColor: 'red',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              // gap: 10,
              marginBottom: 15,
              backgroundColor: '#207747',
              padding: 10,
              borderRadius: 15,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: '500',
                fontSize: 18,
              }}>
              Total Carbohydrates
            </Text>
            <View
              style={{
                // width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'row',
                // backgroundColor: 'red',
                gap: 10,
              }}>
              <Image
                source={require('../assets/carbohydrates.png')}
                style={{width: 40, height: 40}}
              />
              <Text
                style={{
                  color: 'white',
                  fontWeight: '500',
                  fontSize: 23,
                }}>
                {parseFloat(data.nutrients.CHOCDF).toFixed()}
              </Text>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              gap: 10,
              marginBottom: 15,
              backgroundColor: '#207747',
              padding: 10,
              borderRadius: 15,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: '500',
                fontSize: 18,
              }}>
              Energy Content
            </Text>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'row',
                gap: 10,
              }}>
              <Image
                source={require('../assets/energy.png')}
                style={{width: 40, height: 40}}
              />
              <Text
                style={{
                  color: 'white',
                  fontWeight: '500',
                  fontSize: 23,
                }}>
                {parseFloat(data.nutrients.ENERC_KCAL).toFixed()}
              </Text>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              gap: 10,
              marginBottom: 15,
              backgroundColor: '#207747',
              padding: 10,
              borderRadius: 15,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: '500',
                fontSize: 18,
              }}>
              Total Fat
            </Text>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'row',
                gap: 10,
              }}>
              <Image
                source={require('../assets/fat.png')}
                style={{width: 40, height: 40}}
              />
              <Text
                style={{
                  color: 'white',
                  fontWeight: '500',
                  fontSize: 23,
                }}>
                {parseFloat(data.nutrients.FAT).toFixed()}
              </Text>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              gap: 10,
              marginBottom: 15,
              backgroundColor: '#207747',
              padding: 10,
              borderRadius: 15,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: '500',
                fontSize: 18,
              }}>
              Dietary Fiber
            </Text>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'row',
                gap: 10,
              }}>
              <Image
                source={require('../assets/fiber.png')}
                style={{width: 40, height: 40}}
              />
              <Text
                style={{
                  color: 'white',
                  fontWeight: '500',
                  fontSize: 23,
                }}>
                {parseFloat(data.nutrients.FIBTG).toFixed()}
              </Text>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              gap: 10,
              marginBottom: 15,
              backgroundColor: '#207747',
              padding: 10,
              borderRadius: 15,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: '500',
                fontSize: 18,
              }}>
              Protein Content
            </Text>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'row',
                gap: 10,
              }}>
              <Image
                source={require('../assets/protien.png')}
                style={{width: 40, height: 40}}
              />
              <Text
                style={{
                  color: 'white',
                  fontWeight: '500',
                  fontSize: 23,
                }}>
                {parseFloat(data.nutrients.PROCNT).toFixed()}
              </Text>
            </View>
          </View>

          {/* <FlatList
            style={{
              width: '100%',
              height: '65%',
              // backgroundColor: 'red',
            }}
            data={data}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Match;

const styles = StyleSheet.create({});
