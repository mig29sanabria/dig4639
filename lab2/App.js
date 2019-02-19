import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.state={
      nameValidate: true,
    }
  }
  onChange(event) {
    console.log(event);
  }

  onPress() {
    console.log("Pressed");
  }

  validate(text, type) {
    alph=/^[a-zA-Z]+$/
    if(type=='name') {
      if(alph.test(text)) {
        this.setState({
          nameValidate:true,
        })
      }
      else {
        this.setState({
          nameValidate:false,
        })
      }
    }
  }

  render() {
    return (
      <View style={styles.container} flexDirection="column" alignItems='stretch'>
        <View><TextInput style={[styles.textInput,!this.state.nameValidate? styles.error:null]} onChangeText={this.onChange} onChangeText={(text)=>this.validate(text, 'name')} placeholder="Enter your name"></TextInput></View>
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
    height:90,
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
  error: {
    borderWidth: 3,
    borderColor: 'red',
  },
});
