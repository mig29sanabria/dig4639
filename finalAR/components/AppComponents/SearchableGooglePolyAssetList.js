
import React from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, Button, ImageBackground } from 'react-native';

import GooglePolyAsset from './GooglePolyAsset';

export default class SearchableGooglePolyAssetList extends React.Component {

    static defaultProps = {
        googlePoly: { },
        onCancelPress: function() { },
        onAssetPress: function(asset) { },
    }

    constructor(props) {
        super(props);
        this.state = {
            searchQuery: "",
            currentResults: this.props.googlePoly.currentResults,
        }
    }

    onSearchPress = () => {
        var keywords = this.state.searchQuery;
        this.props.googlePoly.setSearchParams(keywords);

        this.props.googlePoly.getSearchResults().then(function(assets) {
          this.setState({currentResults: this.props.googlePoly.currentResults });
        }.bind(this));
    }

    onLoadMorePress = () => {
        this.props.googlePoly.getSearchResults().then(function(assets) {
          this.setState({currentResults: this.props.googlePoly.currentResults });
        }.bind(this));
    }

    onSearchChangeText = (text) => {
        this.setState({searchQuery: text});
    }

    renderSearchInput() {
        return (
            <View style={{flex:1, flexDirection: "row", alignItems: "center", marginHorizontal:10}}>
                <View style={styles.searchContainer}>
                    <Button title="" color="#fff" size={20} style={{paddingLeft:10, paddingRight: 3}} />
                    <TextInput style={styles.searchTextInput}
                        placeholder="Search..."
                        autoCapitalize="none"
                        value={this.state.searchQuery}
                        onChangeText={this.onSearchChangeText}
                        onSubmitEditing={this.onSearchPress}
                    />
                </View>
                <Button title="Cancel" color="#fff" onPress={this.props.onCancelPress} />
            </View>
        );
    }

    renderCurrentResults() {
        if (this.state.currentResults.length == 0) {
            return (
                <View style={{flex: 1, alignItems: "center"}}>
                    <Text style={styles.noResultsText}>No results</Text>
                </View>
            );
        }

        var results = [];
        for (var i = 0; i < this.state.currentResults.length; i += 2) {
            if (i == this.state.currentResults.length - 1) {
                results.push(
                    <GooglePolyAsset
                        onPress={this.props.onAssetPress}
                        asset={this.state.currentResults[i]}
                        key={i}
                    />
                );
                break;
            }

            results.push(
            <View style={{flexDirection:"row"}} key={"row" + i}>
                <GooglePolyAsset
                    onPress={this.props.onAssetPress}
                    asset={this.state.currentResults[i]}
                    key={i}
                />
                <GooglePolyAsset
                    onPress={this.props.onAssetPress}
                    asset={this.state.currentResults[i+1]}
                    key={i+1}
                />
            </View>
            );
        }

        return (
            <View style={{flex: 1, alignItems: "center" }}>
            {results}
            </View>
        )
    }

    renderLoadMoreButton() {
        return (!this.props.googlePoly.nextPageToken)
        ? <View />
        : <Button title="Load more..." color="#fff" onPress={this.onLoadMorePress} />;
    }

    render() {
        return (
          <ImageBackground source={require("../../assets/images/settingsback.png")} style={styles.container}>
            <ScrollView style={{paddingTop:20}}>
                {this.renderSearchInput()}
                <Button title="Search" color="#fff" onPress={this.onSearchPress} />
                {this.renderCurrentResults()}
                {this.renderLoadMoreButton()}
                <View style={{paddingTop:40}} />
            </ScrollView>
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
    searchContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#DDDDDD",
        color: '#fff',
    },

    searchTextInput: {
        flex: 1,
        height:40,
        color: '#fff',
    },

    noResultsText: {
        fontSize: 18,
        fontStyle: "italic",
        paddingTop: 50,
        color: '#fff',
    }
});
