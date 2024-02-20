
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Text, Button } from '@rneui/themed';

const NoDataScreen = ({ onRetry }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text h3>No Fitness Data Available</Text>
    <Text>Please try again later.</Text>
    <Button title="Retry" onPress={onRetry} />
  </View>
);

export default NoDataScreen;


