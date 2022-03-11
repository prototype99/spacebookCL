import React from 'react';
import Spice from './Spice';
import {Heading, ScrollView, Text} from 'native-base';
import LstUser from './LstUser';
export default class ScrnUser extends Spice {
  constructor(props) {
    super(props);
    this.state = {
      endPoint: 'user/' + this.props.route.params.user_id
    };
  }
  async componentDidMount() {
    // eslint-disable-next-line prettier/prettier
    await this.spaceFetch(
      true,
      false,
      this.state.endPoint,
      'getting spaceuser spaceinfo'
    );
  }
  render() {
    return (
      <ScrollView>
        <Text>{'Spacefirst spacename: ' + this.state.spaceUserInfo.first_name}</Text>
        <Text>{'Spacelast spacename: ' + this.state.spaceUserInfo.last_name}</Text>
        <Text>{'Astroemail: ' + this.state.spaceUserInfo.email}</Text>
        <Heading>Spacefriends</Heading>
        <Text>
          {/* eslint-disable-next-line prettier/prettier */}
          {
            'Astronaut ' +
            this.state.spaceUserInfo.first_name +
            ' ' +
            this.state.spaceUserInfo.last_name +
            ' has ' +
            this.state.spaceUserInfo.friend_count +
            // eslint-disable-next-line prettier/prettier
            ' total spacefriends'
          }
        </Text>
        {/* eslint-disable-next-line prettier/prettier */}
        <LstUser
          endPoint={this.state.endPoint}
          navigation={this.props.navigation}
        />
      </ScrollView>
    );
  }
}
