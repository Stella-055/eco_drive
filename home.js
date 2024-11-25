import { View, Text, Button, ImageBackground, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';  // Import icons
import React from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';

function Home({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Ionicons
          name="menu"
          size={30}
          color="black"
          style={{ marginLeft: 15 }}
          onPress={() => navigation.openDrawer()} // Open the drawer when icon is pressed
        />
      ),
    });
  }, [navigation]);

  const [location, setLocation] = React.useState('');
  const [destination, setDestination] = React.useState('');
  const [carType, setCarType] = React.useState('');

  // Shared value for dragging; set initial position for bottom sheet (collapsed)
  const translateY = useSharedValue(200); // Initial position at the bottom (collapsed)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const onGestureEvent = (event) => {
    const { translationY } = event.nativeEvent;
  
    // Update the position only if dragging is within the allowed limits
    translateY.value = Math.min(0, Math.max(200, translationY + translateY.value));
  };
  
  const onGestureEnd = () => {
    // Snap to expanded or collapsed position based on the drag distance
    if (translateY.value > 100) {
      translateY.value = withSpring(200); // Snap back to collapsed position
    } else {
      translateY.value = withSpring(0); // Snap to fully expanded
    }
  };

  // Function to handle the button press and send data to the backend
  const handleLocationConfirm = async () => {
    const data = { location, destination, carType };

    try {
      const response = await fetch('https://your-backend-api.com/confirm-location', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (response.ok) {
        alert('Location Confirmed');
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send data to the backend');
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ImageBackground
        source={require('./assets/map.jpeg')} // Use require for local images
        style={styles.background}
        resizeMode="cover" // Options: "cover", "contain", etc.
      >
        {/* Bottom Sheet */}
        <PanGestureHandler onGestureEvent={onGestureEvent} onEnded={onGestureEnd}>
          <Animated.View style={[styles.bottomSheet, animatedStyle]}>
            <Text style={styles.dragText}>Drag Up to Enter Location</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your location"
              value={location}
              onChangeText={setLocation}
            />
            <TextInput
              style={styles.input}
              placeholder="Where to"
              value={destination}
              onChangeText={setDestination}
            />
            <TextInput
              style={styles.input}
              placeholder="Type of car"
              value={carType}
              onChangeText={setCarType}
            />
            <Button title="Confirm Location" onPress={handleLocationConfirm} />
          </Animated.View>
        </PanGestureHandler>
      </ImageBackground>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 40,
    color: 'white',
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 300,
    backgroundColor: '#f5f5f5',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 1, // Ensure the bottom sheet is on top of the map
  },
  dragText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
});

export default Home;
