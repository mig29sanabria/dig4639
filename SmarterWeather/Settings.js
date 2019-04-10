import React from 'react';
import Expo from 'expo';
import Button from 'react-native';

export default class Settings extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render () {
    const {navigate} = this.props.navigation;
    return <Button title="Back" onPress ={() => navigate('weather_project.1')} />
  }
}
