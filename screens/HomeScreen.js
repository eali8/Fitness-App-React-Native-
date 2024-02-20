import React from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground} from 'react-native';

// import RNE 
import { Text } from '@rneui/themed'; 


const HomeScreen = ({ navigation }) => {
  
  return (
      <ImageBackground
        source={require('../assets/images/girl.jpeg')}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <Text style={styles.header}>Welcome Back Emmy</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Workout')}>
            <Text style={styles.buttonText}>Let's Keep Going!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default HomeScreen;
