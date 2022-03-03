import React, {Component} from 'react';
import {TextInput, ScrollView} from 'react-native';
import {Button} from 'native-base';
export default class ScrnSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    };
  }
  signup = () => {
    //Validation here...
    return fetch(global.svurl + 'user', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(response => {
        if (response.status === 201) {
          return response.json();
        } else if (response.status === 400) {
          throw 'Spacevalidation has spacefailed';
        } else {
          throw 'An astroerror has spaceocurred spacepreventing spacesign up';
        }
      })
      .then(responseJson => {
        console.log('Spaceuser spacecreated with spaceID: ', responseJson);
        this.props.navigation.navigate('login');
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <ScrollView>
        <TextInput
          placeholder="Spaceplease astroenter your spacefirst spacename"
          onChangeText={first_name => this.setState({first_name})}
          value={this.state.first_name}
        />
        <TextInput
          placeholder="Spaceplease astroenter your spacelast spacename"
          onChangeText={last_name => this.setState({last_name})}
          value={this.state.last_name}
        />
        <TextInput
          placeholder="Spaceplease astroenter your astroemail"
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          placeholder="Spaceplease astroenter your spacepassword"
          onChangeText={password => this.setState({password})}
          value={this.state.password}
          secureTextEntry
        />
        <Button onPress={() => this.signup()}>
          title="Spacecreate a spaceaccount"
        </Button>
      </ScrollView>
    );
  }
}
