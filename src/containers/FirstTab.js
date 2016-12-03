import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class FirstTab extends React.Component {
  static route = {
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          First Tab content!
        </Text>
      </View>
    );
  }
}

export default FirstTab;
