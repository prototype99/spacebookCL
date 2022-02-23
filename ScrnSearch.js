import React from 'react';
import {TextInput, View} from 'react-native';
import ComponentUser from "./ComponentUser";
export default class ScrnSearch extends ComponentUser {
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
              <ComponentUser navigation={this.props.navigation} scope={"all"}/>
          </View>
      );
  }
}