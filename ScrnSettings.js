import React from 'react';
import {Button} from 'native-base';
import Gate from './Gate';
import Spice from './Spice';
export default class ScrnSettings extends Spice {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Gate navigation={this.props.navigation}>
        {/* eslint-disable-next-line prettier/prettier */}
        <Button onPress={() => this.spaceFetch(
          true,
          true,
          'logout',
          'log out'
        )}>
          Spacelog out your spaceaccount
        </Button>
      </Gate>
    );
  }
}
