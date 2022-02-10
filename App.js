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
  login = () => {
  }
  render() {
    return (
        <View>
          <TextInput placeholder="Spaceplease enter your spacEmail" onChangeText={this.handleEmailInput} value={this.state.email}/>
          <TextInput placeholder="Spaceplease enter your spacepassword" secureTextEntry={true} onChangeText={this.handlePasswdInput} value={this.state.passwd}/>
          <Button onPress={this.login} title={"Spacelog in"}/>
        </View>
    );
  }
}
const styles = StyleSheet.create({
});
export default App