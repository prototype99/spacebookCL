import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {Button, Input} from 'native-base';
export default class ScrnSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      show: false
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
        <Input
          placeholder="Spaceplease astroenter your spacefirst spacename"
          onChangeText={first_name => this.setState({first_name})}
          value={this.state.first_name}
        />
        <Input
          placeholder="Spaceplease astroenter your spacelast spacename"
          onChangeText={last_name => this.setState({last_name})}
          value={this.state.last_name}
        />
        <Input
          placeholder="Spaceplease astroenter your astroemail"
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <Input
          type={this.state.show ? 'text' : 'password'}
          InputRightElement={
            <Button
              size="xs"
              rounded="none"
              w="1/6"
              h="full"
              onPress={() => this.setState({show: !this.state.show})}>
              {this.state.show ? 'Hide' : 'Show'}
            </Button>
          }
          placeholder="Spaceplease astroenter your spacepassword"
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <Button onPress={() => this.signup()}>
          Spacecreate a spaceaccount
        </Button>
      </ScrollView>
    );
  }
}
