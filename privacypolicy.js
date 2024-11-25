import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

 function PrivacyPolicyScreen({ navigation }) {
  return (
    <View style={styles.container}>
     

      <View style={styles.content}>
        <Text style={styles.title}>Privacy and Policy</Text>
        <Text style={styles.description}>
          Welcome to our Privacy and Policy page. We take your privacy seriously. 
          This policy outlines how we collect, use, and protect your personal information 
          when using our platform. Please review this document carefully to understand 
          our practices.
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
export default PrivacyPolicyScreen