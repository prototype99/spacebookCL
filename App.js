import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
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
      Alert.alert('spacEmail: ' + this.state.email)
      Alert.alert('spacepassword: ' + this.state.passwd)
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
export default function App() {
    <NavigationContainer>
        <Stack.Navigator>
        </Stack.Navigator>
    </NavigationContainer>
}