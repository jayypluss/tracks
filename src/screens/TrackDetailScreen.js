import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const TrackDetailScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={{ fontSize: 48 }}>TrackDetailScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

TrackDetailScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

export default TrackDetailScreen;
