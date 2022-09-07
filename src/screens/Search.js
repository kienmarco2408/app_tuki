import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const Search = ({ navigation }) => {
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
                S
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
