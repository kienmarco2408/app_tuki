import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  Button,
} from 'react-native';
import React from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const Search = ({ navigation }) => {
  const tags = [
    {
      name: 'tập nói',
    },
    {
      name: 'tự kỷ',
    },
    {
      name: 'mắt',
    },
    {
      name: 'bài tập',
    },
    {
      name: 'can thiệp',
    },
    {
      name: 'chậm nói',
    },
  ];
  return (
    <SafeAreaView>
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
              <AntDesign name="arrowleft" size={24} color="white" />
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
                Tìm Kiếm
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '90%',
            height: 60,
            backgroundColor: '#F3F9FF',
            marginTop: 31,
            padding: 20,
            marginHorizontal: 20,
            borderRadius: 8,
          }}
        >
          <TextInput
            placeholder="Tập nói"
            style={{
              fontSize: 16,
              fontFamily: 'Montserrat_Light',
              width: '90%',
            }}
          />
          <Ionicons
            name="md-search-outline"
            size={24}
            color="grey"
            style={{ bottom: 3 }}
          />
        </View>
        <View style={{ marginLeft: 20, marginTop: 25 }}>
          <Text style={{ fontFamily: 'Montserrat_Light', fontSize: 15 }}>
            Top tìm kiếm
          </Text>
        </View>
        <FlatList
          data={tags}
          numColumns={3}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  backgroundColor: '#99C0E9',
                  width: '30%',
                  height: 38,
                  borderRadius: 4,
                  marginRight: 6,
                  marginTop: 8,
                  marginHorizontal: 8,
                  justifyContent: 'space-between',
                }}
              >
                <Button textColor="#FFFFFF" />
              </View>
            );
          }}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
};

export default Search;
