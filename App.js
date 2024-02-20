 
// Emmy Ali - A1004664 Assignment 2 MDIA4295

import {NavigationContainer} from '@react-navigation/native'; 
import {createNativeStackNavigator} from '@react-navigation/native-stack'; 

import { ThemeProvider } from '@rneui/themed'; 
import { royalTheme } from './themes/royalTheme'; 


import HomeScreen from './screens/HomeScreen'; 
import DetailsScreen from './screens/DetailsScreen'; 
import WorkoutScreen from './screens/WorkoutScreen'; 
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator(); 

export default function App() {

  return (
    <SafeAreaProvider>
    <ThemeProvider theme={royalTheme}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options= {{headerShown: false}}
        />
        <Stack.Screen
        name='Details'
        component={DetailsScreen}
        options = {{title: 'Workout Details'}}
        initialParams={{ fitnessId: '001' }}
         />
         <Stack.Screen
          name='Workout'
          component={WorkoutScreen}
          options = {{title: 'Choose your favorite workout!'}}
          />
      </Stack.Navigator> 
      </NavigationContainer>
      </ThemeProvider>
      </SafeAreaProvider>
  ); 
}; 

