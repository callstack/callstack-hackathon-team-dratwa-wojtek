'use strict';

import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    VibrationIOS,
} from 'react-native';

import Camera from 'react-native-camera';

export default class QRCodeScreen extends Component {

    static propTypes = {
        onSuccess: React.PropTypes.func,
        onCancel: React.PropTypes.func,
    }

    static defaultProps = {
        cancelButtonVisible: false,
        cancelButtonTitle: 'Cancel',
    }

    _onPressCancel = () => {
        requestAnimationFrame(() => {
            const { onCancel, onSuccess } = this.props;
            // onCancel && onCancel();
            VibrationIOS.vibrate();
            onSuccess(JSON.stringify({schedule: {}}));
        });
    }

    _onBarCodeRead = (result) => {
        if (this.barCodeFlag) {
            this.barCodeFlag = false;

            setTimeout(() => {
                const { onSuccess } = this.props;
                VibrationIOS.vibrate();
                onSuccess(result.data);
            }, 1000);
        }
    }

    render() {
        this.barCodeFlag = true;

        return (
            <TouchableOpacity onPress={this._onPressCancel} activeOpacity={0.5} style={styles.container}>
                <Camera onBarCodeRead={this._onBarCodeRead} style={styles.camera}>
                    <View style={styles.rectangleContainer}>
                        <View style={[styles.border, styles.rectangle]}>
                            <View style={[styles.border, styles.rectangleSmall]}/>
                        </View>
                    </View>
                </Camera>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    camera: {
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    rectangleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    border: {
        borderWidth: 1,
        borderColor: '#3DA5D9',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },

    rectangleSmall: {
        height: 244,
        width: 244,
    },

    rectangle: {
        height: 250,
        width: 250,
    },

    cancelButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 3,
        padding: 15,
        width: 100,
        bottom: 10,
    },
    cancelButtonText: {
        fontSize: 17,
        fontWeight: '500',
        color: '#0097CE',
    },
});
