import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import GettingStartedInstruction from '../components/GettingStartedInstruction';

const styles = StyleSheet.create({
  slide: {
    backgroundColor: '#9DD6EB',
    marginTop: -150,
    marginBottom: 150,
    height: 300
  },
});

class GettingStartedScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Getting started',
    },
  }

  render() {
    return (
      <View style={[styles.slide,{ backgroundColor: '#fa931d' }]}>
        <GettingStartedInstruction />
      </View>
    );
  }
}

export default GettingStartedScreen;
