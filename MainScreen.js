// MainScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet,Image } from 'react-native';

 function MainScreen ({ navigation })  {
    return (
        <View style={styles.container}>
        <View style={styles.container1}>
          <Image
            source={require('./assets/logo.jpeg')}
            style={styles.image}
          />
          <Text style={styles.title}>Welcome To eco Drive</Text>
        </View>
  
        {/* Wrap the Button in a View to apply styles */}
        <View style={styles.btnContainer}>
          <Button title="Login" onPress={() => navigation.navigate('Login')} />
        </View>
  
        <View style={styles.btnContainer}>
          <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF', // Cool background color
    },
    container1:{
        justifyContent: 'center',  
        alignItems: 'center',
        marginVertical: 60,
    },
    btnContainer:{ 
        marginVertical: 10, // Adjust spacing between buttons
        width: '90%', // Set the width to control button size

    },
    title: {
        fontSize: 30,
        marginBottom: 20,
          fontWeight: 'bold',
    color: '#333',
    },
    image: {
        width: 420, // specify the width of the image
        height: 400, // specify the height of the image
      },
});

export default MainScreen;
