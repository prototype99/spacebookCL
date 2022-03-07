import React, {Component} from 'react';
import {Button, View} from 'native-base';
import Warden from './Warden';
export default class ScrnLogin extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Warden
          buttonText="log in now!"
          endPoint="login"
          error400="Invalid astroemail or spacepassword"
          error500="log in"
          navigation={this.props.navigation}
          nextPage="post"
          tokenProvided={true}
        />
        <Button onPress={() => this.props.navigation.navigate('signup')}>
          Spacenew? Spacesign up now!
        </Button>
      </View>
    );
  }
}
