import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

import * as SensorActions from '../reducers/sensors';

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

class ParkingStatusContainer extends React.Component {
  static route = {
  }

  componentDidMount() {
    this.props.connectWithSensors();
  }

  render() {
    const { light, isLoading } = this.props;
    const time = light.status;

    return (
      <View style={styles.container}>
        {
          isLoading 
          ? <Text>Connecting with sensors...</Text>
          : <Text style={styles.welcome}>
              Light Status: {time}
            </Text>
        }
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.sensors.isLoading,
    error: state.sensors.error,
    socket: state.sensors.socket,
    light: state.sensors.light,
    sonic: state.sensors.sonic,
  };
}

const actionsToProps = {
  connectWithSensors: SensorActions.connectWithSensors,
};

export default connect(mapStateToProps, actionsToProps)(ParkingStatusContainer);
