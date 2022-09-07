import { View, Text, SafeAreaView, Image, Button } from 'react-native';
import React from 'react';

const Quiz1 = ({ navigation }) => {
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
            marginTop: 97,
          }}
        >
          <Image source={require('../../assets/Onboarding/quiz_1.png')} />
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
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
                Nếu con bạn chỉ vào một điểm trong phòng, con bạn có nhìn theo
                không?
              </Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 14,
                  lineHeight: 17.07,
                  fontFamily: 'Montserrat_Regular',
                }}
              >
                (Ví dụ, nếu bạn chỉ vào đồ chơi hay con vật, con bạn có nhìn vào
                đồ chơi hay con vật đó không?)
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
              onPress={() => navigation.push('Quiz2')}
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
              onPress={() => navigation.push('Quiz2')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Quiz1;
