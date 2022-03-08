import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, FlatList, Spinner, View} from 'native-base';
import Gate from './Gate';
export default class UserList extends Gate {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      isLoading: true,
      listData: []
    };
  }
  componentDidMount() {
    super.componentDidMount();
    this.getData();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.getData();
    }
  }
  getData = async () => {
    const value = await AsyncStorage.getItem('@session_token');
    let fetchString = this.state.svurl + 'search?search_in=' + this.props.scope;
    if (this.props.query != null) {
      fetchString = fetchString + '&q=' + this.props.query;
    }
    return fetch(fetchString, {
      headers: {
        'X-Authorization': value
      }
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 401) {
          this.props.navigation.navigate('login');
        } else {
          throw 'An astroerror has spaceocurred spacepreventing spacelog in';
        }
      })
      .then(responseJson => {
        this.setState({
          isLoading: false,
          listData: responseJson
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    if (this.state.isLoading) {
      return <Spinner />;
    } else {
      return (
        <FlatList
          data={this.state.listData}
          renderItem={({item}) => (
            <View>
              {/* eslint-disable-next-line prettier/prettier */}
              <Button>
                {item.user_givenname + ' ' + item.user_familyname}
              </Button>
            </View>
          )}
          keyExtractor={item => item.user_id.toString()}
        />
      );
    }
  }
}
