import React from 'react';
import Expo from 'expo';
import { Button } from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground
} from 'react-native';
import { Fonts } from '../util/fonts';
import MenuButtons from '../components/AppComponents/MenuButtons';

export default class Settings extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render () {
    const {navigate} = this.props.navigation;
    return (

      <ImageBackground
        source={require("../assets/images/settingsback.png")} style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.header}>S E T T I N G S</Text>
        </View>


        <View style={styles.menuContainer}>
          <MenuButtons buttonImage={require('../assets/images/home.png')}/>
          <MenuButtons buttonImage={require('../assets/images/settings.png')}/>
          <MenuButtons buttonImage={require('../assets/images/infoicon.png')}/>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footer}>(Swipe right from edge to go back)</Text>
        </View>
      </ImageBackground>


   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: '100%',
    height: '100%',
  },
  top: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#fff',
    backgroundColor: 'rgba(255,255,255, .1)',
    fontSize: 28,
    borderColor: '#fff',
    borderWidth: 2,
    padding: 20,
    paddingRight: 40,
    paddingLeft:40,
    //fontFamily: Fonts.pixel,
  },
  menuContainer: {
    height: '40%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footer: {
    color: '#fff',
    fontSize: 15,

    alignItems: 'center',
    paddingBottom: 15,
    justifyContent: 'center',
  }
});
