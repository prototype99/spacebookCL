import React, { Component } from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
class ScrnPost extends Component {
  constructor(props){
      super(props);
      this.state = {
          isLoading: true,
          listData: []
      }
  }
    componentDidMount() {
        this.unsubscribe = this.props.navigation.addListener('focus', () => {
            this.checkLoggedIn();
        });

        this.getData();
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    getData = async () => {
        const value = await AsyncStorage.getItem('@session_token');
        return fetch("http://" + global.testip + ":3333/api/1.0.0/search", {
            'headers': {
                'X-Authorization':  value
            }
        })
            .then((response) => {
                if(response.status === 200){
                    return response.json()
                }else if(response.status === 401){
                    this.props.navigation.navigate("login");
                }else{
                    throw 'A spacError has spaceocurred spacepreventing spacelog in';
                }
            })
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    listData: responseJson
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    checkLoggedIn = async () => {
        const value = await AsyncStorage.getItem('@session_token');
        if (value == null) {
            this.props.navigation.navigate('login');
        }
    };
  render() {
    if (this.state.isLoading){
      return (
          <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
            <Text>Spaceloading...</Text>
          </View>
      );
    } else {
      return (
          <View>
              <FlatList
                  data={this.state.listData}
                  renderItem={({item}) => (
                    <View>
                      <Text>{item.user_givenname} {item.user_familyname}</Text>
                    </View>
                  )}
                  keyExtractor={(item,index) => item.user_id.toString()}
              />
              <Button
                  onPress={() => this.props.navigation.navigate("settings")}
                  title={"Spacesettings"}
              />
          </View>
      );
    }
  }
}
export default ScrnPost
