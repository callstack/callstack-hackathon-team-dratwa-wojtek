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
        cancelButtonVisible: React.PropTypes.bool,
        cancelButtonTitle: React.PropTypes.string,
        onSuccess: React.PropTypes.func,
        onCancel: React.PropTypes.func,
    }

    static defaultProps = {
        cancelButtonVisible: false,
        cancelButtonTitle: 'Cancel',
    }

    _onPressCancel = () => {
        requestAnimationFrame(() => {
            const { onCancel, navigator } = this.props;
            // navigator.pop();
            onCancel && onCancel();
        });
    }

    _onBarCodeRead = (result) => {
        if (this.barCodeFlag) {
            this.barCodeFlag = false;

            setTimeout(() => {
                const { onSuccess, navigator } = this.props;
                VibrationIOS.vibrate();
                // navigator.pop();
                onSuccess(result.data);
            }, 1000);
        }
    }

    render() {
        this.barCodeFlag = true;
        const { cancelButtonVisible, cancelButtonTitle} = this.props;
        const cancelButton = cancelButtonVisible ? <CancelButton onPress={this._onPressCancel} title={cancelButtonTitle} /> : null;

        return (
            <Camera onBarCodeRead={this._onBarCodeRead} style={styles.camera}>
                <View style={styles.rectangleContainer}>
                    <View style={styles.rectangle}/>
                </View>
                {cancelButton}
            </Camera>
        );
    }
}

const CancelButton = ({ title, onPress }) => (
    <View style={styles.cancelButton}>
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.cancelButtonText}>{title}</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({

    camera: {
        height: 568,
        alignItems: 'center',
    },

    rectangleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },

    rectangle: {
        height: 250,
        width: 250,
        borderWidth: 2,
        borderColor: '#00FF00',
        backgroundColor: 'transparent',
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
