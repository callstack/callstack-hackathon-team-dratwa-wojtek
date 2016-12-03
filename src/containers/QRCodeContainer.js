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
    View,
    ScrollView
} from 'react-native';
import QRCodeScreen from '../components/QRCodeScreen';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import {
    scan,
    clear
} from '../actions/garbage';
import { Icon } from 'react-native-elements'

class QRCodeContainer extends Component {

    static propTypes = {
        garbage: React.PropTypes.shape({}),
        onScan: React.PropTypes.func.isRequired,
        clear: React.PropTypes.func.isRequired,
    }

    renderData = () => {
        return (
            <View>
                <View style={styles.actions}>
                    <Icon name="aspect-ratio" onPress={this.props.clear} size={30} color='#0097CE'/>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.list}>
                        {Object.keys(this.props.garbage).map(this.renderItem)}
                    </View>
                </ScrollView>
            </View>
        );
    }

    renderItem = (key) => {
        const item = this.props.garbage[key];
        return (
            <Card key={key} title={key}>
                <Text>
                    { item.from }
                </Text>
                <Text>
                    { item.to }
                </Text>
            </Card>
        );
    };

    render() {
        const ViewComponent = this.props.garbage != null ? this.renderData() : <QRCodeScreen onSuccess={ this.props.onScan } />;
        return (
            <View style={styles.container} >
                { ViewComponent }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actions: {
        flexDirection: 'row',
        paddingTop: 30,
        paddingRight: 10,
        justifyContent: 'flex-end',
    },
    list: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
});

export default connect((state) => ({garbage: state.garbage}), { onScan: scan, clear } )(QRCodeContainer);
