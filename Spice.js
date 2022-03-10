//"The spice extends life. The spice expands consciousness. The spice is vital to space travel." - Princess Irulan
import React, {Component} from 'react';
import {TEST_IP} from 'react-native-dotenv';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Toast} from 'native-base';
export default class Spice extends Component {
  constructor(props) {
    super(props);
  }
  async spaceFetch(doAuth, doPost, endPoint, error500, spaceBody) {
    let spaceHeaders;
    if (doAuth) {
      spaceHeaders = {
        'X-Authorization': await AsyncStorage.getItem('@session_token')
      };
    } else {
      spaceHeaders = {
        'Content-Type': 'application/json'
      };
    }
    let spaceOptions = {
      headers: {
        ...spaceHeaders
      }
    };
    if (doPost) {
      spaceOptions = {
        ...spaceOptions,
        method: 'post'
      };
    }
    if (spaceBody != null) {
      spaceOptions = {
        ...spaceOptions,
        body: spaceBody
      };
    }
    return fetch('http://' + TEST_IP + ':3333/api/1.0.0/' + endPoint, {
      ...spaceOptions
    })
      .then(async response => {
        if (endPoint === 'logout') {
          await AsyncStorage.removeItem('@session_token');
        }
        if (response.status === 200) {
          if (endPoint === 'logout') {
            this.props.navigation.navigate('login');
          } else {
            return response.json();
          }
        } else if (response.status === 201) {
          return response.json();
        } else if (response.status === 400) {
          let msg400;
          if (endPoint === 'login') {
            msg400 = 'Invalid astroemail or spacepassword';
          } else {
            msg400 = 'Spacevalidation has spacefailed';
          }
          throw msg400;
        } else if (response.status === 401) {
          this.props.navigation.navigate('login');
        } else {
          throw 'An astroerror has spaceocurred spacepreventing space' + error500;
        }
      })
      .then(async response => {
        let nextPage;
        if (endPoint === 'login') {
          await AsyncStorage.setItem('@session_token', response.token);
          nextPage = 'post';
        } else if (endPoint === 'user') {
          nextPage = 'login';
        } else if (doAuth && !doPost) {
          this.setState({
            isLoading: false,
            listData: response
          });
        }
        this.props.navigation.navigate(nextPage);
      })
      .catch(error => {
        console.log(error);
        Toast.show(error);
      });
  }
}
