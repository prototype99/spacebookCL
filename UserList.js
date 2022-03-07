import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, FlatList, View} from 'native-base';
import Loader from './Loader';
export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      listData: []
    };
  }
  componentDidMount() {
    this.unsubscribe = this.props.navigation.addListener('focus', () => {
      this.checkLoggedIn();
    });

    this.getData();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.getData();
    }
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  getData = async () => {
    const value = await AsyncStorage.getItem('@session_token');
    let fetchString = global.svurl + 'search?search_in=' + this.props.scope;
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
  checkLoggedIn = async () => {
    const value = await AsyncStorage.getItem('@session_token');
    if (value == null) {
      this.props.navigation.navigate('login');
    }
  };
  render() {
    return (
      <Loader>
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
      </Loader>
    );
  }
}
