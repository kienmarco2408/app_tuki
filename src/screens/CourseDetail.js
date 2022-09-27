import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import { Video } from 'expo-av';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { Button, Center } from 'native-base';
import { inlineStyles } from 'react-native-svg';

const Separator = () => <View style={styles.separator} />;

const CourseDetail = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.topNav}>
          <View style={{ marginLeft: 20, marginTop: 40, flexDirection: 'row' }}>
            <View>
              <AntDesign
                name="arrowleft"
                size={24}
                color="white"
                onPress={() => navigation.goBack()}
              />
            </View>
            <View>
              <Text style={styles.topNavTitle}>Dạy bé tập nói</Text>
            </View>
          </View>
        </View>
        <ScrollView style={{ height: '84%' }}>
          <View style={styles.pageCSS}>
            {/* all page */}
            <View>
              <Video
                style={styles.video}
                source={{
                  uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                useNativeControls
                resizeMode="contain"
              />
              <View style={styles.videoInfo}>
                <Text style={styles.videoTitle}>
                  Dạy con nói - Kích thích giao tiếp phát âm
                </Text>
                <FontAwesome
                  name="bookmark-o"
                  size={28}
                  color="#447DB9"
                  style={{ marginLeft: '10%' }}
                />
              </View>
              <View style={styles.videoView}>
                <View style={{ backgroundColor: '#EFF3FF', borderRadius: 10 }}>
                  <Text style={styles.category}>tập nói</Text>
                </View>
                <MaterialIcons
                  name="people-outline"
                  size={24}
                  color="black"
                  style={{ marginLeft: 12 }}
                />
                <Text
                  style={{ marginLeft: 12, fontFamily: 'Montserrat_Regular' }}
                >
                  1236
                </Text>
              </View>
              <Separator />
            </View>

            <Text style={styles.text}>
              West Bengal Civil Service, popularly known as W.B.C.S., is the
              civil service of the Indian state of West Bengal. For the WBCS and
              other comparative posts, Public Service Commission of West Bengal
              arranges competitive examinations in three phases every year.
              These phases are Preliminary, Mains and Personality Test.
              {'\n'}
              {'\n'}
              West Bengal Civil Service, popularly known as W.B.C.S., is the
              civil service of the Indian state of West Bengal.
            </Text>
            <Image
              source={{
                uri: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_168318604_69878.jpg',
              }}
              style={styles.img}
            />
            <Text style={styles.text}>
              West Bengal Civil Service, popularly known as W.B.C.S., is the
              civil service of the Indian state of West Bengal. For the WBCS and
              other comparative posts, Public Service Commission of West Bengal
              arranges competitive examinations in three phases every year.
              These phases are Preliminary, Mains and Personality Test.
              {'\n'}
              {'\n'}
              West Bengal Civil Service, popularly known as W.B.C.S., is the
              civil service of the Indian state of West Bengal.
            </Text>
            <Image
              source={{
                uri: 'https://library.pflugervilletx.gov/home/showpublishedimage/14407/637469548608170000',
              }}
              style={styles.img}
            />
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
  video: {
    width: '100%',
    height: 300,
    alignSelf: 'center',
    backgroundColor: 'black',
    borderRadius: 20,
  },
  videoInfo: {
    marginTop: 20,
    marginHorizontal: 20,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  videoTitle: {
    fontFamily: 'Montserrat_Bold',
    fontSize: 16,
    letterSpacing: 1,
    width: '80%',
  },
  videoView: {
    marginVertical: 4,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  category: {
    padding: 6,
    fontFamily: 'Montserrat_Regular',
    color: '#335EF7',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontFamily: 'Montserrat_Light',
    fontSize: 14,
    marginVertical: 20,
  },
  img: {
    width: null,
    flex: 1,
    height: 250,
  },
});
export default CourseDetail;
