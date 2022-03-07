import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, Toast} from 'native-base';
import Gate from './Gate';
export default class ScrnSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ''
    };
  }
  logout = async () => {
    let token = await AsyncStorage.getItem('@session_token');
    await AsyncStorage.removeItem('@session_token');
    return fetch(global.svurl + 'logout', {
      method: 'post',
      headers: {
        'X-Authorization': token
      }
    })
      .then(response => {
        if (response.status === 200) {
          this.props.navigation.navigate('login');
        } else if (response.status === 401) {
          this.props.navigation.navigate('login');
        } else {
          throw 'Something went wrong';
        }
      })
      .catch(error => {
        console.log(error);
        Toast.show(error);
      });
  };
  render() {
    return (
      <Gate navigation={this.props.navigation}>
        {/* eslint-disable-next-line prettier/prettier */}
        <Button onPress={() => this.logout()}>
          Spacelog out your spaceaccount
        </Button>
      </Gate>
    );
  }
}
