import { View, Text, Image } from 'react-native';
import React from 'react';
import { AntDesign, Feather } from '@expo/vector-icons';
import { markers } from '../data/mapData';

const Detail_Profes = ({ route, navigation }) => {
  const { title } = route.params;
  const { address } = route.params;
  const { image } = route.params;
  const { name } = route.params;
  const { strength } = route.params;
  const { number } = route.params;
  const { email } = route.params;
  const { university } = route.params;
  const { years } = route.params;
  return (
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
              Nhà chuyên môn
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: 155,
          height: 145,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: '30%',
          marginTop: 26,
        }}
      >
        <Image
          source={image}
          style={{
            width: 85,
            height: 85,
            borderRadius: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
        <View style={{ marginTop: 18 }}>
          <Text
            style={{
              fontFamily: 'Montserrat_Bold',
              fontSize: 15,
              lineHeight: 21,
              letterSpacing: -0.32,
            }}
          >
            {name}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'Montserrat_Regular',
              fontSize: 12,
              lineHeight: 21,
              letterSpacing: -0.32,
            }}
          >
            {university}
          </Text>
        </View>
      </View>
      <View
        style={{ flexDirection: 'row', marginHorizontal: '35%', marginTop: 15 }}
      >
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 60,
            backgroundColor: '#447DB9',
            marginRight: 34,
          }}
        >
          <Feather
            name="phone"
            size={24}
            color="white"
            style={{
              justifyContent: 'center',
              textAlign: 'center',
              marginTop: 8,
            }}
          />
        </View>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 60,
            backgroundColor: '#447DB9',
          }}
        >
          <Feather
            name="mail"
            size={24}
            color="white"
            style={{
              justifyContent: 'center',
              textAlign: 'center',
              marginTop: 8,
            }}
          />
        </View>
      </View>
      <View
        style={{
          width: 337,
          height: 249,
          marginTop: 39,
          marginHorizontal: '10%',
        }}
      >
        <Text
          style={{
            fontFamily: 'Montserrat_Bold',
            fontSize: 14,
            lineHeight: 21,
          }}
        >
          Giới thiệu:
        </Text>
        <Text
          style={{
            fontFamily: 'Montserrat_Light',
            fontSize: 12,
            marginTop: 10,
            lineHeight: 18,
          }}
        >
          <Text style={{ fontFamily: 'Montserrat_Bold' }}>Nơi công tác: </Text>{' '}
          {title}
        </Text>
        <Text
          style={{
            fontFamily: 'Montserrat_Light',
            fontSize: 12,
            marginTop: 10,
            lineHeight: 18,
          }}
        >
          <Text style={{ fontFamily: 'Montserrat_Bold' }}>
            Số năm công tác: {''}
          </Text>
          {years}
        </Text>
        <Text
          style={{
            fontFamily: 'Montserrat_Light',
            fontSize: 12,
            marginTop: 10,
            lineHeight: 18,
          }}
        >
          <Text style={{ fontFamily: 'Montserrat_Bold' }}>
            Thế mạnh chuyên môn:{' '}
          </Text>
          {strength}
        </Text>
        <Text
          style={{
            fontFamily: 'Montserrat_Light',
            fontSize: 12,
            marginTop: 10,
            lineHeight: 18,
          }}
        >
          <Text style={{ fontFamily: 'Montserrat_Bold' }}>Điện thoại: </Text>
          {number}
        </Text>
        <Text
          style={{
            fontFamily: 'Montserrat_Light',
            fontSize: 12,
            marginTop: 10,
            lineHeight: 18,
          }}
        >
          <Text style={{ fontFamily: 'Montserrat_Bold' }}>Mail: </Text>
          {email}
        </Text>
      </View>
    </View>
  );
};

export default Detail_Profes;
