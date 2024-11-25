// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

function  LoginScreen ({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Simple validation for empty fields
    if (email === '' || password === '') {
      Alert.alert('Validation', 'Email and password are required');
      return;
    }
  
    try {
      // Sending login data to backend
      const response = await fetch('https://backend-url.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const result = await response.json();
  
      
      if (response.ok) {
        Alert.alert('Login Successful', `Welcome, ${result.user.name}!`);
        // Navigate to the home screen
        navigation.replace('HomeDrawer');
      } else {
        // Display error message if login failed
        Alert.alert('Login Failed', result.message || 'Invalid credentials');
      }
    } catch (error) {
      
      Alert.alert('Error', 'Something went wrong. Please try again later.');
      console.error('Login error:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
      />

      <Button title="Login" onPress={handleLogin} />

      <Text
        style={styles.signupText}
        onPress={() => navigation.navigate('SignUp')}
      >
        Don't have an account? Sign up
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
  },
  signupText: {
    marginTop: 16,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
