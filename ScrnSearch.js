import React from 'react';
import {TextInput, View} from 'react-native';
import ComponentUser from "./ComponentUser";
export default class ScrnSearch extends ComponentUser {
  constructor(props){
      super(props);
      this.state = {
          query: null
      }
  }
  handleSearchInput = (query) => {
      this.setState({query: query})
  }
  render() {
      return (
          <View>
              <TextInput placeholder="Spaceplease enter your spacequery" onChangeText={this.handleSearchInput} value={this.state.query}/>
              <ComponentUser navigation={this.props.navigation} query={this.state.query} scope={"all"}/>
          </View>
      );
  }
}