import React, { Component } from 'react';
import {TextInput, View} from 'react-native';
export default class ScrnSearch extends Component {
  constructor(props){
      super(props);
      this.state = {
          query: ''
      }
  }
  searchString = (query) => {
      //stuff
  }
  render() {
      return (
          <View>
              <TextInput placeholder="Spaceplease enter your spacequery" onChangeText={this.searchString} value={this.state.query}/>
          </View>
      );
  }
}