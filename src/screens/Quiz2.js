import { View, Text, SafeAreaView, Image, Button } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const Quiz2 = ({ navigation }) => {
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
            alignItems: 'center',
          }}
        >
          <View style={{ marginLeft: 'auto', marginRight: 36, marginTop: 20 }}>
            <Ionicons
              size={42}
              name="refresh-circle-outline"
              style={{
                alignSelf: 'center',
                marginLeft: 1.5,
                marginBottom: 3,
                color: 'grey',
              }}
            />
          </View>
          <View style={{ bottom: 40 }}>
            <Image source={require('../../assets/Onboarding/img_2.png')} />
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 3,
          }}
        >
          <View style={{ width: 299, height: 109 }}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 14,
                  lineHeight: 17.07,
                  fontFamily: 'Montserrat_Bold',
                }}
              >
                Bạn có bao giờ tự hỏi liệu con bạn có bị điếc hay không?
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <View
            style={{
              width: 144,
              height: 48,
              backgroundColor: 'white',
              borderRadius: 13,
              marginTop: 86,
              padding: 5,
              borderColor: '#447DB9',
              borderWidth: 1,
              marginLeft: 37,
            }}
          >
            <Button
              title="Có"
              color="#447DB9"
              onPress={() => navigation.navigate('TestDone')}
            />
          </View>
          <View
            style={{
              width: 144,
              height: 48,
              backgroundColor: 'white',
              borderRadius: 13,
              marginTop: 86,
              padding: 5,
              marginRight: 37,
              borderColor: '#447DB9',
              borderWidth: 1,
            }}
          >
            <Button
              title="Không"
              color="#447DB9"
              onPress={() => navigation.navigate('TestDone')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Quiz2;
