import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }
  onChange(event) {
    console.log(event);
  }
  
  onPress() {
    console.log("Pressed");
  }
  render() {
    return (
      <View style={styles.container} flexDirection="column" alignItems='stretch'>
        <View><TextInput style={styles.textInput} onChangeText={this.onChange} placeholder="Enter your name"></TextInput></View>
        <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText:
  {
    color:"white",
    fontSize:40
  },
  buttonStyle:
  {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'blue',
    height:75,
    margin:30,
  },
  textInput:
  {
    margin:30,
    height:75,
    fontSize:20
  },
  defaultText:
  {
    fontSize:20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});