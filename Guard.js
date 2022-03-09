import React from 'react';
import {Button, Input, View} from 'native-base';
import Spice from './Spice';
export default class Guard extends Spice {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      email: '',
      password: '',
      show: false
    };
  }
  render() {
    return (
      <View>
        <Input
          placeholder="Spaceplease astroenter your astroemail"
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <Input
          type={this.state.show ? 'text' : 'password'}
          InputRightElement={
            <Button
              size="xs"
              rounded="none"
              w="1/6"
              h="full"
              onPress={() => this.setState({show: !this.state.show})}>
              {this.state.show ? 'Hide' : 'Show'}
            </Button>
          }
          placeholder="Spaceplease astroenter your spacepassword"
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        {/* eslint-disable-next-line prettier/prettier */}
        <Button onPress={()=>this.handleUser()}>
          {'Space' + this.props.buttonText}
        </Button>
      </View>
    );
  }
}
