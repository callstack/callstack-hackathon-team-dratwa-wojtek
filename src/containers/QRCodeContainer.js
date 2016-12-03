/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import QRCodeScreen from '../components/QRCodeScreen';

export default class QRCodeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    onScan = (data) => {
        this.setState({
            data
        });
    }

    render() {
        const ViewComponent = this.state.data != null ? <Text>{ this.state.data }</Text> : <QRCodeScreen onSuccess={ this.onScan } />;
        return (
            <View>
                { ViewComponent }
            </View>
        );
    }
}

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
