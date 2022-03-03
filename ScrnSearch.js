import React from 'react';
import ComponentUser from './ComponentUser';
import {Input, ScrollView} from 'native-base';
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
      <ScrollView>
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
      </ScrollView>
    );
  }
}
