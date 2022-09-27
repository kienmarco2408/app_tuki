import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { Button, Center } from 'native-base';
import { inlineStyles } from 'react-native-svg';
import ButtonSearch from '../screensComponent/ButtonSearch';
import MenuCard from '../screensComponent/MenuCard';

const Search = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.topNav}>
          <View style={{ marginLeft: 20, marginTop: 40, flexDirection: 'row' }}>
            <View>
              <Text style={styles.topNavTitle}>TÌM KIẾM</Text>
            </View>
          </View>
        </View>
        <ScrollView style={{ height: '84%', zIndex: 1 }}>
          <View style={styles.pageCSS}>
            {/* all page */}
            <View style={styles.seacrhBox}>
              <TextInput
                style={styles.searchInput}
                placeholder='Thử tìm "Tập nói"'
              />
            </View>

            <View style={{ marginTop: 14 }}>
              {/* div top resulf */}
              <Text
                style={{
                  fontFamily: 'Montserrat_Regular',
                  fontSize: 16,
                }}
              >
                Top tìm kiếm
              </Text>
              <View style={styles.topTimKiem}>
                <ButtonSearch />
              </View>
            </View>
            {/* danh muc */}
            <View style={styles.category}>
              <Text
                style={{
                  fontFamily: 'Montserrat_Regular',
                  fontSize: 16,
                  marginBottom: 12,
                }}
              >
                Danh mục
              </Text>
              <View>
                <MenuCard />
              </View>
              {/* <View style={{height: 1000}}></View> */}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  pageCSS: {
    padding: 20,
  },
  topNav: {
    width: '100%',
    height: 96,
    backgroundColor: '#F5B870',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  topNavTitle: {
    fontFamily: 'Montserrat_Bold',
    fontSize: 18,
    lineHeight: 21.94,
    color: 'white',
    marginLeft: 16,
  },
  seacrhBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    position: 'relative',
  },
  searchInput: {
    width: '100%',
    backgroundColor: '#F3F9FF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    padding: 10,
    paddingLeft: 20,
    fontFamily: 'Montserrat_Regular',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 4,
      height: 4,
    },
  },
  topTimKiem: {
    marginTop: 10,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
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
  category: {
    marginTop: 15,
  },
});
export default Search;
