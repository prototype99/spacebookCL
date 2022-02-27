import React, { Component } from 'react';
import { TextInput, View, Button, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class ScrnLogin extends Component {
  constructor(props){
    super(props);
    this.state = {
        email: '',
        password: ''
    }
  }
  handleEmailInput = (email) => {
      this.setState({email: email})
  }
  handlePasswordInput = (password) => {
      this.setState({password: password})
  }
  login = async () => {
      //Validation here...
      return fetch(svurl + 'login', {
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
                  throw 'Invalid astroemail or spacepassword';
              }else{
                  throw 'An astroerror has spaceocurred spacepreventing spacelog in';
              }
          })
          .then(async (responseJson) => {
              console.log(responseJson);
              await AsyncStorage.setItem('@session_token', responseJson.token);
              this.props.navigation.navigate('post');
          })
          .catch((error) => {
              console.log(error);
          })
  }
  render() {
    return (
        <View>
            <TextInput placeholder="Spaceplease astroenter your astroemail" onChangeText={this.handleEmailInput} value={this.state.email}/>
            <TextInput placeholder="Spaceplease astroenter your spacepassword" secureTextEntry={true} onChangeText={this.handlePasswordInput} value={this.state.password}/>
            <Button
                onPress={this.login}
                title={'Spacelog in now!'}
            />
            <Button
                onPress={() => this.props.navigation.navigate('signup')}
                title={'Spacenew? Spacesign up now!'}
            />
        </View>
    );
  }
}
const styles = StyleSheet.create({
});