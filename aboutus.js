import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

 function AboutUsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      

      <View style={styles.content}>
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.description}>
          Welcome to our ride-sharing app! Our mission is to provide safe, reliable, 
          and affordable rides to everyone. Whether you're commuting to work or 
          heading out for a night with friends, we’ve got you covered.
          {'\n\n'}
          Our platform connects drivers and passengers, making transportation easy, 
          convenient, and accessible. We are committed to ensuring that your experience 
          with us is seamless, with safety being our top priority.
          {'\n\n'}
          Thank you for choosing us as your trusted ride-sharing service.
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
export default AboutUsScreen