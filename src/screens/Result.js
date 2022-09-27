import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import { Button, NativeBaseProvider } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const Result = () => {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    NunitoSans_Regular: require('../../assets/Nunito_Sans/NunitoSans-Regular.ttf'),
    NunitoSans_SemiBold: require('../../assets/Nunito_Sans/NunitoSans-SemiBold.ttf'),
    NunitoSans_ExtraBold: require('../../assets/Nunito_Sans/NunitoSans-ExtraBold.ttf'),
    NunitoSans_Black: require('../../assets/Nunito_Sans/NunitoSans-Black.ttf'),
    Montserrat_Light: require('../../assets/Montserrat/Montserrat-Light.ttf'),
    Montserrat_SemiBold: require('../../assets/Montserrat/Montserrat-Medium.ttf'),
    Montserrat_Bold: require('../../assets/Montserrat/Montserrat-Bold.ttf'),
    Montserrat_BoldItalic: require('../../assets/Montserrat/Montserrat-BoldItalic.ttf'),
    Montserrat_LightItalic: require('../../assets/Montserrat/Montserrat-LightItalic.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%', flex: 1 }}>
      <View>
        <View
          style={{
            width: '100%',
            height: 96,
            backgroundColor: '#F5B870',
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
        >
          <View style={{ marginLeft: 20, marginTop: 40, flexDirection: 'row' }}>
            <View>
              <AntDesign
                name="arrowleft"
                size={24}
                color="white"
                onPress={() => navigation.goBack()}
              />
            </View>
            <View style={{ marginLeft: 16 }}>
              <Text
                style={{
                  fontFamily: 'Montserrat_Bold',
                  fontSize: 18,
                  lineHeight: 21.94,
                  color: 'white',
                }}
              >
                Kết quả M-CHART
              </Text>
            </View>
          </View>
        </View>
        <ScrollView stickyHeaderHiddenOnScroll>
          <View style={{ marginHorizontal: '16%', paddingBottom: '27%' }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 31,
              }}
            >
              <Image source={require('../../assets/Onboarding/result.png')} />
            </View>
            <View style={{ height: 51, marginTop: 33 }}>
              <Text style={{ fontFamily: 'Montserrat_Regular' }}>
                Số điểm đạt được: 9
              </Text>
              <Text style={{ fontFamily: 'Montserrat_Bold' }}>
                Kết quả: Nguy cơ cao
              </Text>
            </View>
            <View
              style={{
                marginTop: 5,
                height: 140,
                width: 299,
              }}
            >
              <Text
                style={{ fontFamily: 'Montserrat_Regular', lineHeight: 17.07 }}
              >
                Kết quả sàng lọc cho thấy trẻ có nguy cơ tự kỷ. Bạn nên đến các
                cơ sở uy tín về đánh giá và chẩn đoán tự kỷ để xác định chính
                xác về tình trạng của con mình. Bạn có thể tìm thấy tên và địa
                chỉ của các cơ sở trong:
                <Text
                  style={{
                    color: 'red',
                    fontFamily: 'Montserrat_Bold',
                    lineHeight: 17.07,
                  }}
                >
                  Danh sách một số cơ sở y tế tập huấn và hiện đang có thực hiện
                  đánh giấ, chẩn đoán tự kỷ.
                </Text>
              </Text>
            </View>
            <View style={{ height: 140, width: 299 }}>
              <Text
                style={{
                  fontFamily: 'Montserrat_LightItalic',
                  marginTop: 30,
                  lineHeight: 17.07,
                }}
              >
                Lưu ý: M-CHAT-R chỉ là bộ công cụ sàng lọc đẻ phát hiện trẻ có
                nguy cơ tự kỷ và các rối loạn phá triển khác.
              </Text>
              <Text
                style={{
                  marginTop: 30,
                  fontFamily: 'Montserrat_BoldItalic',
                }}
              >
                Kết quả M-CHAT-R không phải kết quả chẩn đoán!
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#447DB9',
                width: 299,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 13,
                marginTop: 50,
              }}
            >
              <Button
                colorScheme="#447DB9"
                onPress={() => navigation.navigate('Maps')}
              >
                Tìm kiếm nhà chuyển môn
              </Button>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                width: 299,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 13,
                marginTop: 15,
                borderColor: '#447DB9',
                borderWidth: 1,
              }}
            >
              <Button
                colorScheme="white"
                onPress={() => navigation.navigate('Home')}
              >
                Quay về trang đầu
              </Button>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Result />
    </NativeBaseProvider>
  );
};
