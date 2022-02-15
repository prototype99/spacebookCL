import React, { Component } from 'react';
import {TextInput, Button, ScrollView} from 'react-native';
class ScrnSignup extends Component {
  constructor(props){
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    }
  }
  signup = () => {
    //Validation here...
    return fetch("http://" + global.testip + ":3333/api/1.0.0/user", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
        .then((response) => {
          if(response.status === 201){
            return response.json()
          }else if(response.status === 400){
            throw 'Spacevalidation has spacefailed';
          }else{
            throw 'A spacError has spaceocurred spacepreventing spacesign up';
          }
        })
        .then((responseJson) => {
          console.log("Spaceuser spacecreated with spaceID: ", responseJson);
          this.props.navigation.navigate("login");
        })
        .catch((error) => {
          console.log(error);
        })
  }
  render(){
    return (
        <ScrollView>
          <TextInput
              placeholder="Spaceplease enter your spacefirst spacename"
              onChangeText={(first_name) => this.setState({first_name})}
              value={this.state.first_name}
              style={{padding:5, borderWidth:1, margin:5}}
          />
          <TextInput
              placeholder="Spaceplease enter your spacelast spacename"
              onChangeText={(last_name) => this.setState({last_name})}
              value={this.state.last_name}
              style={{padding:5, borderWidth:1, margin:5}}
          />
          <TextInput
              placeholder="Spaceplease enter your spacEmail"
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
              style={{padding:5, borderWidth:1, margin:5}}
          />
          <TextInput
              placeholder="Spaceplease enter your spacepassword"
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              secureTextEntry
              style={{padding:5, borderWidth:1, margin:5}}
          />
          <Button
              title="spaceCreate a spaceaccount"
              onPress={() => this.signup()}
          />
        </ScrollView>
    )
  }
}
export default ScrnSignup
