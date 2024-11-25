// SplashScreen.js
import React, { useEffect } from 'react';
import { View,  StyleSheet ,Image} from 'react-native';

function SplashScreen  ({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('HomeDrawer'); // Replace with the main screen after the delay
        }, 3000); // Show for 3 seconds

        return () => clearTimeout(timer); // Cleanup on unmount
    }, [navigation]);

    return ( 
     
        <View style={styles.container}>
            <Image
        source={require('./assets/logo.jpeg')}
        style={styles.image}
      />
            
        </View>   
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff'
    },
    image: {
        width: 300, // specify the width of the image
        height: 250,
        // specify the height of the image
      },
    
  
});

export default SplashScreen;
