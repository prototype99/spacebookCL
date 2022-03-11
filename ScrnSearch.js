import React, {Component} from 'react';
import LstUser from './LstUser';
import {Input, ScrollView} from 'native-base';
export default class ScrnSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
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
        {/* eslint-disable-next-line prettier/prettier */}
        <LstUser
          navigation={this.props.navigation}
          query={this.state.query}
        />
      </ScrollView>
    );
  }
}
