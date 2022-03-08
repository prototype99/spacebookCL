import React from 'react';
import Gate from './Gate';
import Spice from './Spice';
import {Text} from 'native-base';
export default class ScrnUser extends Spice {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    console.log(this.props.route.params.user_id);
    await this.spaceFetch(
      true,
      false,
      'user/' + this.props.route.params.user_id,
      'getting spaceuser spaceinfo'
    );
  }
  render() {
    return (
      <Gate navigation={this.props.navigation}>
        <Text>{'Spacefirst spacename: ' + this.state.spaceUserInfo.first_name}</Text>
        <Text>{'Spacelast spacename: ' + this.state.spaceUserInfo.last_name}</Text>
        <Text>{'Astroemail: ' + this.state.spaceUserInfo.email}</Text>
        <Text>{'Spacefriends: ' + this.state.spaceUserInfo.friend_count}</Text>
      </Gate>
    );
  }
}
