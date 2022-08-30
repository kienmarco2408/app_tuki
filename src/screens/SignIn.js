import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  StatusBar,
} from 'react-native';
import { NativeBaseProvider, Button } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

function SignIn() {
  const navigation = useNavigation();
  const [loaded] = useFonts({
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
        <View>
          <Text
            style={{
              fontFamily: 'Montserrat_Bold',
              fontSize: 24,
              marginLeft: 16,
              color: '#107AF5',
            }}
          >
            Welcome Back
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
                marginTop: 64,
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
          colors={'#FB7A41'}
          style={{ marginHorizontal: 16, borderRadius: 6 }}
        >
          <Button
            onPress={() => navigation.push('OnBoarding_1')}
            style={{
              height: 48,
              width: 396,
              backgroundColor: 'transparent',
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Montserrat_SemiBold',
                color: 'white',
              }}
            >
              Login
            </Text>
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
                color: '#FB7A41',
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
