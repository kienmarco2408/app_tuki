import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import PopupInfor from './PopupInfor';

const Test = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <View style={{ width: 117, height: 50, marginLeft: 150, marginTop: 40 }}>
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
        <PopupInfor visible={visible}>
          <Text
            style={{
              fontFamily: 'Montserrat_Bold',
              color: '#FFFFFF',
              textAlign: 'center',
              marginTop: 19,
              letterSpacing: '1.2%',
              lineHeight: 19.5,
            }}
          >
            Về công cụ sàng lọc tự kỷ
          </Text>
          <View
            style={{
              width: 292,
              height: 461,
              alignItems: 'center',
              marginLeft: 15,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontFamily: 'Montserrat_Regular',
                lineHeight: 16,
                marginBottom: 16,
                fontSize: 14,
                color: 'white',
              }}
            >
              M-CHAT R là viết tắt của (Modified Checklist for Autism Toddlers),
              đây là công cụ sàng lọc cho trẻ em dưới 3 tuổi nhằm phát hiện ra
              những nguy cơ có rối loạn phát triển (tự kỷ) do cha mẹ tự điền.
            </Text>
            <Text
              style={{
                fontFamily: 'Montserrat_Regular',
                lineHeight: 16,
                marginBottom: 16,
                fontSize: 14,
                color: 'white',
              }}
            >
              Công cụ đặc biệt này được tiến sĩ Diana Robins phát triển, và được
              dịch lại bở Thạc sĩ Nguyễn Thị Nha Trang dưới sự đồng ý của Tiến
              sĩ Robins.
            </Text>
            <Text
              style={{
                fontFamily: 'Montserrat_Regular',
                lineHeight: 16,
                marginBottom: 16,
                fontSize: 14,
                color: 'white',
              }}
            >
              Đây chỉ là công cụ sàng lọc nhanh để tìm thấy các dấu hiệu đỏ
              trong sự phát triển của con. Bên cạnh đó, không phải trẻ em có kết
              quả sàng lọc có điểm nguy cơ cao thì đều là trẻ tự kỷ.
            </Text>
            <Text
              style={{
                fontFamily: 'Montserrat_Regular',
                lineHeight: 16,
                marginBottom: 16,
                fontSize: 14,
                color: 'white',
              }}
            >
              Do vậy, khi phụ huynh sử dụng công cụ M-CHAT-R chỉ để để đánh giá.
              Còn để có kết quả chẩn đoán chính xác thì phụ huynh nên đưa con
              đến các trung tâm để xác định lại một lần nữa.
            </Text>
            <Text
              style={{
                fontFamily: 'Montserrat_Regular',
                lineHeight: 16,
                marginBottom: 16,
                fontSize: 14,
                color: 'white',
              }}
            >
              Nếu kết quả có nguy cơ thấp và độ tuổi hiện tại của con nhỏ hơn 24
              tháng thì sau sinh nhật 2 tuổi của con hãy làm lại lần nữa.
            </Text>
          </View>
        </PopupInfor>
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
      <View
        style={{
          width: 299,
          height: 48,
          backgroundColor: '#447DB9',
          borderRadius: 13,
          padding: 5,
          marginTop: 95,
          marginLeft: 55,
        }}
      >
        <Button
          title="Kiểm Tra"
          color="white"
          //   onPress={() => navigation.push('OnBoarding_3')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default Test;
