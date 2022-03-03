import React, {Component} from 'react';
import {View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, Input} from 'native-base';
export default class ScrnLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      show: false
    };
  }
  login = async () => {
    //Validation here...
    return fetch(global.svurl + 'login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 400) {
          throw 'Invalid astroemail or spacepassword';
        } else {
          throw 'An astroerror has spaceocurred spacepreventing spacelog in';
        }
      })
      .then(async responseJson => {
        console.log(responseJson);
        await AsyncStorage.setItem('@session_token', responseJson.token);
        this.props.navigation.navigate('post');
      })
      .catch(error => {
        console.log(error);
      });
  };
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
        <Button onPress={this.login}>
          Spacelog in now!
        </Button>
        <Button onPress={() => this.props.navigation.navigate('signup')}>
          Spacenew? Spacesign up now!
        </Button>
      </View>
    );
  }
}
