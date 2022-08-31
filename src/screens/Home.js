import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import Test from '../screensComponent/Test';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
      <View>
        <Test />
      </View>
    </SafeAreaView>
  );
};

export default Home;
