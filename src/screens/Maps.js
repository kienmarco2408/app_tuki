import * as React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { markers } from '../data/mapData';

const { width, height } = Dimensions.get('window');
const CARD_HEIGHT = 244;
const CARD_WIDTH = width * 0.9;
const SPACING_FOR_CARD_INSET = width * 0.1 - 35;

const mapStandardStyle = [
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
];

const Maps = ({ navigation }) => {
  const region = {
    latitudeDelta: 5,
    longitudeDelta: 5,
  };
  const [state, setState] = React.useState(markers, region);

  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  React.useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3);
      if (index >= markers.length) {
        index = state.marker.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if (mapIndex != index) {
          mapIndex = index;
          const { coordinate } = markers[index];
          _map.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: region.latitudeDelta,
              longitudeDelta: region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  });

  const interpolations = markers.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: 'clamp',
    });
    return { scale };
  });

  const onMarkerPress = (mapEventData) => {
    const markerID = mapEventData._targetInst.return.key;

    let x = markerID * CARD_WIDTH + markerID * 20;
    if (Platform.OS === 'ios') {
      x = x - SPACING_FOR_CARD_INSET;
    }

    _scrollView.current.scrollTo({ x: x, y: 0, animated: true });
  };

  const _map = React.useRef(null);
  const _scrollView = React.useRef(null);
  const initialMapState = {
    markers,
  };
  return (
    <View style={styles.container}>
      <MapView
        ref={_map}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStandardStyle}
      >
        {markers.map((item, index) => {
          const scaleStyle = {
            transform: [
              {
                scale: interpolations[index].scale,
              },
            ],
          };
          return (
            <MapView.Marker
              key={index}
              coordinate={item.coordinate}
              onPress={(e) => onMarkerPress(e)}
            >
              <Animated.View style={[styles.markerWrap]}>
                <Animated.Image
                  source={require('../storage/mark/map_pin.png')}
                  style={[styles.marker, scaleStyle]}
                  resizeMode="cover"
                />
              </Animated.View>
            </MapView.Marker>
          );
        })}
      </MapView>
      <Animated.ScrollView
        ref={_scrollView}
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          paddingVertical: 35,
          marginRight: 10,
        }}
        pagingEnabled
        snapToInterval={CARD_WIDTH + 45}
        snapToAlignmen="center"
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal:
            Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
      >
        {markers.map((marker, index) => (
          <View
            style={{
              backgroundColor: '#FFF',
              borderRadius: 6,
              marginHorizontal: 20,
              height: 268,
              width: 375,
              marginBottom: 50,
            }}
            key={index}
          >
            <View
              style={{
                width: 375,
                height: 268,
                marginHorizontal: 18,
                marginTop: 22,
              }}
            >
              <View
                style={{
                  width: 280,
                  height: 42,
                  marginLeft: 30,
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: '700',
                    fontSize: 15,
                    lineHeight: 21,
                    letterSpacing: -0.32,
                    fontFamily: 'Montserrat_Bold',
                  }}
                >
                  {marker.title}
                </Text>
              </View>
              <View
                style={{
                  marginTop: 5,
                  borderBottomColor: 'black',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                }}
              />
              <View
                style={{
                  width: 340,
                  height: 54,
                  justifyContent: 'center',
                  alignContent: 'center',
                  marginLeft: 2,
                  marginTop: 15,
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 15,
                    lineHeight: 21,
                    letterSpacing: -0.32,
                    fontFamily: 'Montserrat_Regular',
                  }}
                >
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontFamily: 'Montserrat_Bold',
                    }}
                  >
                    Địa chỉ:{' '}
                  </Text>
                  {marker.address}
                </Text>
              </View>
              <View style={{ marginLeft: 15 }}>
                <Text
                  style={{
                    fontSize: 15,
                    lineHeight: 21,
                    fontWeight: '700',
                    letterSpacing: -0.32,
                  }}
                >
                  Nhà chuyên môn:
                </Text>
              </View>
              <View
                style={{
                  width: 275,
                  height: 59,
                  flexDirection: 'row',
                  marginLeft: 15,
                  marginTop: 13,
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    navigation.push('Detail_Profes', {
                      title: marker.title,
                      address: marker.address,
                      image: marker.image,
                      name: marker.name,
                      strength: marker.strength,
                      number: marker.number,
                      email: marker.email,
                      university: marker.university,
                      years: marker.years,
                    })
                  }
                >
                  <View
                    style={{
                      width: 168,
                      height: 59,
                      flexDirection: 'row',
                    }}
                  >
                    <Image
                      source={marker.image}
                      style={{
                        width: 59,
                        height: 59,
                        borderRadius: 60,
                      }}
                    />
                    <Text
                      style={{
                        fontFamily: 'Montserrat_Regular',
                        marginVertical: 18,
                        marginLeft: 10,
                        fontSize: 15,
                        lineHeight: 21,
                        letterSpacing: -0.32,
                        fontWeight: '400',
                      }}
                    >
                      {marker.name}
                    </Text>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    width: 168,
                    height: 59,
                    flexDirection: 'row',
                  }}
                >
                  <Image
                    source={marker.image}
                    style={{
                      width: 59,
                      height: 59,
                      borderRadius: 60,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: 'Montserrat_Regular',
                      marginVertical: 18,
                      marginLeft: 10,
                      fontSize: 15,
                      lineHeight: 21,
                      letterSpacing: -0.32,
                      fontWeight: '400',
                    }}
                  >
                    {marker.name}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 50,
  },
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#FFFFFF',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  image: {
    width: 120,
    height: 50,
  },
});

export default Maps;
