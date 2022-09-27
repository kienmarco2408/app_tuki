import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  StatusBar,
} from 'react-native';
import { Button, NativeBaseProvider } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

function SignIn() {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    NunitoSans_Regular: require('../../assets/Nunito_Sans/NunitoSans-Regular.ttf'),
    NunitoSans_SemiBold: require('../../assets/Nunito_Sans/NunitoSans-SemiBold.ttf'),
    NunitoSans_ExtraBold: require('../../assets/Nunito_Sans/NunitoSans-ExtraBold.ttf'),
    NunitoSans_Black: require('../../assets/Nunito_Sans/NunitoSans-Black.ttf'),
    Montserrat_Light: require('../../assets/Montserrat/Montserrat-Light.ttf'),
    Montserrat_SemiBold: require('../../assets/Montserrat/Montserrat-Medium.ttf'),
    Montserrat_Bold: require('../../assets/Montserrat/Montserrat-Bold.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View>
        <View
          style={{ width: 117, height: 50, marginLeft: 150, marginTop: 40 }}
        >
          <Text
            style={{
              fontFamily: 'NunitoSans_Black',
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
              fontFamily: 'NunitoSans_Regular',
              fontSize: 14,
              lineHeight: 19.1,
              textAlign: 'center',
            }}
          >
            Cùng con khôn lớn
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'Montserrat_Light',
              fontSize: 16,
              marginLeft: 16,
              marginTop: 94,
            }}
          >
            Sign in
          </Text>
        </View>

        {/*Username input field*/}
        <View>
          <View>
            <TextInput
              style={{
                height: 50,
                margin: 16,
                marginRight: 16,
                paddingLeft: 19,
                borderWidth: 1,
                borderRadius: 6,
                fontFamily: 'Montserrat_SemiBold',
              }}
              variant="outline"
              placeholder="Username"
              _light={{
                placeholderTextColor: '#787878',
              }}
              _dark={{
                placeholderTextColor: '#787878',
              }}
            />
          </View>
        </View>
        {/* Password Input Field */}
        <View>
          <View>
            <TextInput
              style={{
                height: 50,
                marginHorizontal: 16,
                borderWidth: 1,
                paddingLeft: 19,
                marginBottom: 76,
                borderRadius: 6,
                fontFamily: 'Montserrat_SemiBold',
              }}
              variant="outline"
              secureTextEntry={true}
              placeholder="Password"
              _light={{
                placeholderTextColor: '#787878',
              }}
              _dark={{
                placeholderTextColor: '#787878',
              }}
            />
          </View>
        </View>

        {/* Button*/}
        <View
          style={{
            width: '85%',
            height: 48,
            backgroundColor: '#447DB9',
            borderRadius: 13,
            padding: 5,
            marginTop: 30,
            marginHorizontal: 30,
          }}
        >
          <Button
            colorScheme="#447DB9"
            onPress={() => navigation.push('OnBoarding_1')}
          >
            Login
          </Button>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 32,
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: 'Montserrat_SemiBold',
              fontSize: 16,
              color: '#787878',
            }}
          >
            Haven't register yet?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text
              style={{
                fontFamily: 'Montserrat_SemiBold',
                fontSize: 16,
                color: '#447DB9',
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 16,
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: 'Montserrat_SemiBold',
              fontSize: 16,
              color: '#787878',
            }}
          >
            Forgot Password?
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <SignIn />
    </NativeBaseProvider>
  );
};
