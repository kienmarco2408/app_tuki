import {
  View,
  Text,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const OnBoarding_2 = () => {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    NunitoSans_Light: require('../../../assets/Nunito_Sans/NunitoSans-Light.ttf'),
    NunitoSans_SemiBold: require('../../../assets/Nunito_Sans/NunitoSans-SemiBold.ttf'),
    NunitoSans_ExtraBold: require('../../../assets/Nunito_Sans/NunitoSans-ExtraBold.ttf'),
    NunitoSans_Black: require('../../../assets/Nunito_Sans/NunitoSans-Black.ttf'),
    NunitoSans_Regular: require('../../../assets/Nunito_Sans/NunitoSans-Regular.ttf'),
    Montserrat_Light: require('../../../assets/Montserrat/Montserrat-Light.ttf'),
    Montserrat_SemiBold: require('../../../assets/Montserrat/Montserrat-Medium.ttf'),
    Montserrat_Bold: require('../../../assets/Montserrat/Montserrat-Bold.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
      <View style={{ width: 117, height: 50, marginLeft: 150, marginTop: 40 }}>
        <Text
          style={{
            fontFamily: 'NunitoSans_Black',
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
            fontFamily: 'NunitoSans_Regular',
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
          width: 299,
          height: 362,
          borderWidth: 1,
          marginTop: 20,
          borderRadius: 21,
          marginLeft: 55,
          borderColor: '#99C0E9',
        }}
      >
        <View
          style={{
            borderWidth: 2,
            borderColor: '#E40606',
            height: 44,
            width: 44,
            flexDirection: 'row',
            marginLeft: 'auto',
            marginRight: 7,
            marginTop: 6,
            borderRadius: 100,
            shadowOpacity: 0.25,
            shadowRadius: 3,
          }}
        >
          <Ionicons
            size={40}
            name="refresh-circle-outline"
            style={{
              alignSelf: 'center',
              marginLeft: 1.5,
              marginBottom: 3,
              color: 'grey',
            }}
          />
        </View>

        <View>
          <Image
            source={require('../../../assets/Onboarding/img_2.png')}
            style={{ marginLeft: 72, bottom: 35 }}
          />
        </View>
        <View style={{ width: 254, height: 46, marginLeft: 23 }}>
          <Text style={{ textAlign: 'center', fontFamily: 'Montserrat_Bold' }}>
            Bạn có bao giờ tự hỏi liệu con bạn có bị điếc hay không?
          </Text>
        </View>
      </View>
      <View style={{ width: 299, height: 71, marginLeft: 55, marginTop: 23 }}>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Montserrat_Light',
            lineHeight: 17,
            fontSize: 14,
          }}
        >
          Bạn có thể chọn Có hoặc Không để trả lời câu hỏi. Tuy nhiên hãy suy
          nghĩ kỹ trước khi trả lời, nếu trong trường hợp muốn quay lại trả lời
          câu hỏi trước đó, bấm vào icon trên.
        </Text>
      </View>
      <View
        style={{
          width: 299,
          height: 48,
          backgroundColor: '#447DB9',
          borderRadius: 13,
          padding: 5,
          marginTop: 80,
          marginLeft: 55,
        }}
      >
        <Button
          title="Đi Tiếp"
          color="white"
          onPress={() => navigation.push('OnBoarding_3')}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding_2;
