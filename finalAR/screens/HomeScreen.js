import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Button, TextInput, Modal } from 'react-native';
import Expo from 'expo';
import ExpoTHREE, { THREE } from 'expo-three';
import ExpoGraphics from 'expo-graphics';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';
import GooglePoly from './../api/GooglePoly';
import ApiKeys from './../constants/ApiKeys';
import TurkeyObject from './../assets/objects/TurkeyObject.json';
import { SearchableGooglePolyAssetList } from './../components/AppComponents';
import { Fonts } from '../util/fonts';

console.disableYellowBox = true;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.googlePoly = new GooglePoly(ApiKeys.GooglePoly);
    this.state = {
      searchModalVisible: false,
      currentAsset: TurkeyObject,
    }
  }

  onContextCreate = async ({gl, scale, width, height, arSession}) => {
    // Initialize renderer...
    this.renderer = ExpoTHREE.createRenderer({gl});
    this.renderer.setPixelRatio(scale);
    this.renderer.setSize(width, height);

    // Initialize scene...
    this.scene = new THREE.Scene();
    this.scene.background = ExpoTHREE.createARBackgroundTexture(arSession, this.renderer);

    // Initialize camera...
    this.camera = ExpoTHREE.createARCamera(arSession, width / scale, height / scale, 0.01, 1000);

    // Initialize lighting...
    var ambientLight = new THREE.AmbientLight(0xaaaaaa);
    this.scene.add(ambientLight);
  }

  onRender = (delta) => {

    // Rotate the object...
    if (this.threeModel) {
      //this.threeModel.rotation.x += 2 * delta;
      this.threeModel.rotation.y += 1.5 * delta;
    }

    // Render...
    this.renderer.render(this.scene, this.camera);
  }

  onAddObjectPress = () => {
    // Remove the current object...
    this.onRemoveObjectPress();

    // Add the current object...
    GooglePoly.getThreeModel(this.state.currentAsset, function(object) {
      this.threeModel = object;
      ExpoTHREE.utils.scaleLongestSideToSize(object, 1.5);
      object.position.z = -3;
      this.scene.add(object);
    }.bind(this), function(error) {
      console.log(error);
    });
  }

  onRemoveObjectPress = () => {
    if (this.threeModel) {
      this.scene.remove(this.threeModel);
    }
  }

  onCancelPress = () => {
    this.setState({searchModalVisible: false});
  }

  onAssetPress = (asset) => {
    this.setState({currentAsset: asset});
    this.setState({searchModalVisible: false});
  }

  onSearchModalPress = () => {
    this.setState({searchModalVisible: true});
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex:1}}>
        <ExpoGraphics.View style={{flex:1}}
          onContextCreate={this.onContextCreate}
          onRender={this.onRender}
          arEnabled={true}
        />

        <View style={{position:"absolute", bottom: 0, flex: 1, flexDirection: "row",}}>
          <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between"}}>
          <Button size={40} title="Search" color="#fff" backgroundColor="transparent" onPress={this.onSearchModalPress} />
          <Button size={40} title="Add" color="#fff" backgroundColor="transparent" onPress={this.onAddObjectPress} />
          <Button size={40} title="Remove" color="#fff" backgroundColor="transparent" onPress={this.onRemoveObjectPress} />
          <Button size={40} title="Settings" color="#fff" backgroundColor="transparent" onPress={() => navigate('Settings')} />
          </View>
        </View>

        <Modal visible={this.state.searchModalVisible} animationType="slide">
          <SearchableGooglePolyAssetList
            googlePoly={this.googlePoly}
            onCancelPress={this.onCancelPress}
            onAssetPress={this.onAssetPress}
          />
        </Modal>

      </View>
    );
  }

}

const styles = StyleSheet.create({

});
