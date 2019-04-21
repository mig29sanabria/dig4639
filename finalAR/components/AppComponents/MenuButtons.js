import React  from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';

export default class MenuButtons extends React.Component {
  render() {
    return(
      <View style={styles.menuButtons}>
        <Image source={this.props.buttonImage} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuButtons: {
    height: '50%',
    width: '33.333333%',
    padding: 20,
  },
  image: {
    height: '100%',
    width: '100%',
    borderWidth: 2,
    borderColor: '#fff',
    opacity: 0.8,

  }
});
