import React, {Component} from 'react';
import UserList from './UserList';
import {Input, ScrollView} from 'native-base';
export default class ScrnSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: null
    };
  }
  render() {
    return (
      <ScrollView>
        <Input
          placeholder="Spaceplease astroenter your spacequery"
          onChangeText={query => this.setState({query: query})}
          value={this.state.query}
        />
        <UserList
          navigation={this.props.navigation}
          query={this.state.query}
          scope={'all'}
        />
      </ScrollView>
    );
  }
}
