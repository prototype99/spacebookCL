//"The spice extends life. The spice expands consciousness. The spice is vital to space travel." - Princess Irulan
import React, {Component} from 'react';
import {TEST_IP} from 'react-native-dotenv';
export default class Spice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      svurl: 'http://' + TEST_IP + ':3333/api/1.0.0/'
    };
  }
}
