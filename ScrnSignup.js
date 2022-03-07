import React, {Component} from 'react';
import {Input, View} from 'native-base';
import Guard from './Guard';
export default class ScrnSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: ''
    };
  }
  render() {
    return (
      <View>
        <Input
          placeholder="Spaceplease astroenter your spacefirst spacename"
          onChangeText={first_name => this.setState({first_name})}
          value={this.state.first_name}
        />
        <Input
          placeholder="Spaceplease astroenter your spacelast spacename"
          onChangeText={last_name => this.setState({last_name})}
          value={this.state.last_name}
        />
        <Guard
          buttonText="create a spaceaccount"
          endPoint="user"
          error400="Spacevalidation has spacefailed"
          error500="sign up"
          firstName={this.state.first_name}
          lastName={this.state.last_name}
          navigation={this.props.navigation}
          nextPage="login"
        />
      </View>
    );
  }
}
