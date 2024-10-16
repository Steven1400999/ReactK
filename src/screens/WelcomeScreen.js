import * as React from 'react';
import { Button, View, Text } from 'react-native';

function WelcomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome</Text>
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default WelcomeScreen;
