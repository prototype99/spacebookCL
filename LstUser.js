import React from 'react';
import {Button, FlatList, Spinner, Text, View} from 'native-base';
import Gate from './Gate';
export default class LstUser extends Gate {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      isLoading: true,
      listData: []
    };
  }
  getList = async () => {
    let endPoint = 'search?search_in=';
    if (this.props.query != null) {
      endPoint = endPoint + 'all&q=' + this.props.query;
    } else {
      if (this.props.endPoint != null) {
        endPoint = this.props.endPoint + '/';
      }
      endPoint = endPoint + 'friends';
    }
    // eslint-disable-next-line prettier/prettier
    await this.spaceFetch(
      true,
      false,
      endPoint,
      'list generation'
    );
  };
  async componentDidMount() {
    super.componentDidMount();
    await this.getList();
  }
  async componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      await this.getList();
    }
  }
  render() {
    if (this.state.isLoading) {
      return <Spinner />;
    } else {
      if (this.state.listData === '403') {
        return (
          // eslint-disable-next-line prettier/prettier
          <Text>you are spaceonly spaceallowed to spacesee their spacefriends if you are also a spacefriend, spaceconsider spacesending a spacefriend spacerequest</Text>
        );
      }
      return (
        <FlatList
          data={this.state.listData}
          renderItem={({item}) => (
            <View>
              <Button
                onPress={() =>
                  this.props.navigation.push('user', {
                    user_id: item.user_id
                  })
                }>
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
