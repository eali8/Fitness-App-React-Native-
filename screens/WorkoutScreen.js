
import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ListItem, Button, Avatar } from '@rneui/themed';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { getAllFitness } from '../data/fitness-data';

const WorkoutScreen = ({ navigation }) => {
  const [isAddedToList, setIsAddedToList] = useState({});

  const toggleHeart = (fitnessId) => {
    setIsAddedToList((prevState) => ({
      ...prevState,
      [fitnessId]: !prevState[fitnessId] || false,
    }));
  };

  const fitnessData = getAllFitness();
  // rendering each item in the "Flatlist", so it can display as an each item. 
 
  const renderItem = ({ item }) => (
    <ListItem
    onPress={() => {
      console.log('Selected fitnessId:', item.id);
      navigation.navigate('Details', { fitnessId: item.id });
    }}
    bottomDivider
  >
      <Avatar 
       title={item.name[0]} 
       source={{ uri: item.keyImage }}  
       size={50}
       rounded
      />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
      
      </ListItem.Content>
      <TouchableOpacity
        onPress={() => toggleHeart(item.id)}
        style={styles.heartContainer}
      >
        <FontAwesomeIcon
          icon={solidHeart}
          color={isAddedToList[item.id] ? 'red' : 'gray'}
        />
      </TouchableOpacity>
      <ListItem.Chevron />
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={fitnessData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <Button
        title="Return Home"
        onPress={() => navigation.navigate('Home')}
        color="#217F91"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  heartContainer: {
    marginLeft: 'auto',
  },
});

export default WorkoutScreen;