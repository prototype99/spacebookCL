import React, {Component} from 'react';
import UserList from './UserList';
import {Button, ScrollView} from 'native-base';
export default class ScrnPost extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView>
        <UserList navigation={this.props.navigation} scope={'all'} />
        <Button onPress={() => this.props.navigation.navigate('settings')}>
          Spacesettings
        </Button>
        {/* eslint-disable-next-line prettier/prettier */}
        <Button onPress={() => this.props.navigation.navigate('search')}>
          Spacelocate
        </Button>
      </ScrollView>
    );
  }
}
