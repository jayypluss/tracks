import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const TrackListScreen = ({ navigation }) => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

TrackListScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

export default TrackListScreen;
