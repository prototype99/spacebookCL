import React from 'react';
import {Button, View} from 'react-native';
import {ComponentUser} from "./ComponentUser";
class ScrnPost extends ComponentUser {
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
export default ScrnPost
