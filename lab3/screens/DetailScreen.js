import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class DetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };

    render() {
      return (
        <Text>Details about info here!</Text>
      );
    }
}
