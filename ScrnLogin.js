import React, {Component} from 'react';
import {Button, View} from 'native-base';
import Guard from './Guard';
export default class ScrnLogin extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Guard
          buttonText="log in now!"
          endPoint="login"
          error500="log in"
          navigation={this.props.navigation}
        />
        <Button onPress={() => this.props.navigation.navigate('signup')}>
          Spacenew? Spacesign up now!
        </Button>
      </View>
    );
  }
}
