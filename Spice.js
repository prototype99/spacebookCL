//"The spice extends life. The spice expands consciousness. The spice is vital to space travel." - Princess Irulan
import React, {Component} from 'react';
import {TEST_IP} from 'react-native-dotenv';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class Spice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      svurl: 'http://' + TEST_IP + ':3333/api/1.0.0/'
    };
  }
  getList = async () => {
    const token = await AsyncStorage.getItem('@session_token');
    let fetchString = this.state.svurl + 'search?search_in=' + this.props.scope;
    if (this.props.query != null) {
      fetchString = fetchString + '&q=' + this.props.query;
    }
    return fetch(fetchString, {
      headers: {
        'X-Authorization': token
      }
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 401) {
          this.props.navigation.navigate('login');
        } else {
          throw 'An astroerror has spaceocurred spacepreventing spacelog in';
        }
      })
      .then(responseJson => {
        this.setState({
          isLoading: false,
          listData: responseJson
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}
