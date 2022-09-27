import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ButtonSearch = () => {
  const keyword = [
    {
      id: 1,
      name: 'tập nói',
    },
    {
      id: 2,
      name: 'tự kỷ',
    },
    {
      id: 3,
      name: 'mắt',
    },
    {
      id: 4,
      name: 'bài tập',
    },
    {
      id: 5,
      name: 'can thiệp',
    },
    {
      id: 6,
      name: 'chậm nói',
    },
  ];
  return keyword.map((data, index) => {
    return (
      <View key={data.id}>
        <Text style={styles.topTimKiemText}>{data.name}</Text>
      </View>
    );
  });
};
const styles = StyleSheet.create({
  topTimKiemText: {
    fontFamily: 'Montserrat_Regular',
    fontSize: 16,
    marginVertical: 4,
    marginRight: 8,
    backgroundColor: '#99C0E9',
    padding: 10,
    paddingHorizontal: 20,
    color: 'white',
    borderRadius: 4,
  },
});
export default ButtonSearch;
