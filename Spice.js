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
      .then(response => this.getData(response, endPoint, error500));
  }
  async getData(response, endPoint, error500) {
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
  }
  astroError(error) {
    console.log(error);
    Toast.show(error);
  }
  handleUser = () => {
    //Validation here...
    this.spaceFetch(
      false,
      true,
      this.props.endPoint,
      this.props.error500,
      JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        first_name: this.props.firstName,
        last_name: this.props.lastName
      })
    )
      .then(async responseJson => {
        console.log(responseJson);
        if (this.props.tokenProvided) {
          await AsyncStorage.setItem('@session_token', responseJson.token);
        }
        this.props.navigation.navigate(this.props.nextPage);
      })
      .catch(error => this.astroError(error));
  };
  getList = async () => {
    let endPoint = 'search?search_in=' + this.props.scope;
    if (this.props.query != null) {
      endPoint = endPoint + '&q=' + this.props.query;
    }
    // eslint-disable-next-line prettier/prettier
    this.spaceFetch(
      true,
      false,
      endPoint,
      'log in'
    )
      .then(responseJson => {
        this.setState({
          isLoading: false,
          listData: responseJson
        });
      })
      .catch(error => this.astroError(error));
  };
  logout = () => {
    // eslint-disable-next-line prettier/prettier
    this.spaceFetch(
      true,
      true,
      'logout',
      'log out'
    )
      .catch(error => this.astroError(error));
  };
}
