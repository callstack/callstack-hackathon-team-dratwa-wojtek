'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import GettingStartedTexts from '../texts/GettingStartedTexts';
import AppIntro from 'react-native-app-intro';

const styles = StyleSheet.create({
  text: {
    color: '#000',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: 20,
    margin: 10,
    height: 20
  },
});

class GettingStartedInstruction extends Component {

  constructor(props) {
    super(props);
    this.state = {isOpened: -1};
  }

  onPressShowMore(index) {
    this.setState({isOpened: index});
  }

  getTexts(index) {
    let configPages = GettingStartedTexts.texts.map((text, index) => {
      return ({
          title: text.title,
          description: text.description,
          backgroundColor: '#fa931d',
          fontColor: '#fff',
          level: 100
        });
    }, this);
    return configPages;
  }


  render() {
      return (
        <View >
          <AppIntro
             pageArray={this.getTexts()}
          />
        </View>
    );
  }
}

export default GettingStartedInstruction;
