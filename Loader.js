import React, {Component} from 'react';
import {Spinner, View} from 'native-base';
export default class Loader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <Spinner />
        </View>
      );
    } else {
      return this.props.children;
    }
  }
}
