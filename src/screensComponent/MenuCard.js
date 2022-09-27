import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const MenuCard = () => {
  const navigation = useNavigation();
  const list = [
    {
      id: 1,
      img: 'https://wiki.dave.eu/images/4/47/Placeholder.png',
      title: 'Thông tin về rối loạn phổ tự kỷ',
    },
    {
      id: 2,
      img: 'https://wiki.dave.eu/images/4/47/Placeholder.png',
      title: 'Thông tin về rối loạn phổ tự kỷ',
    },
    {
      id: 3,
      img: 'https://wiki.dave.eu/images/4/47/Placeholder.png',
      title: 'Thông tin về rối loạn phổ tự kỷ',
    },
    {
      id: 4,
      img: 'https://wiki.dave.eu/images/4/47/Placeholder.png',
      title: 'Thông tin về rối loạn phổ tự kỷ',
    },
    {
      id: 5,
      img: 'https://wiki.dave.eu/images/4/47/Placeholder.png',
      title: 'Thông tin về rối loạn phổ tự kỷ',
    },
    {
      id: 6,
      img: 'https://wiki.dave.eu/images/4/47/Placeholder.png',
      title: 'Thông tin về rối loạn phổ tự kỷ',
    },
  ];
  return list.map((data, index) => {
    return (
      <TouchableOpacity
        key={data.id}
        onPress={() => navigation.push('ListCourse')}
      >
        <View>
          <Image
            style={styles.placeholder}
            source={{
              uri: data.img,
            }}
          />
          <Text style={styles.placeholderText}>{data.title}</Text>
        </View>
      </TouchableOpacity>
    );
  });
};
const styles = StyleSheet.create({
  placeholder: {
    width: '100%',
    height: 200,
    position: 'relative',
    marginBottom: 12,
  },
  placeholderText: {
    position: 'absolute',
    bottom: 30,
    fontFamily: 'Montserrat_Bold',
    fontSize: 18,
    width: 210,
    textAlign: 'center',
    marginHorizontal: 75,
    color: 'white',
  },
});

export default MenuCard;
