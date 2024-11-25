// SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    // Simple validation for empty fields
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
      Alert.alert('Validation', 'All fields are required');
      return;
    }
  
    // Password confirmation validation
    if (password !== confirmPassword) {
      Alert.alert('Validation', 'Passwords do not match');
      return;
    }
  
    try {
      // Send signup data to backend
      const response = await fetch('https://your-backend-url.com/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
  
      const result = await response.json();
  
      // Check if sign-up was successful
      if (response.ok) {
        Alert.alert('Sign Up Successful', `Welcome ${result.user.name}!`);
        // Navigate to the home or login screen after sign-up
        navigation.replace('Home'); // Replace 'Home' with the actual home screen name
      } else {
        // Show error message if sign-up failed
        Alert.alert('Sign Up Failed', result.message || 'Unable to create account');
      }
    } catch (error) {
      // Handle other errors (network issues, etc.)
      Alert.alert('Error', 'Something went wrong. Please try again later.');
      console.error('Sign up error:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

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

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        autoCapitalize="none"
      />

      <Button title="Sign Up" onPress={handleSignUp} />

      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate('Login')}
      >
        Already have an account? Log in
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
  loginText: {
    marginTop: 16,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;
