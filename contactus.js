import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

 function ContactUsScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // You can handle form submission here (e.g., send data to a backend)
    Alert.alert('Form Submitted', `Thank you, ${name}. We will get back to you soon!`);
  };

  return (
    <View style={styles.container}>
      

      <View style={styles.content}>
        <Text style={styles.title}>Contact Us</Text>

        <TextInput
          style={styles.input}
          placeholder="Your Name"
          placeholderTextColor="#aaa"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textArea}
          placeholder="Your Message"
          placeholderTextColor="#aaa"
          value={message}
          onChangeText={setMessage}
          multiline={true}
          numberOfLines={4}
        />

        <Button
          title="Submit"
          onPress={handleSubmit}
          color="#0b99e6"
         style={styles.button}
        />

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
  button:{
    borderColor: 'white',
    borderWidth: 2,
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
  input: {
    backgroundColor: 'white',
    color: 'black',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  textArea: {
    backgroundColor: 'white',
    color: 'black',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    height: 100,
  },
});
 export default ContactUsScreen