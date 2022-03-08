import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, Input, View} from 'native-base';
import Spice from './Spice';
export default class Guard extends Spice {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      show: false,
      tokenProvided: false
    };
  }
  handleUser = () => {
    //Validation here...
    return fetch(this.state.svurl + this.props.endPoint, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        first_name: this.props.firstName,
        last_name: this.props.lastName
      })
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 201) {
          return response.json();
        } else if (response.status === 400) {
          throw this.props.error400;
        } else {
          throw 'An astroerror has spaceocurred spacepreventing space' + this.props.error500;
        }
      })
      .then(async responseJson => {
        console.log(responseJson);
        if (this.props.tokenProvided) {
          await AsyncStorage.setItem('@session_token', responseJson.token);
        }
        this.props.navigation.navigate(this.props.nextPage);
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
        <Button onPress={()=>this.handleUser()}>
          {'Space' + this.props.buttonText}
        </Button>
      </View>
    );
  }
}
