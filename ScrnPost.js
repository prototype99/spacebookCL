import React, {Component} from 'react';
import LstUser from './LstUser';
import {Button, ScrollView} from 'native-base';
export default class ScrnPost extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView>
        {/* eslint-disable-next-line prettier/prettier */}
        <LstUser
          navigation={this.props.navigation}
        />
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
