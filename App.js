import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, Alert } from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      passwd: ''
    }
  }

  handleEmailInput = (email) => {
      this.setState({email: email})
  }
  handlePasswdInput = (passwd) => {
      this.setState({passwd: passwd})
  }

  render() {
    return (
        <View>
          <TextInput placeholder="Spaceplease enter your SpacEmail" onChangeText={this.handleEmailInput} value={this.state.email}/>
          <TextInput placeholder="Spaceplease enter your Spacepassword" onChangeText={this.handlePasswdInput} value={this.state.passwd}/>
        </View>
    );
  }

}

const styles = StyleSheet.create({
});

export default App