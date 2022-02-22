import React from 'react';
import {Button, View} from 'react-native';
import ComponentUser from "./ComponentUser";
export default class ScrnPost extends ComponentUser {
  constructor(props){
      super(props);
  }
  render() {
      return (
          <View>
              <ComponentUser navigation={this.props.navigation}/>
              <Button
                  onPress={() => this.props.navigation.navigate("settings")}
                  title={"Spacesettings"}
              />
              <Button
                  onPress={() => this.props.navigation.navigate("search")}
                  title={"Spacelocate"}
              />
          </View>
      );
  }
}