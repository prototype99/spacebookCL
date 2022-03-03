import React, {Component} from 'react';
import {TextInput, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button} from 'native-base';
export default class ScrnLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  handleEmailInput = email => {
    this.setState({email: email});
  };
  handlePasswordInput = password => {
    this.setState({password: password});
  };
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
        <TextInput
          placeholder="Spaceplease astroenter your astroemail"
          onChangeText={this.handleEmailInput}
          value={this.state.email}
        />
        <TextInput
          placeholder="Spaceplease astroenter your spacepassword"
          secureTextEntry={true}
          onChangeText={this.handlePasswordInput}
          value={this.state.password}
        />
        {/* eslint-disable-next-line prettier/prettier */}
        <Button onPress={() => this.login}>
          Spacelog in now!
        </Button>
        <Button onPress={() => this.props.navigation.navigate('signup')}>
          Spacenew? Spacesign up now!
        </Button>
      </View>
    );
  }
}
