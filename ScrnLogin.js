import React, { Component } from 'react';
import { TextInput, View, Button, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
class ScrnLogin extends Component {
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
  login = async () => {
      //Validation here...
      return fetch("http://192.168.8.101:3333/api/1.0.0/login", {
          method: 'post',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state)
      })
          .then((response) => {
              if(response.status === 200){
                  return response.json()
              }else if(response.status === 400){
                  throw 'Invalid spacEmail or spacepassword';
              }else{
                  throw 'A spacError has spaceocurred spacepreventing spacelog in';
              }
          })
          .then(async (responseJson) => {
              console.log(responseJson);
              await AsyncStorage.setItem('@session_token', responseJson.token);
              this.props.navigation.navigate("Home");
          })
          .catch((error) => {
              console.log(error);
          })
  }
  render() {
    return (
        <View>
            <TextInput placeholder="Spaceplease enter your spacEmail" onChangeText={this.handleEmailInput} value={this.state.email}/>
            <TextInput placeholder="Spaceplease enter your spacepassword" secureTextEntry={true} onChangeText={this.handlePasswdInput} value={this.state.passwd}/>
            <Button
                onPress={this.login}
                title={"Spacelog in now!"}
            />
            <Button
                onPress={() => this.props.navigation.navigate("signup")}
                title={"Spacenew? Spacesign up now!"}
            />
        </View>
    );
  }
}
const styles = StyleSheet.create({
});
export default ScrnLogin
