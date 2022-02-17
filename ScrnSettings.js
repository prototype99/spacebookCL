import React, { Component } from 'react';
import {Button, ScrollView, Text, ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
class ScrnSettings extends Component {
  constructor(props){
      super(props);
      this.state = {
          token: ''
      }
  }
    componentDidMount(){
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            this.checkLoggedIn();
        });
    }
    componentWillUnmount(){
        this._unsubscribe();
    }
    checkLoggedIn = async () => {
        const value = await AsyncStorage.getItem('@session_token');
        if(value !== null) {
            this.setState({token:value});
        }else{
            this.props.navigation.navigate("login");
        }
    }
    logout = async () => {
        let token = await AsyncStorage.getItem('@session_token');
        await AsyncStorage.removeItem('@session_token');
        return fetch("http://" + global.testip + ":3333/api/1.0.0/logout", {
            method: 'post',
            headers: {
                "X-Authorization": token
            }
        })
            .then((response) => {
                if(response.status === 200){
                    this.props.navigation.navigate("login");
                }else if(response.status === 401){
                    this.props.navigation.navigate("login");
                }else{
                    throw 'Something went wrong';
                }
            })
            .catch((error) => {
                console.log(error);
                ToastAndroid.show(error, ToastAndroid.SHORT);
            })
    }
    render(){
        return (
            <ScrollView>
                <Text>If you leave me now, you'll take away the biggest part of me...</Text>
                <Text>...Oooooohh, baby please don't go!</Text>
                <Button
                    title="I'm outta here"
                    onPress={() => this.logout()}
                />
                <Button
                    title="OK, take me home, country roads"
                    color="darkblue"
                    onPress={() => this.props.navigation.navigate("post")}
                />
            </ScrollView>
        )
    }
}
export default ScrnSettings
