import { View, Text, Image, Button, SafeAreaView } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const TestDone = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
      <View>
        <View
          style={{ width: 117, height: 50, marginLeft: 150, marginTop: 40 }}
        >
          <Text
            style={{
              fontFamily: 'NunitoSans_ExtraBold',
              textTransform: 'uppercase',
              color: '#99C0E9',
              textAlign: 'center',
              fontSize: 26,
              lineHeight: 35.46,
            }}
          >
            a<Text style={{ color: '#447DB9' }}>kid</Text>ta
          </Text>
          <Text
            style={{
              color: '#99C0E9',
              fontFamily: 'NunitoSans_Light',
              fontSize: 14,
              lineHeight: 19.1,
              textAlign: 'center',
            }}
          >
            Cùng con khôn lớn
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            marginLeft: 'auto',
            marginRight: 70,
            marginTop: 29,
            marginBottom: 10,
          }}
        >
          <AntDesign
            size={25}
            name="infocirlceo"
            style={{ color: 'grey' }}
            onPress={() => setVisible(true)}
          />
        </View>

        <View>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Montserrat_Bold',
              fontSize: 22,
              color: '#447DB9',
            }}
          >
            Sàng lọc trẻ tự kỷ
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Montserrat_Bold',
              fontSize: 22,
              color: '#447DB9',
            }}
          >
            M-Chat
          </Text>
          <Image
            source={require('../../assets/Onboarding/img_1.png')}
            style={{ marginLeft: 135, marginTop: 41, width: 188, height: 195 }}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <View
            style={{
              width: 144,
              height: 48,
              backgroundColor: '#447DB9',
              borderRadius: 13,
              padding: 5,
              marginTop: 95,
              marginLeft: 37,
            }}
          >
            <Button
              title="Kiểm Tra"
              color="white"
              onPress={() => navigation.navigate('Result')}
            />
          </View>
          <View
            style={{
              width: 144,
              height: 48,
              backgroundColor: 'white',
              borderRadius: 13,
              marginTop: 95,
              padding: 5,
              marginRight: 37,
              borderColor: '#447DB9',
              borderWidth: 1,
            }}
          >
            <Button
              title="Làm lại"
              color="#447DB9"
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TestDone;
