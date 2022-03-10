import React from 'react';
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
