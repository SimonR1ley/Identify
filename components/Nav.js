import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Nav = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 80,
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 0,
      }}>
      <Text>Nav</Text>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({});
