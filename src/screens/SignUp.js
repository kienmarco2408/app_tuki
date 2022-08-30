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

function SignUp() {
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
            Sign up
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
            Create Account
          </Text>
        </View>

        {/*Username input field*/}
        <View>
          <View>
            <TextInput
              style={{
                height: 50,
                marginHorizontal: 16,
                paddingLeft: 19,
                marginBottom: 16,
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
        {/*Gmail input field*/}
        <View>
          <View>
            <TextInput
              style={{
                height: 50,
                marginHorizontal: 16,
                marginBottom: 16,
                paddingLeft: 19,
                borderWidth: 1,
                borderRadius: 6,
                fontFamily: 'Montserrat_SemiBold',
              }}
              variant="outline"
              placeholder="Gmail"
              _light={{
                placeholderTextColor: '#787878',
              }}
              _dark={{
                placeholderTextColor: '#787878',
              }}
            />
          </View>
        </View>
        {/*Phone input field*/}
        <View>
          <View>
            <TextInput
              style={{
                height: 50,
                marginHorizontal: 16,
                marginBottom: 16,
                paddingLeft: 19,
                borderWidth: 1,
                borderRadius: 6,
                fontFamily: 'Montserrat_SemiBold',
              }}
              variant="outline"
              placeholder="Phone Number"
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
                marginBottom: 16,
                marginHorizontal: 16,
                borderWidth: 1,
                paddingLeft: 19,
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
        {/* Confirm Password Input Field */}
        <View>
          <View>
            <TextInput
              style={{
                height: 50,
                marginHorizontal: 16,
                borderWidth: 1,
                paddingLeft: 19,
                marginBottom: 64,
                borderRadius: 6,
                fontFamily: 'Montserrat_SemiBold',
              }}
              variant="outline"
              secureTextEntry={true}
              placeholder=" Confirm Password"
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
            onPress={() => navigation.goBack('SignIn')}
            style={{
              height: 48,
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
              Next
            </Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <SignUp />
    </NativeBaseProvider>
  );
};
