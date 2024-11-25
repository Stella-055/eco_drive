import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

 function HelpSupportScreen({ navigation }) {
  return (
    <View style={styles.container}>
     

      <View style={styles.content}>
        <Text style={styles.title}>Help and Support</Text>
        <Text style={styles.description}>
          Welcome to our Help and Support Center! We're here to assist you with
          any questions or concerns you may have while navigating our platform.
          Below, you'll find resources and ways to get help:
        </Text>
        <StatusBar style="light" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b99e6',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
  content: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: 'white',
    fontSize: 16,
  },
});
export default HelpSupportScreen