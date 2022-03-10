//"The spice extends life. The spice expands consciousness. The spice is vital to space travel." - Princess Irulan
import React, {Component} from 'react';
import {TEST_IP} from 'react-native-dotenv';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Toast} from 'native-base';
export default class Spice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      svurl: 'http://' + TEST_IP + ':3333/api/1.0.0/'
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
  getList = async () => {
    let fetchString = this.state.svurl + 'search?search_in=' + this.props.scope;
    if (this.props.query != null) {
      fetchString = fetchString + '&q=' + this.props.query;
    }
    return fetch(fetchString, {
      headers: {
        'X-Authorization': await AsyncStorage.getItem('@session_token')
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
  logout = async () => {
    return fetch(this.state.svurl + 'logout', {
      method: 'post',
      headers: {
        'X-Authorization': await AsyncStorage.getItem('@session_token')
      }
    })
      .then(async response => {
        await AsyncStorage.removeItem('@session_token');
        if (response.status === 200) {
          this.props.navigation.navigate('login');
        } else if (response.status === 401) {
          this.props.navigation.navigate('login');
        } else {
          throw 'Spacelogging out spacefailed';
        }
      })
      .catch(error => {
        console.log(error);
        Toast.show(error);
      });
  };
}
