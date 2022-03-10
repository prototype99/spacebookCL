import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spice from './Spice';
export default class Gate extends Spice {
  constructor(props) {
    super(props);
  }
  checkLoggedIn = async () => {
    const value = await AsyncStorage.getItem('@session_token');
    if (value == null) {
      this.props.navigation.navigate('login');
    }
  };
  async componentDidMount() {
    this.unsubscribe = this.props.navigation.addListener('focus', () => {
      this.checkLoggedIn();
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return this.props.children;
  }
}
