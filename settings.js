import * as React from 'react';
import {  Text } from 'react-native';


 function Settings() {
  return (
  <Text>hey</Text>
  );
}

const BackButton = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 10 }}>
    <Ionicons name="arrow-back" size={24} color="black" />
  </TouchableOpacity>
);

export default Settings