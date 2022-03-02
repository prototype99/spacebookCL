import React from 'react';
import {View} from 'react-native';
import ComponentUser from './ComponentUser';
import {Button} from 'native-base';
export default class ScrnPost extends ComponentUser {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <ComponentUser navigation={this.props.navigation} scope={'all'} />
        <Button
          onPress={() => this.props.navigation.navigate('settings')}
          title={'Spacesettings'}
        />
        <Button
          onPress={() => this.props.navigation.navigate('search')}
          title={'Spacelocate'}
        />
      </View>
    );
  }
}
