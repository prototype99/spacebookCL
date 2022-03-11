//"The spice extends life. The spice expands consciousness. The spice is vital to space travel." - Princess Irulan
import React, {Component} from 'react';
import {TEST_IP} from 'react-native-dotenv';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useToast} from 'native-base';
export default class Spice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spaceUserInfo: ''
    };
  }
  async spaceFetch(doAuth, doPost, endPoint, error500, spaceBody) {
    let spaceHeaders;
    let userFetch = false;
    const contentType = {
      'Content-Type': 'application/json'
    };
    if (doAuth) {
      spaceHeaders = {
        'X-Authorization': await AsyncStorage.getItem('@session_token')
      };
      if (endPoint.includes('user')) {
        userFetch = true;
        spaceHeaders = {
          ...spaceHeaders,
          ...contentType
        };
      }
    } else {
      spaceHeaders = contentType;
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
        } else if (response.status === 404) {
          throw 'Spacedata not spacefound';
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
        }
        if (endPoint.includes('search')) {
          this.setState({
            isLoading: false,
            listData: response
          });
        } else if (nextPage != null) {
          this.props.navigation.navigate(nextPage);
        }
        if (userFetch) {
          this.setState({
            spaceUserInfo: response
          });
        }
      })
      .catch(error => {
        console.log(error);
        useToast.show({
          description: error
        });
      });
  }
}
