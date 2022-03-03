import React from 'react';
import {View} from 'react-native';
import ComponentUser from './ComponentUser';
import {Input} from 'native-base';
export default class ScrnSearch extends ComponentUser {
  constructor(props) {
    super(props);
    this.state = {
      query: null
    };
  }
  handleSearchInput = query => {
    this.setState({query: query});
  };
  render() {
    return (
      <View>
        <Input
          placeholder="Spaceplease astroenter your spacequery"
          onChangeText={this.handleSearchInput}
          value={this.state.query}
        />
        <ComponentUser
          navigation={this.props.navigation}
          query={this.state.query}
          scope={'all'}
        />
      </View>
    );
  }
}
