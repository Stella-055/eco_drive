import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

 function DeleteAccountScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Back</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Delete Account</Text>
        <Text style={styles.description}>
          Are you sure you want to delete your account? This action cannot be undone. 
          Deleting your account will permanently remove all your data, and you won't 
          be able to access the platform again.
        </Text>
        <StatusBar style="light" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
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
 export default DeleteAccountScreen