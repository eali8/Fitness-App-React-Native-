
import React, { useState, useRef } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Divider, Text, Button, Image, FAB, Overlay, Icon } from '@rneui/themed';


import Carousel from 'react-native-anchor-carousel'; 
import { getFitnessById } from '../data/fitness-data';

export default function DetailsScreen({ route, navigation }) {
  const [visibleAlert, setVisibleAlert] = useState(false);
  const { fitnessId } = route.params;
  const currFitness = getFitnessById(fitnessId);

    // reference is needed for onPress handler
    const carouselRef = useRef(null);

    // screen width is needed for container
    const { width: windowWidth } = Dimensions.get('window');
    
    const renderItem = ({ item, index }) => (
      <TouchableOpacity
        activeOpacity={.7}
        style={[styles.caroItem]}
  
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}>
  
        <Image
          style={styles.caroImage}
          source={{ uri: item }}
        />
      </TouchableOpacity>
    );
  //  I have set from id: 002 till 010 that no fitness data is available 
  // 
  if (!currFitness || (fitnessId >= '002' && fitnessId <= '010')) {
    return (
      <View style={styles.container}>
        <Text h3>No Fitness Data Available</Text>
        <Text>Please try again later.</Text>
        <Button
          title="Back to Workouts"
          onPress={() => navigation.navigate('Workout')}
          color="#217F91"
        />
      </View>
    );
  }

  const amenItems = currFitness.amenities.map((currAmen) => (
    <View key={currAmen.key} style={styles.amenListItem}>
      <Icon
        name='fitness-sharp'
        type='ionicon'
        color="#217F91"
      />
      <Text>
        {currAmen.value}
      </Text>
    </View>
  ));

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <Image
          style={styles.fitnessImage}
          source={{ uri: currFitness.keyImage }}
        /> */}

        <Carousel
         style={styles.carousel}
         data={currFitness.otherImage}
         renderItem={renderItem}
         initialIndex={7}

         itemWidth={windowWidth * 0.8}
         inActiveScale={0.6}
         separatorWidth={15}
         containerWidth={windowWidth}

         inActiveOpacity={0.3}

         ref={carouselRef}
        />

        <Text h3>{currFitness.name}</Text>

        <Text>{currFitness.shortDesc}</Text>

        <Divider inset={true} insetType='middle' color={'#217F91'} />

        <Text h3>Benefits</Text>

        {amenItems}

        <Divider inset={true} insetType='middle' color={'#217F91'} />

        <Text h3>About</Text>

        <Text style={{ marginBottom: 50 }}>{currFitness.longDesc}</Text>
      </ScrollView>

      <FAB
        onPress={() => setVisibleAlert(true)}
        placement="right"
        icon={{
          type: 'ionicon',
          name: 'barbell-outline', 
          color: "#FFFFFF", 
        }}
      />
  
      <Overlay isVisible={visibleAlert}>
        <Text h3>Apologies</Text>
        <Text>
          The booking feature is currently unavailable!
        </Text>

        <Button
          title="Close"
          onPress={() => setVisibleAlert(false)}
        />
      </Overlay>

      <Button
        title="Back to Workouts"
        onPress={() => navigation.navigate('Workout')}
        color="#217F91"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fitnessImage: {
    aspectRatio: 1,
    width: '100%'
  },

  amenListItem: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 15,
    alignItems: 'center',
  },
  carousel: {
    flexGrow: 0,
    height: 250,
  },
  
  caroItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  caroImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 15, 
  },
});